module.exports = ({
  schuelerVorname,
  schuelerNachname,
  schuelerGeburtstagTag,
  schuelerGeburtstagMonat,
  schuelerGeburtstagJahr,
  schuelerStrasse,
  schuelerHausnummer,
  schuelerPostleitzahl,
  schuelerOrt,
  vollmuendigTelefon,
  vollmuendigMobil,
  vollmuendigEmail,
  schueler1,
  schueler2,
  schueler3,
  unterrichtsFach,
  unterrichtsDauer,
  unterrichtsTurnus,
  unterrichtsEinheit,
  sepaVorname,
  sepaNachname,
  sepaStraße,
  sepaHausnummer,
  sepaPostleitzahl,
  sepaOrt,
  sepaKreditinstitut,
  sepaIBAN,
  sepaBIC,
}) => {
  const today = new Date();
  let x;
  if (schueler1) {
  }
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result Template</title>
      <style>
        .invoice-box {
          max-width: 800px;
          margin: auto;
          padding: 30px;
          
          line-height: 24px;
          font-family: "Helvetica Neue", "Helvetica";
        }
        .date {
          text-align: right;
          padding-right: 40px;
        }
        .ueberschrift {
          font-size: 20px;
          font-weight: bold;
          padding: 30px 40px 30px 40px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(1, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          padding-bottom: 20px;
        }
  
        .unterrichtsdaten {
          grid-area: 1 / 1 / 2 / 3;
          font-size: 15px;
          font-weight: bold;
        }
  
        .schülerdaten {
          grid-area: 1 / 1 / 2 / 3;
          font-size: 15px;
          font-weight: bold;
        }
        .text15 {
          font-size: 13px;
        }
  
        .table {
          margin: 0;
          padding: 0;
          border-spacing: 0px;
          font-size: 13px;
          padding: 0px 40px 0px 40px;
          line-height: 18px;
        }
  
        .tableSepa {
          margin: 0;
          padding: 0;
          border-spacing: 0px;
          font-size: 13px;
          padding: 0px 40px 0px 40px;
          font-weight: 600;
          line-height: 18px;
        }
  
        .tHeader {
          font-weight: bolder;
        }
  
        .TableHeader {
          font-weight: bold;
          font-size: 15px;
          padding-left: 40px;
        }
  
        .tableHeader {
          font-weight: bold;
          font-size: 15px;
        }
  
        .text {
          font-size: 13px;
          padding-left: 40px;
        }
  
        .textSmall {
          font-size: 10px;
          padding: 10px 40px 10px 40px;
          line-height: 16px;
        }
  
        .paddingTop {
          padding-top: 40px;
        }
  
        .paddingTopS {
          padding-top: 20px;
        }
        .alignRight {
          text-align: right;
          padding-right: 40px;
        }
        .alignCenter {
          text-align: center;
        }
  
        .UnterrichtsdatenGrid {
          justify-self: flex-end;
          padding-right: 40px;
        }
  
        .paddingBottom {
          padding-bottom: 20px;
        }
  
        hr {
          margin: 30px 15px 30px 15px;
          border: 1px solid black;
          border-radius: 20px;
        }
  
        .cursive {
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="invoice-box">
        <div class="date">05.06.2020</div>
        <div class="ueberschrift">Anmeldung Musikschule Hopf</div>
  
        <table class="table paddingBottom" width="100%">
          <tr>
            <td class="tableHeader">Schülerdaten:</td>
            <td></td>
            <td class="tableHeader">Unterrichtsdaten:</td>
            <td></td>
          </tr>
          <tr>
            <td class="tHeader">Name:</td>
            <td>${schuelerVorname} ${schuelerNachname}</td>
            <td class="tHeader">Instrument:</td>
            <td>${unterrichtsFach}</td>
          </tr>
          <tr>
            <td class="tHeader">Adresse:</td>
            <td>${schuelerPostleitzahl} ${schuelerOrt}<br/>${schuelerStrasse} ${schuelerHausnummer}</td>
            <td class="tHeader">Einheit:</td>
            <td>${unterrichtsEinheit}</td>
          </tr>
          <tr>
            <td class="tHeader">Telefon:</td>
            <td>${vollmuendigTelefon}</td>
            <td class="tHeader">Turnus:</td>
            <td>${unterrichtsTurnus}</td>
          </tr>
          <tr>
            <td class="tHeader">Mobil:</td>
            <td>${vollmuendigMobil}</td>
            <td class="tHeader">Dauer:</td>
            <td>${unterrichtsDauer}</td>
          </tr>
          <tr>
            <td class="tHeader">E-Mail:</td>
            <td>${vollmuendigEmail}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="tHeader">Geburtsdatum:</td>
            <td>${schuelerGeburtstagTag}.${schuelerGeburtstagMonat}.${schuelerGeburtstagJahr}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="tHeader">Fam. Mitglieder::</td>
            <td>${schueler1}, ${schueler2}, ${schueler3}</td>
            <td></td>
            <td></td>
          </tr>
        </table>
  
        <div class="TableHeader">Wichtige Bestätigung durch den Kunden:</div>
        <div class="text">
          Die allgemeinen Geschäftsbedigungen habe ich gelesen. Mit ihrer Geltung
          für diesen Vertrag bin ich einverstanden
        </div>
        <div class="alignRight paddingTop">
          _________________________________________
        </div>
        <div class="alignRight textSmall">
          Ort, Datum, Unterschrift <br />
          (bei Minderjährigen Unterschrift des Erziehungsberechtigten)
        </div>
        <hr />
        <div class="TableHeader">Sepa-Lastschrift</div>
        <div class="text">
          Erteilung einer Einzugsermächtigung und eines SEPA-Lastschriftmandats.
          Die Mandatsnummer (Kassenzeichen) erhalten Sie separat nach Bestätigung
          der Anmeldung.
        </div>
        <div class="textSmall">
          Musikschule Hopf, Marktstraße 38, 73230 Kirchheim unter Teck,
          Gläubiger-Identifikationsnummer: DE07ZZZ00000304229
        </div>
        <table class="tableSepa" width="100%">
          <tr>
            <td>Kontoinhaber:</td>
            <td>${sepaVorname} ${sepaNachname}</td>
            <td>Kreditinstitut:</td>
            <td>${sepaKreditinstitut}</td>
          </tr>
          <tr>
            <td>Straße, Nr:</td>
            <td>${sepaStraße}, ${sepaHausnummer}</td>
            <td>IBAN:</td>
            <td>${sepaIBAN}</td>
          </tr>
          <tr>
            <td>PLZ, Ort:</td>
            <td>${sepaPostleitzahl}, ${sepaOrt}</td>
            <td>BIC:</td>
            <td>${sepaBIC}</td>
          </tr>
        </table>
        <div class="textSmall paddingTopS">
          Ich ermächtige die Musikschule Hopf, Zahlungen von meinem Konto mittels
          Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die
          von der Musikschule Hopf auf mein Konto gezogenen Lastschriften
          einzulösen. <br />
          Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem
          Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es
          gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen.
          <br />
          <div class="cursive">
            Bei der Anmeldung wird eine Gebühr von einmalig 5 Euro fällig
          </div>
        </div>
        <div class="text">X Wiederkehrende Zahlung</div>
        <div class="alignRight">
          _________________________________________
        </div>
        <div class="alignRight textSmall">Ort, Datum, Unterschrift <br /></div>
        <div class="textSmall">
          Vor dem ersten Einzug einer SEPA-Basis-Lastschrift wird mich die
          Musikschule Hopf über den Einzug in dieser Verfahrensart unterrichten.
          Aus datenschutzrechtlichen Gründen weisen wir darauf hin, dass die
          obigen Angaben in einem Computer gespeichert, aber nur für Zwecke der
          Musikschule verwendet und nicht an Dritte weitergegeben werden.
        </div>
        <div class="alignCenter textSmall cursive">
          Musikschule Hopf, Inh. Johannes Hopf, Marktstraße 38, 73230 Kirchheim
          unter Teck, info@musikschule-hopf.de, Tel: 07021 - 482 797
        </div>
      </div>
    </body>
  </html>
  
   `;
};
