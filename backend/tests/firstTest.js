module.exports = {
  "My first test case"(browser) {
    browser
      .url("https://musikschule-hopf.msvplus.de/online-anmeldung/index.php")

      .assert.visible('input[name="oa_vorname"]')
      .setValue('input[name="oa_vorname"]', process.env.schuelerVorname)

      .assert.visible('input[name="oa_nachname"]')
      .setValue('input[name="oa_nachname"]', process.env.schuelerNachname)

      .assert.visible('input[name="oa_strasse"]')
      .setValue(
        'input[name="oa_strasse"]',
        process.env.schuelerStrasse + " " + process.env.schuelerHausnummer
      )

      .assert.visible('input[name="oa_plz"]')
      .setValue('input[name="oa_plz"]', process.env.schuelerPostleitzahl)

      .assert.visible('input[name="oa_ort"]')
      .setValue('input[name="oa_ort"]', process.env.schuelerOrt)

      //Stadtteil

      //Telefon, Mobil, Email
      .assert.visible('input[name="oa_telefon"]')
      .setValue('input[name="oa_telefon"]', process.env.schuelerVorname)

      .assert.visible('input[name="oa_geburtsdatum"]')
      .setValue(
        'input[name="oa_geburtsdatum"]',
        process.env.schuelerGeburtstagTag +
          "." +
          process.env.schuelerGeburtstagMonat +
          "." +
          process.env.schuelerGeburtstagJahr
      )

      //Aufmerksam geworden durch

      .assert.visible('input[name="oa_bf_7"]')
      .setValue('input[name="oa_bf_7"]', process.env.unterrichtsEinheit)

      .assert.visible('input[name="oa_bf_6"]')
      .setValue('input[name="oa_bf_6"]', process.env.unterrichtsTurnus)
      .assert.visible('input[name="oa_bf_2"]')
      .setValue('input[name="oa_bf_2"]', process.env.unterrichtsDauer)

      .assert.visible('input[name="oa_bf_8"]')
      .setValue(
        'input[name="oa_bf_8"]',
        "Montag: " +
          process.env.montagVon +
          " - " +
          process.env.montagBis +
          " " +
          "Dienstag: " +
          process.env.dienstagVon +
          " - " +
          process.env.dienstagBis +
          " " +
          "Mittwoch: " +
          process.env.mittwochVon +
          " - " +
          process.env.mittwochBis +
          " " +
          "Donnerstag: " +
          process.env.donnerstagVon +
          " - " +
          process.env.donnerstagBis +
          " " +
          "Freitag: " +
          process.env.freitagVon +
          " - " +
          process.env.freitagBis
      )

      .assert.visible('input[name="oa_e_vorname"]')
      .setValue(
        'input[name="oa_e_vorname"]',
        process.env.erziehungsberechtigterVorname
      )
      .assert.visible('input[name="oa_e_nachname"]')
      .setValue(
        'input[name="oa_e_nachname"]',
        process.env.erziehungsberechtigterNachname
      )

      //Zahlperson

      .click(
        process.env.radioAnrede === "sepaMann"
          ? "#oa_z_anrede option:nth-child(2)"
          : "#oa_z_anrede option:nth-child(3)"
      )
      .pause(1000)

      .assert.visible('input[name="oa_z_vorname"]')
      .setValue('input[name="oa_z_vorname"]', process.env.sepaVorname)
      .assert.visible('input[name="oa_z_nachname"]')
      .setValue('input[name="oa_z_nachname"]', process.env.sepaNachname)

      .assert.visible('input[name="oa_z_strasse"]')
      .setValue(
        'input[name="oa_z_strasse"]',
        process.env.sepaStraße + " " + process.env.sepaHausnummer
      )

      .assert.visible('input[name="oa_z_plz"]')
      .setValue('input[name="oa_z_plz"]', process.env.sepaPostleitzahl)

      .assert.visible('input[name="oa_z_ort"]')
      .setValue('input[name="oa_z_ort"]', process.env.sepaOrt)

      .assert.visible('input[name="oa_z_telefon"]')
      .setValue('input[name="oa_z_telefon"]', process.env.sepaTelefon)

      .assert.visible('input[name="oa_z_email"]')
      .setValue('input[name="oa_z_email"]', process.env.sepaEmail)

      .assert.visible('input[name="oa_z_iban"]')
      .setValue('input[name="oa_z_iban"]', process.env.sepaIBAN)

      .assert.visible('input[name="oa_z_bic"]')
      .setValue('input[name="oa_z_bic"]', process.env.sepaBIC)

      .assert.visible('input[name="oa_z_kontoinhaber"]')
      .setValue(
        'input[name="oa_z_kontoinhaber"]',
        process.env.sepaVorname + " " + process.env.sepaNachname
      )

      .assert.visible("input[name=oa_confirm]")
      .click("input[name=oa_confirm]")
      .assert.visible("button[name=oa_button_submit]")
      .click("button[name=oa_button_submit]")
      .end();
  },
};
