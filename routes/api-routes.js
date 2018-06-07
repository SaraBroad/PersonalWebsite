var nodemailer = require("nodemailer");

module.exports = function(app) {
app.post("/send", function (req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });

        let mailOptions = {
        from: email,
        to: 'sarabroadcontact@gmail.com', 
        subject: 'Message from website user', 
        text: "Sender name: " + " " + name + " " + "email: " + " " + email + " " + "Phone number: " + " " + phone + " " + "Message: " + message
    };

      console.log(mailOptions)
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
};


