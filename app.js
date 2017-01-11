var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

var jsonParser = bodyParser.json()

var port = process.env.PORT || 8000;
var nodemailer = require('nodemailer');

app.post("/cadastro/email", jsonParser, function(req, res) {


    var smtpTransport2 = nodemailer.createTransport("SMTP", {
        //host: "smtp.gmail.com",
        //port: "465",
        //secure: "yes",
        //service: "gmail",
        user: "luganorrrr@gmail.com",
        pass: "lucasr10"
    });

    console.log(req.body);
    console.log(req.body.email);

    var mailOptions = {
        from: 'luganorrrr@gmail.com',
        to: req.body.email,
        subject: 'Teste p4p',
        text: 'Teste p4p',
        html: '<b>Teste p4p</b>'
    };
    smtpTransport2.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Mensagem enviada: ' + info.response);
        });

});


app.listen(port, function(argument) {
    console.log("App is running " + port)
});

console.log("Server runnig....");
