import React, { Component } from 'react'

export default class Anmeldung extends Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "../../../script/script.js";
        script.async = true;

        document.body.appendChild(script);


        const iban_min = document.createElement("script");

        iban_min.src = "../../../script/iban-min.js";
        iban_min.async = true;

        document.body.appendChild(iban_min);
    }


    render() {
        return (
            <div>
                <h2 className = "r">Anmeldung</h2>
                Hier kannst du dich für den Unterricht bei der Musikschule Hopf anmelden.
                Der Prozess ist ganz einfach, er besteht aus 3 Schritten.
                **1. Online Formular ausfüllen:**
                Bitte fülle alle markierten Felder aus. Grüne Farbe heißt, dass die Eingabe stimmt!
                Sobald sich der 'Absenden' - Button aktiviert kannst du das Formular abschicken.
                Daraufhin bekommst du einen Link zu einer PDF-Datei ([was ist eine
                PDF-Datei?](https://acrobat.adobe.com/de/de/products/about-adobe-pdf.html)) an deine E-Mail Adresse gesendet.
                **2. PDF-Datei ausdrucken und unterschreiben:**
                Während deine Anmeldung direkt hier bei uns ankommt solltest du die Anmeldung ausdrucken und unterschreiben.
                Die Anmeldung kannst du uns entweder per E-Mail oder per Post schicken. Natürlich kannst du die Anmeldung auch
                persönlich in der Musikschule unterschreiben.
                **3. Lehrer, Tag und Uhrzeit:**
                Das wichtigste fehlt natürlich noch. An welchem Tag, zu welcher Zeit und bei welchem Lehrer wird dein Unterricht sein?
                Dazu werden wir dich per Telefon oder E-Mail kontaktieren. Natürlich bist du auch dabei gerne eingeladen persönlich bei
                uns vorbei zu kommen.
                ***Wichtig:** Unterricht beginnt erst nach Eingang der unterschriebenen Anmeldung und der Bestätigung durch das Büro.*
                **Wenn du fragen hast, dann melde dich doch einfach bei uns, oder komm vorbei!**
        <hr />
                **Bitte alle <span style={{ color: 'orange' }}>orange markierten Felder</span> ausfüllen! Auf den "Absenden"-Button kann erst
                geklickt werden, wenn alle erfolderlichen Felder nach Eingabe der erforderlichen Daten grün sind!**
        <form className="registration" acceptCharset="UTF-8">
            
                    <h3 className="r">
                        Schülerdaten:
          </h3>
                    <label htmlFor="registration-name">Vorname:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-name" name="name" placeholder="Vorname" maxLength={25} />
                    <br />
                    <label htmlFor="registration-surname">Nachname:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-surname" name="surname" placeholder="Nachname" maxLength={25} />
                    <br />
                    <label htmlFor="registration-gender">Geschlecht:</label>
                    <fieldset className="gender-fieldset registration-orange registration-validation-fieldset registration-mandatory">
                        <input type="radio" id="registration-male" name="registration-gender" defaultValue="m" />
                        <label htmlFor="registration-male">Männlich</label>
                        <input type="radio" id="registration-female" name="registration-gender" defaultValue="f" />
                        <label htmlFor="registration-female">Weiblich</label>
                        <br />
                    </fieldset>
                    <label htmlFor="street">Straße Hausnummer:</label>
                    <input type="text" className="registration-text registration-validation-has-number registration-mandatory registration-orange" id="registration-street" name="street" placeholder="Straße Hausnummer" maxLength={45} />
                    <br />
                    <label htmlFor="registration-plz">PLZ:</label>
                    <input type="text" className="registration-text registration-validation-number registration-mandatory registration-orange" id="registration-plz" name="plz" placeholder="PLZ" maxLength={5} />
                    <br />
                    <label htmlFor="registration-city">Ort:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-city" name="city" placeholder="Ort" maxLength={45} />
                    <br />
                    <label htmlFor="registration-phone">Telefon:</label>
                    <input type="tel" className="registration-text registration-validation-phone registration-mandatory registration-orange" id="registration-phone" name="phone" placeholder="Telefon" maxLength={30} />
                    <br />
                    <label htmlFor="registration-mobile">Mobil:</label>
                    <input type="tel" className="registration-text registration-validation-phone" id="registration-mobile" name="mobile" placeholder="Mobil" maxLength={30} />
                    <br />
                    <label htmlFor="registration-email">E-Mail:</label>
                    <input type="email" className="registration-text registration-validation-email registration-mandatory registration-orange" id="registration-email" name="email" placeholder="E-Mail" maxLength={45} />
                    <br />
                    <label htmlFor="registration-family">Weitere Familienmitglieder in der Musikschule:</label>
                    <input type="text" className="registration-text" id="registration-family" name="family" placeholder="Familienmitglieder" />
                    <br />
                    <label htmlFor="birthday">Geburtstdatum:</label>
                    <input type="text" className="registration-text registration-validation-birthday registration-mandatory hasDatepicker registration-orange" id="registration-birthday" name="birthday" placeholder="Geburtsdatum" maxLength={45} />
                    <br />
                    <div id="registration-needs-parent" style={{ display: 'none' }}>
                        <h3>
                            Erziehungsberechtigter
            </h3>
                        <div id="registration-parent-same-address" style={{ cursor: 'pointer' }}>
                            <input type="checkbox" id="registration-parent-transfer-checkbox" name="parent-same-address" /> Selbe
              Anschrift wie Schüler</div>
                        <label htmlFor="registration-parent-name">Vorname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-orange" id="registration-parent-name" name="parent-name" placeholder="Vorname" maxLength={50} />
                        <br />
                        <label htmlFor="registration-parent-surname">Nachname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-orange" id="registration-parent-surname" name="parent-surname" placeholder="Nachname" maxLength={50} />
                        <br />
                        <label htmlFor="registration-parent-street">Straße Hausnummer:</label>
                        <input type="text" className="registration-text registration-validation-has-number registration-orange" id="registration-parent-street" name="parent-street" placeholder="Straße Hausnummer" maxLength={45} />
                        <br />
                        <label htmlFor="registration-parent-plz">PLZ</label>
                        <input type="text" className="registration-text registration-validation-number registration-orange" id="registration-parent-plz" name="parent-plz" placeholder="PLZ" maxLength={5} />
                        <br />
                        <label htmlFor="registration-parent-city">Ort:</label>
                        <input type="text" className="registration-text registration-orange" id="registration-parent-city" name="parent-city" placeholder="Ort" maxLength={50} />
                        <br />
                    </div>
                    <hr />
                    <h3 className="r">
                        Unterrichtsdaten:
          </h3>
                    <i>Bitte alles ausfüllen.</i>
                    <br />
                    <label htmlFor="registration-lecture">Instrument:</label>
                    <select id="registration-lecture" className="registration-orange" name="lecture" size={1}>
                        <option>
                            Gitarre
            </option>
                        <option>
                            Bass
            </option>
                        <option>
                            Gesang
            </option>
                        <option>
                            Klavier
            </option>
                        <option>
                            Schlagzeug
            </option>
                        <option>
                            Blockflöte
            </option>
                        <option>
                            Saxofon
            </option>
                        <option>
                            Querflöte
            </option>
                        <option>
                            Frühes Musizieren
            </option>
                    </select>
                    <br />
                    <label htmlFor="registration-dauer">Dauer:</label>
                    <div id="registration-dauer" className="registration-button-selector registration-orange">
                        <div id="registration-dauer-30" className="registration-button-selector-left">
                            30 min.
            </div>
                        <div id="registration-dauer-45" className="registration-button-selector-disabled registration-button-selector-middle">
                            45 min.
            </div>
                        <div id="registration-dauer-60" className="registration-button-selector-disabled registration-button-selector-middle">
                            60 min.
            </div>
                        <div id="registration-dauer-custom" className="registration-button-selector-disabled registration-button-selector-right">
                            <input type="text" disabled="true" placeholder="sonstige" maxLength={12} />
                        </div>
                    </div>
                    <input className="registration-hidden" id="registration-length" type="text" name="length" />
                    <br />
                    <label htmlFor="registration-turnus">Turnus:</label>
                    <div id="registration-turnus" className="registration-button-selector registration-orange">
                        <div id="registration-turnus-weekly" className="registration-button-selector-left">
                            Wöchentlich
            </div>
                        <div id="registration-turnus-weekly" className="registration-button-selector-disabled registration-button-selector-middle">
                            14 tägig
            </div>
                        <div id="registration-turnus-custom" className="registration-button-selector-disabled registration-button-selector-right">
                            <input type="text" disabled="true" placeholder="sonstige" maxLength={12} />
                        </div>
                    </div>
                    <input className="registration-hidden" id="registration-turnus" type="text" name="turnus" />
                    <br />
                    <label htmlFor="registration-unit">Einheit:</label>
                    <div id="registration-unit" className="registration-button-selector registration-orange">
                        <div id="registration-unit-einzel" className="registration-button-selector-left">
                            Einzel
            </div>
                        <div id="registration-unit-zweier" className="registration-button-selector-disabled registration-button-selector-middle">
                            Zweier
            </div>
                        <div id="registration-unit-gruppe" className="registration-button-selector-disabled registration-button-selector-right">
                            Gruppe (ab 3)
            </div>
                    </div>
                    <input className="registration-hidden" id="registration-unit" type="text" name="unit" maxLength={12} />
                    <br />
                    <hr />
                    <h3 className="r">
                        SEPA-Lastschrift
          </h3>
                    <div id="registration-is-payer" style={{ cursor: 'pointer' }}>
                        <input type="checkbox" id="registration-data-transfer-checkbox" name="is-payer" /> Schüler ist Zahlender
          </div>
                    <label htmlFor="registration-sepa-name">Vorname:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-sepa-name" name="sepa-name" placeholder="Vorname" maxLength={50} />
                    <br />
                    <label htmlFor="registration-sepa-surname">Nachname:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-sepa-surname" name="sepa-surname" placeholder="Nachname" maxLength={50} />
                    <br />
                    <label htmlFor="registration-sepa-street">Straße Hausnummer:</label>
                    <input type="text" className="registration-text registration-validation-has-number registration-mandatory registration-orange" id="registration-sepa-street" name="sepa-street" placeholder="Straße Hausnummer" maxLength={45} />
                    <br />
                    <label htmlFor="registration-sepa-plz">PLZ</label>
                    <input type="text" className="registration-text registration-validation-number registration-mandatory registration-orange" id="registration-sepa-plz" name="sepa-plz" placeholder="PLZ" maxLength={5} />
                    <br />
                    <label htmlFor="registration-sepa-city">Ort:</label>
                    <input type="text" className="registration-text registration-mandatory registration-orange" id="registration-sepa-city" name="sepa-city" placeholder="Ort" maxLength={50} />
                    <br />
                    <label htmlFor="registration-sepa-bank">Kreditinstitut:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-sepa-bank" name="sepa-bank" placeholder="Kreditinstitut" />
                    <br />
                    <label htmlFor="registration-sepa-iban">IBAN:</label>
                    <input type="text" className="registration-text registration-validation-iban registration-mandatory registration-orange" id="registration-sepa-iban" name="sepa-iban" placeholder="IBAN" />
                    <br />
                    <label htmlFor="registration-sepa-bic">BIC:</label>
                    <input type="text" className="registration-text registration-validation-bic registration-mandatory registration-orange" id="registration-sepa-bic" name="sepa-bic" placeholder="BIC/SWIFT" />
                    <hr />
                    <label htmlFor="registration-notes" style={{ display: 'block' }}>Sonstige Anmerkungen:</label>
                    <textarea className="registration-text" id="registration-notes" name="notes" placeholder="Anmerkungen" defaultValue={""} />
                    <br />
                    <hr />
                    <label htmlFor="absenden">&nbsp;</label>
                    <input className="registration-disabled" id="registration-submit" type="submit" name="absenden" defaultValue="Absenden" disabled="disabled" />
                </form>
                **Bei Problemen mit dem Formular kannst du dich an webmaster@musikschule-hopf.de wenden. Schicke am besten einen
                Screenshot oder eine Beschreibung des Problems, damit wir es so schnell wie möglich beheben können.**
                ### Bitte lesen Sie die [Allgemeinen Geschäftsbedingungen](https://musikschule-hopf.de/sekretariat/schulordnung), mit
                der Unterschrift auf der Anmeldung stimmen Sie den AGBs zu.
                Vor dem ersten Einzug einer SEPA-Basis-Lastschrift wird mich die Musikschule Hopf über den Einzug in dieser
                Verfahrensart unterrichten.
                Aus datenschutzrechtlichen Gründen weisen wir darauf hin, dass die obigen Angaben in einem Computer gespeichert, aber
                nur für Zwecke der Musikschule verwendet und nicht an Dritte weitergegeben werden.
      </div>
        )
    }
}
