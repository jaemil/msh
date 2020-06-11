var msHopf = (function() {

    var form = {};
    var payerTransfer = false;
    var parentTransfer = false;
    var needsParent = false;

    var init = function() {

        initEventHandler();

        $('.registration-mandatory').each(function() {
            if ($(this).is('input')) form[$(this).attr('id')] = false;
        });
    };

    function initEventHandler() {

        $('#registration-is-payer').click(function() {
            payerTransfer = !payerTransfer;
            payerDataTransfer(payerTransfer);
        });

        $('#registration-parent-same-address').click(function() {
            parentTransfer = !parentTransfer;
            parentDataTransfer(parentTransfer);
        });

        $('.registration-button-selector>div').click(function() {
            var that = this;

            $(this).parent().children('div').each(function() {
                $(this).addClass('registration-button-selector-disabled');
            });
            $(that).removeClass('registration-button-selector-disabled');

            //If that has input then activate the input field, set cursor and change color
            if ($(that).has('input')) {
                $('input', that).removeAttr('disabled', 'false').focus();
            }
        });

        $('#registration-birthday').focusout(function() {
            var date = $(this).val().split('.');
            date = date[1] + '/' + date[0] + '/' + date[2];

            var current = (new Date()).getTime();
            var birthday = (new Date(date)).getTime();

            var age = (current - birthday) / 1000 / 60 / 60 / 24 / 365;

            console.log(age);
            console.log('needsParent: ' + needsParent);

            if (age < 18 && !needsParent) {
                needsParent = true;
                $('#registration-needs-parent').css('display', 'block');
                $('#registration-needs-parent .registration-text').addClass('registration-mandatory');
            } else if (age >= 18 && needsParent) {
                needsParent = false;
                $('#registration-needs-parent').css('display', 'none');
                $('#registration-needs-parent .registration-text').removeClass('registration-mandatory');
            }

        });

        $('.registration-text').focusout(function() {
            // Only validate on mandatory fields
            if (form[$(this).attr('id')]) {
                form[$(this).attr('id')] = true;
                validateForm();
            }
        });

        $.datepicker.setDefaults($.datepicker.regional.de);
        $('#registration-birthday').datepicker({
            prevText: '&#x3c;zurück',
            prevStatus: '',
            prevJumpText: '&#x3c;&#x3c;',
            prevJumpStatus: '',
            nextText: 'Vor&#x3e;',
            nextStatus: '',
            nextJumpText: '&#x3e;&#x3e;',
            nextJumpStatus: '',
            currentText: 'heute',
            currentStatus: '',
            todayText: 'heute',
            todayStatus: '',
            clearText: '-',
            clearStatus: '',
            closeText: 'schließen',
            closeStatus: '',
            monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
            ],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
                'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
            ],
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            changeYear: true,
            changeMonth: true,
            dateFormat: 'dd.mm.yy',
            yearRange: '-99:-0'
        }).datepicker('setDate', new Date());

        $('.registration-text').keyup(function(e) {
            form[$(this).attr('id')] = true;

            // If this field is valid then validate and make green
            if (validateField(this)) validateForm();

            // If field is empty again then make it orange again
            // but only when field is mandatory
            if (form[$(this).attr('id')]) {
                if ($(this).val().length === 0) {
                    $(this).removeClass('registration-green')
                        .removeClass('registration-red')
                        .addClass('registration-orange');
                }
            }

            // If user deleted something then check again
            if ((e.keyCode || e.which) == 8 && $(this).val().length > 1) {
                validateForm();
            }

        });

        $('.registration-validation-fieldset input').click(function() {
            $(this).parents().attr('value', 'set')
                .removeClass('registration-orange')
                .removeClass('registration-red')
                .addClass('registration-green');
            validateForm();
        });

        $('#registration-submit').click(function(event) {
            event.preventDefault();
            if (isFormValid()) {
                // Put value of buttons in input
                $('.registration-hidden').each(function() {
                    var val;
                    $(this).prev().children().each(function() {
                        if (!$(this).hasClass('registration-button-selector-disabled')) {
                            if ($(this).children().length === 0)
                                val = $(this).html();
                            else
                                val = $(this).children().val();
                        }
                    });
                    $(this).val(val);
                });

                $('form.registration').css('display', 'none');
                $("<div id='circularG'><div id='circularG_1' class='circularG'></div><div id='circularG_2' class='circularG'></div><div id='circularG_3' class='circularG'></div><div id='circularG_4' class='circularG'></div><div id='circularG_5' class='circularG'></div><div id='circularG_6' class='circularG'></div><div id='circularG_7' class='circularG'></div><div id='circularG_8' class='circularG'></div></div>").insertAfter('form.registration');

                var postData = $('form.registration').serialize();
                postData += '&needsParent=' + needsParent;

                $.ajax({
                    url: 'https://musikschule-hopf.de/ws/register.php',
                    type: 'POST',
                    data: postData,
                    dataType: 'text',
                    success: function(result) {
                        $('#circularG').remove();
                        if (result == 'done') {
                            $('form.registration').css('display', 'none').css('opacity', '0').css('transition', '1s ease-in-out');
                            $('form.registration').html("<h2 style='text-align:center; transition: 1s;'>Super!<br />Deine Anmeldung ist bei uns angekommen. Schau doch in deinen E-Mail Postfach nach, ob du deine Anmeldung bereits erhalten hast</h2><div style='height: 90px; width: 90px; background-color: #32af32; border-radius: 50%; margin: auto; ' ><p style='padding-top: 20%; text-align:center; color: white; font-size:28pt; font-weight: bold;'>&#10003;</p></div>");
                            $('form.registration').css('display', 'block');
                            $('form.registration').css('opacity', '1');
                        } else {
                            $('form.registration').css('display', 'none').css('opacity', '0').css('transition', '1s ease-in-out');
                            $('form.registration').html("<h2 style='text-align:center; transition: 1s;'>Schade!<br />Leider hat die Anmeldung nicht geklappt. Bitte versuche es später noch einmal.</h2><div style='height: 90px; width: 90px; background-color: #af3232; border-radius: 50%; margin: auto; ' ><p style='padding-top: 20%; text-align:center; color: white; font-size:28pt; font-weight: bold;'>&#10007;</p></div>");
                            $('form.registration').css('display', 'block');
                            $('form.registration').css('opacity', '1');
                        }
                    }
                });
                $(this).stop();

            } else {
                validateForm();
                $(this).stop();
            }
        });
    }

    function payerDataTransfer(enable) {

        if (enable) {

            $('#registration-data-transfer-checkbox').prop('checked', true);

            $('#registration-sepa-name').val($('#registration-name').val());
            $('#registration-sepa-surname').val($('#registration-surname').val());
            $('#registration-sepa-street').val($('#registration-street').val());
            $('#registration-sepa-plz').val($('#registration-plz').val());
            $('#registration-sepa-city').val($('#registration-city').val());

            form['registration-sepa-name'] = true;
            form['registration-sepa-surname'] = true;
            form['registration-sepa-street'] = true;
            form['registration-sepa-city'] = true;
            form['registration-sepa-plz'] = true;

            validateForm();

        } else {

            $('#registration-data-transfer-checkbox').prop('checked', false);

            $('#registration-sepa-name').val('');
            $('#registration-sepa-surname').val('');
            $('#registration-sepa-street').val('');
            $('#registration-sepa-city').val('');
            $('#registration-sepa-plz').val('');

            validateForm();
        }

    }

    function parentDataTransfer(enable) {

        if (enable) {

            $('#registration-parent-transfer-checkbox').prop('checked', true);

            $('#registration-parent-street').val($('#registration-street').val());
            $('#registration-parent-plz').val($('#registration-plz').val());
            $('#registration-parent-city').val($('#registration-city').val());

            form['registration-parent-street'] = true;
            form['registration-parent-city'] = true;
            form['registration-parent-plz'] = true;

            validateForm();

        } else {

            $('#registration-parent-transfer-checkbox').prop('checked', false);

            $('#registration-parent-street').val('');
            $('#registration-parent-city').val('');
            $('#registration-parent-plz').val('');

            validateForm();
        }

    }

    function validateField(element) {
        var ret = true;

        // If element is input the val can't be empty
        if ($(element).val() === '' && $(element).is('input'))
            ret = false;

        if ($(element).hasClass('registration-validation-has-number')) {
            ret = containsNumber($(element).val()) && $(element).val().match(/[a-z]/i);
        }

        if ($(element).hasClass('registration-validation-number')) {
            ret = $.isNumeric(($(element).val()));
        }

        if ($(element).hasClass('registration-validation-fieldset')) {
            if ($(element).children('input:checked').length != 1)
                ret = false;
        }

        if ($(element).hasClass('registration-validation-email')) {
            ret = validateEmail($(element).val());
        }

        if ($(element).hasClass('registration-validation-iban')) {
            ret = IBAN.isValid($(element).val());
        }

        if ($(element).hasClass('registration-validation-bic')) {
            ret = validateSwift($(element).val());
        }

        if ($(element).hasClass('registration-validation-birthday')) {
            ret = true;
        }

        return ret;
    }

    function containsNumber(n) {
        return n.match(/\d+/g);
    }

    function validateEmail(email) {
        var regEmail = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return regEmail.test(email);
    }

    function validateSwift(swift) {
        var regSWIFT = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/;
        return regSWIFT.test(swift);
    }

    function isFormValid() {
        var ret = true;
        $('.registration-mandatory').each(function() {
            if (form[$(this).attr('id')] && !validateField(this)) {
                ret = false;
                $(this).removeClass('registration-orange').removeClass('registration-green').addClass('registration-red');
            } else if (form[$(this).attr('id')]) {
                $(this).removeClass('registration-orange').removeClass('registration-red').addClass('registration-green');
            } else if (!form[$(this).attr('id')] && form[$(this).attr('id')] !== undefined) {
                ret = false;
            }
        });
        $('.registration-validation-fieldset').each(function() {
            if ($(this).parents().hasClass('registration-mandatory')) {
                if (!validateField($(this).parents())) {
                    ret = false;
                    $(this).parents().removeClass('registration-orange').removeClass('registration-green').addClass('registration-red');
                } else
                    $(this).parents().removeClass('registration-orange').removeClass('registration-red').addClass('registration-green');
            }
        });
        return ret;
    }

    function validateForm() {
        if (isFormValid())
            $('#registration-submit').prop('disabled', false).removeClass('registration-disabled');
        else if (!$('#registration-submit').hasClass('registration-disabled'))
            $('#registration-submit').prop('disabled', true).addClass('registration-disabled');
    }

    return {
        init: init
    };

})();

$(document).ready(function() {
    msHopf.init();
});
