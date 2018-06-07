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

    // let mailOptions = {
    //     to: "sarabroadcontact@gmail.com",
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     message: message
    // };

        let mailOptions = {
        from: email,
        to: 'sarabroadcontact@gmail.com', // list of receivers
        subject: 'Message from website user', // Subject line
        text: "Sender name: " + " " + name + " " + "email: " + " " + email + " " + "Phone number: " + " " + phone + " " + "Message: " + message
    };

      console.log(mailOptions)
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
});
};


