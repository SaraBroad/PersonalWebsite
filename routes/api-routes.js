var nodemailer = require("nodemailer");

app.post("/send", function(req, res, next){
var name = req.body.name,
var email = req.body.email,
var phone = req.body.phone,
var message = req.body.message

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    });
})

let mailOptions = {
    to: "sarabroadcontact@gmail.com",
    name: name,
    email: email,
    phone: phone,
    message: message
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

