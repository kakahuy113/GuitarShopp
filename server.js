const express = require('express')
const path = require('path');
const port =  process.env.PORT || 8080;
const bodyParer = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    provider : 'gmail',
    port : 465,
    secure : true,
    auth : {
        user : 'kakahuy113@gmail.com',
        pass : 'dwczzkgbrpjcpfzu'
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.use(bodyParer.json());

app.use(function(req , res ,next) {
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.static(__dirname + '/dist/angular-bootstrap-md-app'));

app.post('/send' , function(req, res) {
    let senderCountry = req.body.checkoutFormCountry;
    let senderFirst = req.body.checkoutFormFirst;
    let senderLast = req.body.checkoutFormLast;
    let senderAddress = req.body.checkoutFormAddress;
    let senderCity = req.body.checkoutFormCity;
    let senderState = req.body.checkoutFormState;
    let senderZip = req.body.checkoutFormZip;
    let senderPhone = req.body.checkoutFormPhone;
    let senderEmail = req.body.checkoutFormEmail;
    
    let mailOptions = {
        to : senderEmail,
        subject : 'Guitar Shop',
        html : `<h1>Here Your shipping Order!!!</h1> <br>
            ${senderLast} <br>
            ${senderFirst} <br>
            ${senderCountry} <br>
            ${senderCity} <br>
            ${senderAddress} <br>
            ${senderState} <br>
            ${senderZip} <br>
            ${senderPhone} <br>
        `,
        
    }
    transporter.sendMail(mailOptions , function(error , response) {
        if(error) {
            console.log(error);
            res.end('error');
        } else {
            console.log('Message sent: ' , response);
            res.end('sent');
        }
    });
});

app.get("/*" , (res,req) => {
    res.sendFile(path.join(__dirname + '/dist/angular-bootstrap-md-app/index.hh' ))
});

app.listen(port , () => {
    console.log(`app is listen on ${port}`);
    
})