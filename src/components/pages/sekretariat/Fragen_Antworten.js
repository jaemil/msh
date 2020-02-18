import React, { Component } from 'react'
import Collapsible from 'react-collapsible';



export default class Fragen_Antworten extends Component {
    render() {
        return (
            <div className={"textCenter"}>
                <h2 className="r">Frage-Antwort</h2>
<br/>
                <p>Vielleicht können euch hier schon eure Anliegen beantwortet werden.</p>

                <h3>Schnupperstunden</h3>

                <Collapsible trigger={<div className="img_text_hover" style ={{padding: "10px"}}>Wie funktionieren die zwei Schnuppermonate?</div>} open = "true">
                    <p>Das Angebot der zwei Schnuppermonate hat jeder Schüler, der hier in unsere Musikschule kommt (ausgenommen Teilnehmer von Workshops, Kursen, 10er Karten, Frühes Musizieren). Hierzu brauchen wir als allererstes eine vollständig ausgefüllte, unterschriebene Anmeldung. Danach gibt es eine Eingangsbestätigung von Seiten der Musikschule und dann wird dem Schüler ein Lehrer zugeordnet.</p>
                    <p>Die zwei gebührenpflichtige Schnuppermonate dienen dann dazu, sich mit dem Instrument, dem Lehrer und den musikalischen Aufgaben vertraut zu machen. Auch der Lehrer braucht manchmal diese Zeit, um ein individuelles Lehrkonzept für den Schüler vorzubereiten.</p>
                    <p>Gefällt es dem Schüler nicht, kann außerordentlich auf Ende der zwei Schnuppermonate gekündigt werden. 										                     Läuft alles nach Wunsch ab, wird der Vertrag automatisch verlängert <br /> und kann nur auf Ende März und/oder Ende September gekündigt werden.</p>
                </Collapsible>
        <Collapsible trigger={<div className="img_text_hover" style={{ padding: "10px" }}>Warum kann man nicht eine einzelne Schnupperstunde nehmen?</div>}>
                    <p>Weil uns unsere Erfahrung gelehrt hat, dass man innerhalb einer kurzen Zeit niemanden gerecht werden kann. Im Gitarrenunterricht z.B. lernt man in der ersten Stunde nur die richtige Sitz- / und Handhaltung. Auch zwischenmenschlich braucht es manchmal etwas Zeit... </p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover" style={{ padding: "10px" }}>Und wenn man trotzdem nur eine Schnupperstunde nehmen möchte?</div>}>
                    <p>Dann könnt ihr jederzeit zum hospitieren. Dies bedeutet, dass man in Absprache mit dem Büro in einem laufenden Unterricht stiller Beisitzer ist. Mehr als ein Small-Talk wird in diesem Fall logischerweise nicht drin sein.</p> 
                    <p>Will man nicht auf eine reine Schnupperlehrstunde verzichten,<br />berechnen wir für eine 30 minütige Unterrichtszeit 20€.</p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover" style={{ padding: "10px" }}>Gibt es Leihinstrumente?</div>}>
                    <p>Wir stellen Instrumente gegen eine monatliche Leihgebühr zur Verfügung. Diese sind vor allem für die ersten zwei Schnuppermonate gedacht. Wer den Unterricht weiterhin besucht, wird vom Lehrer beraten, welches Instrument er sich kaufen soll.</p>
                    <p>Preisliste:</p>
                    <p>Klassische Gitarre (in allen Größen): 8 €</p>
                    <p>E-Gitarre/Bass: 15 €</p>
                    <p>E-Gitarren-/Bassverstärker: 15 €</p>
                    <p>Keyboard: 15 €</p>
                    <p>E-Piano: 25 € </p>
                </Collapsible>

                <h3>Unterricht</h3>

                <Collapsible trigger={<div className="img_text_hover">Wieviel kostet der Unterricht?</div>}>
                    
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Gebühren der Musikschule Hopf</div>}>
                    
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Wird der Unterricht nachgeholt, wenn der Schüler seinen Termin nicht einhält?</div>}>
                    <p>Es gelten die Bestimmungen des Musikschulvertrages. Wird durch den Schüler der Unterricht abgesagt (wegen Krankheit, Schullandheim, Geburtstage), besteht kein Anspruch auf Ersatz. Individuelle Absprachen liegen im Ermessen des Lehrers. Wird unentschuldigt vom Unterricht ferngeblieben, gibt es definitiv keinen Ersatz, jedoch ein Anruf an die Eltern...</p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Wird der Unterricht nachgeholt, wenn der Lehrer nicht den Termin einhält?</div>}>
                    <p>Ist ein Lehrer krank und liegt der Musikschule ein ärztliches Attest vor, so muss gemäß unserer Schulordnung der Unterricht nicht nachgeholt werden. Sonstige nicht eingehaltenen Termine werden vom Lehrer immer nachgeholt. Im Härtefall gibt es eine Erstattung der Unterrichtsgebühr. Sind längere Fehlzeiten der Lehrkraft abzusehen, werden wir uns um eine Vertretung kümmern. </p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Wie funktioniert der zeitliche Rhythmus bei 14-tägigen Unterricht, wenn Ferien dazwischen liegen?</div>}>
                    <p>Wenn keine Absprachen vorliegen, wird immer der Schüler nach den Ferien erwartet, welcher nicht direkt vor den Ferien Unterricht hatte. So ist gegeben, dass jeder Schüler die gleiche Anzahl Unterrichtstage pro Semester bekommt. Kurzfristige Absprachen zwischen den Teilnehmenden und dem Lehrer sind immer möglich, erforderlich und auch erwünscht.</p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Kann ein Lehrer zu uns nach Hause kommen?</div>}>
                    <p>Eher nein, da dies zeitaufwendiger und damit die Unterrichtsgebühr teurer wäre.<br />Aus verschiedenen Gründen kam es jedoch schon vor, dass dies Lehrer gemacht haben, deshalb darf ruhig gefragt werden. </p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Über welche Qualifikationen verfügen die Lehrkräfte?</div>}>
                    <p>Unsere Mitarbeiter haben in der Regel ein Hochschulstudium im Bereich Musik absolviert, verfügen über Erfahrungen im Unterrichten und/oder sind professionelle Musiker</p>
                </Collapsible>

                <h3>Vertraglichkeiten</h3>

                <Collapsible trigger={<div className="img_text_hover">Wie und wann kann ich kündigen?</div>}>
                    <p>Die Kündigung muss schriftlich spätestens 6 Wochen vor Ende eines Schulsemesters (Ende März / Ende September) im Sekretariat der Musikschule Hopf eingegangen sein. <br/>Sobald die Kündigung bearbeitet ist, wird eine Bestätigung zugesendet.</p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Wie lange läuft der Vertrag?</div>}>
                    <p>Der Vertrag läuft unbefristet, so lange wie man möchte. <br />Soll der Unterricht enden, gibt es 2 Mal im Jahr die Möglichkeit zu kündigen.</p>                                 Auf Ende März und auf Ende September. Die Kündigung muss spätestens 6 Wochen vorher                   in der Musikschule vorliegen und wird durch eine Eingangsbestätigung gültig!!!
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Kann der Schüler innerhalb des Vertrages die Unterrichtslänge / das Unterrichtsfach wechseln?</div>}>
                    <p>Zeitliche Änderungen (z.B. 45 auf 30 Minuten; wöchentlich auf 14-tägig etc.) <br />können nur auf das neue Semester (April / Oktober) geändert werden und bedürfen neben dem Gespräch mit der Lehrkraft eine schriftliche Ummeldung.</p>
                    <p>Erst nach Bestätigung des Sekretariats wird der neue Vertrag rechtskräftig.</p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Ist in den Ferien Musikschulunterricht?</div>}>
                    <p>Für die Musikschule gelten die (beweglichen) Ferien- und Feiertage ebenso, wie für die allgemeinbildenden Schulen in der Region.</p>
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">Warum muss ich die Ferien durch bezahlen?</div>}>
                    <p>Aus bürokratischen und haushaltstechnischen Gründen ist es einfacher, einen monatlichen Betrag abzubuchen. <br/>Würde man es anders machen, würde es uns immens viel Zeit kosten und die Gebühren wären deutlich höher.</p> 
                </Collapsible>
                <Collapsible trigger={<div className="img_text_hover">An wen werden 10er Karten ausgegeben?</div>}>
                    <p>Das Angebot der 10er Karten richtet sich nur an erwachsene Schüler, die<br/>
                    a) unregelmäßig zum Unterricht kommen können,<br />
                    b) über einen längeren Zeitraum selbstständig den Unterrichtsstoff erarbeiten können. </p>
                </Collapsible>

            </div>
        )
    }
}
