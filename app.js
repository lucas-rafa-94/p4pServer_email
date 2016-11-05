//var https = require("https");
//var http = require("http")
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

var jsonParser = bodyParser.json()

var port = process.env.PORT || 8000;
var nodemailer = require('nodemailer');

app.post("/cadastro/email", jsonParser, function(req, res) {

    var nano = require('nano')('https://9c6cebc2-c237-4588-9c99-6bd8db2231af-bluemix.cloudant.com/')

    var transporter = nodemailer.createTransport('');

    var mailOptions = {
        from: '" " <feedback@people4people.com>',
        to: req.email,
        subject: 'Teste p4p',
        text: 'Teste p4p',
        html: '<b>Teste p4p</b>'
    };

    var p4pDb = nano.db.use('p4p');

    p4pDb.insert(req.body, function(err, result) {
        if (err) {
            throw err
        };
        resMed.send(result);

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Mensagem enviada: ' + info.response);
        });


    });

});


app.listen(port, function(argument) {
    console.log("App is running " + port)
});

console.log("Server runnig....");
