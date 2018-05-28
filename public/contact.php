<?php
if($_POST["message"]) {
    mail("saraebroad@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Contact Me</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous">
</head>

<body>
    <header id="header-container">
        <div class="container">
            <div id="header-name">Sara Broad</div>
            <nav>
                <a href="index.html">About</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

    <div id="contact-container">
        <div class="row">
            <div class="col-sm-5">
                <h2>Contact Form</h2>
                <form method="post" action="contact.php"">
                    <div class="form-group row">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Name" required="required">
                    </div>
                    <div class="form-group row">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="example@gmail.com" required="required">
                    </div>
                    <div class="form-group row">
                            <label for="phone">Phone Number</label>
                            <input type="email" id="phone" name="phone" class="form-control" placeholder="(215) 555-5555" required="required">
                        </div>
                    <div class="form-group row">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" class="form-control" rows="5" placeholder="Send me a message!" required="required"></textarea>
                    </div>
                    <input type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>


    

</body>

</html>
