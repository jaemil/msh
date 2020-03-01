import React, { Component, useState } from 'react'

function Anmeldung(){

    function componentDidMount() {
        const script = document.createElement("script");

        script.src = "../../../script/script.js";
        script.async = true;

        document.body.appendChild(script);


        const iban_min = document.createElement("script");

        iban_min.src = "../../../script/iban-min.js";
        iban_min.async = true;

        document.body.appendChild(iban_min);
    }

    var [openVollmündig, setOpenVollmündig] = useState(false);

    var [showInfo, setShowInfo] = useState(false);

    function handleChange()
    {
        setOpenVollmündig(prevOpen => !prevOpen)
    }

    function handleChange2()
    {
        setShowInfo(prevOpen => !prevOpen)
    }



        return (
            <div>

            <h2 className = "r">Anmeldung</h2>
            <div id="registration-is-payer" style={{ cursor: 'pointer' }}>
                    <input style={{color: "white", border: "0", backgroundColor: "black", margin: "10px 10px 10px 20px"}} onClick={handleChange2} type="checkbox" id="registration-data-transfer-checkbox" name="is-payer" /> <div style={{color: "white", display: "inline", textAlign: "left"}}>Infos zur Durchführung der Online-Anmeldung</div>
                    </div>

            {showInfo ? 
                (<div>
                <p>Hier kannst du dich für den Unterricht bei der Musikschule Hopf anmelden.
                Der Prozess ist ganz einfach, er besteht aus 3 Schritten.</p>
                <p style={{fontWeight: "bold", paddingTop: "20px"}}>1. Online Formular ausfüllen:</p>
                <p>Bitte fülle alle markierten Felder aus. Grüne Farbe heißt, dass die Eingabe stimmt!
                Sobald sich der 'Absenden' - Button aktiviert kannst du das Formular abschicken.
                Daraufhin bekommst du einen Link zu einer PDF-Datei ([was ist eine
                PDF-Datei?](https://acrobat.adobe.com/de/de/products/about-adobe-pdf.html)) an deine E-Mail Adresse gesendet.</p>
                <p style={{fontWeight: "bold", paddingTop: "20px"}}>2. PDF-Datei ausdrucken und unterschreiben:</p>
                <p>Während deine Anmeldung direkt hier bei uns ankommt solltest du die Anmeldung ausdrucken und unterschreiben.
                Die Anmeldung kannst du uns entweder per E-Mail oder per Post schicken. Natürlich kannst du die Anmeldung auch
                persönlich in der Musikschule unterschreiben.</p>
                <p style={{fontWeight: "bold", paddingTop: "20px"}}>3. Lehrer, Tag und Uhrzeit:</p>
                <p>Das wichtigste fehlt natürlich noch. An welchem Tag, zu welcher Zeit und bei welchem Lehrer wird dein Unterricht sein?
                Dazu werden wir dich per Telefon oder E-Mail kontaktieren. Natürlich bist du auch dabei gerne eingeladen persönlich bei
                uns vorbei zu kommen.</p>
                <p style={{fontWeight: "bold"}}>Wichtig: Unterricht beginnt erst nach Eingang der unterschriebenen Anmeldung und der Bestätigung durch das Büro.</p>
                <p style={{fontWeight: "bold"}}>Wenn du Fragen hast, dann melde dich doch einfach bei uns, oder komm vorbei!</p>

        <hr />
        <p style={{fontWeight: "bold"}}>Bitte alle <span style={{ color: 'orange' }}>orange markierten Felder</span> ausfüllen! Auf den "Absenden"-Button kann erst
                geklickt werden, wenn alle erfolderlichen Felder nach Eingabe der erforderlichen Daten grün sind!</p></div>) : 
                (<div style={{padding: "30px"}}></div>)}
                
        <form className="registration" acceptCharset="UTF-8">
            
                    
          <div className ="kp">
          <h3 className="r">
                        Name des Schülers:
          </h3>
                    <label htmlFor="registration-name">Vorname:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-name" name="name" placeholder="Vorname" maxLength={25} />
                    <br />
                    <label htmlFor="registration-surname">Nachname:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-surname" name="surname" placeholder="Nachname" maxLength={25} />
                    <br />
                    <label htmlFor="birthday">Geburtstdatum:</label>
                    <input type="text" className="registration-text registration-validation-birthday registration-mandatory hasDatepicker registration-orange" id="registration-birthday" name="birthday" placeholder="Geburtsdatum" maxLength={45} />
                    <br /></div>

                    <div className ="kp">
                    <div id="registration-is-payer" style={{ cursor: 'pointer', backgroundColor: "black", paddingBottom: "10px" }}>
                    <input onClick={handleChange} type="checkbox" id="registration-data-transfer-checkbox" name="is-payer" /> <div style={{color: "white", display: "inline", textAlign: "left", backgroundColor: "black"}}>Schüler noch nicht vollmündig und wohnhaft bei Erziehungsberechtigten (Vater/Mutter/Großeltern ...)</div>
                    </div>

                    {openVollmündig ? (<div style = {{backgroundColor: "black"}}>
                        <h3 className ="r">Name des Erziehungsberechtigten</h3>
                        <label htmlFor="registration-name">Vorname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-name" name="name" placeholder="Vorname" maxLength={25} />
                        <br />
                        <label htmlFor="registration-surname">Nachname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-surname" name="surname" placeholder="Nachname" maxLength={25} />
                        <br />
                    </div>) : ( <div></div> )}</div>
                    
                    <div className ="kp">
                    <h3 className="r">
                        Wohnort des Schülers:
          </h3>

                    <label htmlFor="street">Straße Hausnummer:</label>
                    <input type="text" className="registration-text registration-validation-has-number registration-mandatory registration-orange" id="registration-street" name="street" placeholder="Straße Hausnummer" maxLength={45} />
                    <br />
                    <label htmlFor="registration-plz">PLZ:</label>
                    <input type="text" className="registration-text registration-validation-number registration-mandatory registration-orange" id="registration-plz" name="plz" placeholder="PLZ" maxLength={5} />
                    <br />
                    <label htmlFor="registration-city">Ort:</label>
                    <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-city" name="city" placeholder="Ort" maxLength={45} />
                    <br /></div>

                    <div className = "kp">
                    <h3 className="r">
                    Kontaktdaten <a style={{fontSize: "20px"}}>(vollmündiger Schüler/Erziehungsberechtigter)</a>:
      </h3>

                    <label htmlFor="registration-phone">Telefon privat:</label>
                    <input type="tel" className="registration-text registration-validation-phone registration-mandatory registration-orange" id="registration-phone" name="phone" placeholder="Telefon" maxLength={30} />
                    <br />
                    <label htmlFor="registration-mobile">Mobil privat:</label>
                    <input type="tel" className="registration-text registration-validation-phone" id="registration-mobile" name="mobile" placeholder="Mobil" maxLength={30} />
                    <br />
                    <label htmlFor="registration-email">E-Mail:</label>
                    <input type="email" className="registration-text registration-validation-email registration-mandatory registration-orange" id="registration-email" name="email" placeholder="E-Mail" maxLength={45} />
                    <br /></div>

                    <div className ="kp">
                    <div id="registration-is-payer" style={{ cursor: 'pointer', backgroundColor: "black", paddingBottom: "10px" }}>
                    <input onClick={handleChange} type="checkbox" id="registration-data-transfer-checkbox" name="is-payer" /> <div style={{color: "white", display: "inline", textAlign: "left", backgroundColor: "black"}}>Weitere aktive Familienmitglieder in der Musikschule:</div>
                    </div>
                    {openVollmündig ? (<div style = {{backgroundColor: "black"}}>
                        <label htmlFor="registration-name">1. Nachname, Vorname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-name" name="name" placeholder="Nachname, Vorname:" maxLength={25} />
                        <br />
                        <label htmlFor="registration-surname">2. Nachname, Vorname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-surname" name="surname" placeholder="Nachname, Vorname:" maxLength={25} />
                        <br />
                        <label htmlFor="registration-surname">3. Nachname, Vorname:</label>
                        <input type="text" className="registration-text registration-validation-string registration-mandatory registration-orange" id="registration-surname" name="surname" placeholder="Nachname, Vorname:" maxLength={25} />
                        <br />
                    </div>) : ( <div></div> )}</div>

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
                    <div className ="kp">

                    <div style ={{paddingTop: "10px", backgroundColor: "black"}}>
                    <h3 className="r">
                        Unterrichtsdaten:
          </h3>
                    <br />
                    <label htmlFor="registration-lecture">Unterrichtsfach:</label>
                    <select style={{backgroundColor: "white", width: "200px"}} id="registration-lecture" placeholder="Bitte auswählen" className="registration-orange" name="lecture" size={1}>
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            Bitte auswählen
            </option>    
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            Gitarre
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
                            E-Gitarre
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            E-Bass
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            Gesang
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            Klavier
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            Schlagzeug
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
                            Cajon
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
                            Darbuka
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            Blockflöte
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            Querflöte
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            Frühes Musizieren
            </option>
                    </select></div>
                    <br />
                    <div style ={{paddingTop: "10px", backgroundColor: "black"}}>
                    <label htmlFor="registration-dauer">Unterrichsdauer:</label><select style={{backgroundColor: "white", width: "200px"}} id="registration-lecture" placeholder="Bitte auswählen" className="registration-orange" name="lecture" size={1}>
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            Bitte auswählen
            </option>    
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            30 Min.
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
                            45 Min.
            </option>
                        <option style = {{backgroundColor: "white",color: "black"}}>
                            60 Min.
            </option>

                    </select></div>
                    <br />
                    <div style ={{paddingTop: "10px", backgroundColor: "black"}}>
                    <label htmlFor="registration-dauer">Unterrichtsturnus:</label><select style={{backgroundColor: "white", width: "200px"}} id="registration-lecture" placeholder="Bitte auswählen" className="registration-orange" name="lecture" size={1}>
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            Bitte auswählen
            </option>    
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            Wöchentlich
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
                            14 tägig
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
                            Zehnerkarte
            </option>
                        

                    </select></div>
                    
                    <div style ={{paddingTop: "10px", paddingBottom: "10px", backgroundColor: "black"}}>
                    <br />  

                    <label htmlFor="registration-dauer">Unterrichtseinheit:</label><select style={{backgroundColor: "white", width: "200px"}} id="registration-lecture" placeholder="Bitte auswählen" className="registration-orange" name="lecture" size={1}>
                    <option style = {{backgroundColor: "white",color: "black"}}>
                            Bitte auswählen
            </option>    
                    <option style = {{backgroundColor: "white",color: "black"}}>
                    Einzel
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
            Zweier
            </option>
            <option style = {{backgroundColor: "white",color: "black"}}>
            Gruppe (ab 3)
            </option>
                        

                    </select></div>

                    </div>
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


export default Anmeldung