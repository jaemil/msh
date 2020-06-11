var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "alfa3032.alfahosting-server.de",
  port: 25,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "web27536246p3",
    pass: "2XmNB9Gf",
  },
});

module.exports = function sendMail(email, name, verifyID) {
  var mailOptions = {
    from: "anmeldung@musikschule-hopf.de",
    to: email,
    subject: "Anmeldung bei der Musikschule Hopf",
    text: `Hallo ${name}, \n 
    Vielen Dank für deine Anmeldung bei der Musikschule Hopf. Bitte klicke auf diesen Link https://musikschule-hopf.de/verify?ID=${verifyID} um deine Anmeldung zu bestätigen und herunterzuladen.\n\n
    Bitte beachte, dass dieser Link nur 24 Stunden aktiv ist, danach musst du dich neu anmelden.\n 
    Nächste Schritte:
    Sobald du deine Anmeldung heruntergeladen hast schickst du sie uns unterschrieben und eingescannt per E-Mail oder per Post. Natürlich kannst du deine Anmeldung auch persönlich bei uns vorbei bringen.\n
    Wenn du weiter Fragen hast, dann schau dich doch einfach mal auf unserer Webseite um.\n

    Viele Grüße und ein herzliches Willkommen bei der Musikschule Hopf,\n
    Johannes\n\n

    Musikschule Hopf - Marktstraße 38 - 73230 Kirchheim/Teck\n
    Tel.: 07021 - 482 797  -  E-Mail: info@musikschule-hopf.de\n
    Inh. Johannes Hopf\n`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
