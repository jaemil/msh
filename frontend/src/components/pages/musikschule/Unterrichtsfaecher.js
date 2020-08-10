import React, { Component } from "react";

import gitarre from "../../../img/Icons/acoustic-guitar.svg";
import bass from "../../../img/Icons/bass-guitar.svg";
import drums from "../../../img/Icons/drums.svg";
import flute from "../../../img/Icons/flute.svg";
import karaoke from "../../../img/Icons/karaoke.svg";
import piano from "../../../img/Icons/piano.svg";

import { useState } from "react";

const Unterrichtsfaecher = (props) => {
  const [intrument, setInstrument] = useState("gitarre");

  function handleClick(name) {
    console.log(name);
    switch (name) {
      case "gitarre": {
        return (
          <div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Klassische Gitarre{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 1. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Anhand einer eigens erstellten Fibel wird das kleine ABC des
                Gitarrenspiels erlernt. Jeder Finger wird einzeln geschult und
                trainiert. Gleichzeitig erlernt man das Notenspiel.
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Rhythmusgitarre
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  {" "}
                  (ab 4. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Hier stehen Rhythmen und Akkorde im Mittelpunkt des Geschehens.
                Gruppenunterricht ist sehr gut möglich, doch je kleiner die
                Teilnehmerzahl, desto effektiver ist der Unterricht. Viele
                bevorzugen den Klang einer Westerngitarre, die durchdringender
                und mehr höhenlastiger klingt als eine Nylongitarre, allerdings
                durch die Stahlsaiten vor allem für Anfänger schwieriger zu
                spielen ist.
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                E-Gitarre{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 4. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Das perfekte Einsteiger-Instrument für Rock'n Roller. Kleine
                Korrektur zur üblichen Meinung, es ist überhaupt nicht notwendig
                irgendwelche Vorkenntnisse zu haben, denn das Spielverhalten auf
                der E-Gitarre ist komplett anders als bei anderen Gitarren.
                Selbst das Notenlesen hat in erster Linie keine besondere
                Bedeutung beim E-Gitarrenspiel. Powerchords, Scales, Riffs und
                Licks sind die eingängigen Schlagwörter eines jeden
                E-Gitarristen.
              </p>
            </div>
          </div>
        );
      }
      case "bass": {
        return (
          <div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                E-Bass{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 4. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Der E-Bass ist ein typisches Bandinstrument, darum wird im
                Unterricht sehr viel Wert auf das Verständnis im Zusammenspiel
                mit anderen Instrumenten, vor allem das Schlagzeug, gelegt. Der
                Basser bildet das Sound- und das Groove-Fundament einer Band,
                dementsprechend wird unterrichtet.
              </p>
            </div>
          </div>
        );
      }
      case "Schlagzeug": {
        return (
          <div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Cajon{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 1. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Die Cajón (spanisch für Schublade oder Holzkiste) wird
                heutzutage als Rhythmusinstrument in allen Musikrichtungen
                angewandt. Man sitzt auf ihr und bespielt sie in erster Linie
                mit den Händen. Hervorragend geeignet für alle Kinder (auch
                Erwachsene), die beim besten Willen nicht in ein Holzstück mit
                Löchern blasen wollen…
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Darbuka{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 5. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Die türkische Trommel (auch Dumbek genannt) hat ihren Ursprung
                in der arabischen Musik und kommt im Orient bei jeder Feier zum
                Einsatz. Außerdem ist sie das typische Begleitinstrument für den
                Bauchtanz. Sie wird meist im Sitzen gespielt und alle 10 Finger
                kommen dabei zum Einsatz.{" "}
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Schlagzeug{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 3. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Der Weg geht von der täglichen Trockenübung bis zum gesamten
                Seteinsatz. Das Metronom wird zum guten Freund eines jeden
                Schlagzeugers. Anhand von Playalongs lernen die Kinder, wie in
                einer Band Musik gemacht wird. Was tun, wenn kein Schlagzeug in
                die Wohnung passt? Percussion-Instrumente, wie Bongo, Cajon oder
                Cembe sind hervorragende Alternativen.
              </p>
            </div>
          </div>
        );
      }
      case "Flöte": {
        return (
          <div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Blockflöte{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 1. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Das Anfängerinstrument überhaupt. Fälschlicherweise wird es zu
                Unrecht als minderwertiges Instrument betrachtet und somit
                denken die meisten Menschen, dass es lediglich dazu dient, die
                ersten Notenkenntnisse zu erwerben, um nach 1-2 Jahren auf ein
                anderes Instrument umzusteigen. Kann man machen, muss man aber
                nicht! Erste Spielerfolge lassen sich sehr rasch erzielen, doch
                schon auf der Stufe der leicht Fortgeschrittenen wird es recht
                komplex.
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Querflöte{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 8 Jahre)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Die Schüler/innen werden je nach Alter und Spielentwicklung
                gefördert. Durch die Querflötenschulen werden Stücke aus
                verschiedenen Epochen gespielt und besprochen. Genauso werden
                kleine Einblicke in die Theorie gegeben. Der Anfangsunterricht
                ist besonders empfehlenswert, da eine autodidaktisch falsch
                eingeübte Ansatztechnik nur schwer zu korrigieren ist.
              </p>
            </div>
          </div>
        );
      }
      case "Gesang": {
        return (
          <div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Gesang{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 5. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Der Unterrichtsinhalt ist sehr breit gefächert und fängt bei der
                Stimm- und Gehörbildung an, um eine solide Gesangstechnik zu
                erlernen. Das Erarbeiten, Interpretieren und Improvisieren von
                Songs steht ebenso im Fokus, wie das Singen mit Mikrofon und die
                Bühnenpräsentation.
              </p>
            </div>
          </div>
        );
      }
      case "Klavier": {
        return (
          <div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Klavier{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 1. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Der Unterricht wendet sich an Anfänger und Fortgeschrittene und
                findet ausschließlich einzeln statt. An gängigen Klavierfibeln
                für Anfänger, Stücken aus eigenen Konzepten, aber auch Stücken
                aus dem Popularbereich werden die Spieltechnik und der
                musikalische Ausdruck am Klavier geschult. Song- oder
                Stückwünsche werden nach Möglichkeit integriert und dem
                aktuellen Stand des Schülers angepasst.
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                E-Piano{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 1. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Das elektronische Piano ist ein Musikinstrument, das
                ursprünglich als preiswerter und transportabler Ersatz für echte
                Pianos gebaut wurde. Digitalpianos sind unter Konzertpianisten
                zwar umstritten, moderne und hochwertigere Instrumente finden
                jedoch bei ihnen mittlerweile immer mehr Anhänger. Aus der
                U-Musik sind E-Pianos nicht mehr wegzudenken. Das Spielverhalten
                und das Erlernen ist wie beim Klavier.
              </p>
            </div>
            <div className="blackContainer">
              <h3 className="b" style={{ backgroundColor: "transparent" }}>
                Keyboard{" "}
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  (ab 1. Klasse)
                </a>
              </h3>
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "20px 20px 20px 20px",
                  textAlign: "justify",
                }}
              >
                Der Unterricht ist auf Klavier-/Keyboardschulen aufgebaut. Ziel
                ist zum einen das beidhändige, gleichmäßige Tastenspiel, zum
                anderen das Spiel mit den typischen Begleitmöglichkeiten eines
                Keyboards. Die gewichteten Tasten fehlen am Keyboard, deshalb
                wird es für einen Keyboarder später schwierig sein, dynamisch
                Klavier spielen zu können.
              </p>
            </div>
          </div>
        );
      }
    }
  }

  return (
    <div>
      <h2 className="b">Unterrichtsfächer</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {intrument == "gitarre" ? (
          <img
            src={gitarre}
            onClick={() => setInstrument("gitarre")}
            className="UnterrichtsfächerImgSelected"
          ></img>
        ) : (
          <img
            src={gitarre}
            onClick={() => setInstrument("gitarre")}
            className="UnterrichtsfächerImg"
          ></img>
        )}

        {intrument == "bass" ? (
          <img
            src={bass}
            onClick={() => setInstrument("bass")}
            className="UnterrichtsfächerImgSelected"
          ></img>
        ) : (
          <img
            src={bass}
            onClick={() => setInstrument("bass")}
            className="UnterrichtsfächerImg"
          ></img>
        )}

        {intrument == "Schlagzeug" ? (
          <img
            src={drums}
            onClick={() => setInstrument("Schlagzeug")}
            className="UnterrichtsfächerImgSelected"
          ></img>
        ) : (
          <img
            src={drums}
            onClick={() => setInstrument("Schlagzeug")}
            className="UnterrichtsfächerImg"
          ></img>
        )}

        {intrument == "Flöte" ? (
          <img
            src={flute}
            onClick={() => setInstrument("Flöte")}
            className="UnterrichtsfächerImgSelected"
          ></img>
        ) : (
          <img
            src={flute}
            onClick={() => setInstrument("Flöte")}
            className="UnterrichtsfächerImg"
          ></img>
        )}

        {intrument == "Gesang" ? (
          <img
            src={karaoke}
            onClick={() => setInstrument("Gesang")}
            className="UnterrichtsfächerImgSelected"
          ></img>
        ) : (
          <img
            src={karaoke}
            onClick={() => setInstrument("Gesang")}
            className="UnterrichtsfächerImg"
          ></img>
        )}

        {intrument == "Klavier" ? (
          <img
            src={piano}
            onClick={() => setInstrument("Klavier")}
            className="UnterrichtsfächerImgSelected"
          ></img>
        ) : (
          <img
            src={piano}
            onClick={() => setInstrument("Klavier")}
            className="UnterrichtsfächerImg"
          ></img>
        )}
      </div>

      <div>{handleClick(intrument)}</div>
    </div>
  );
};
export default Unterrichtsfaecher;
