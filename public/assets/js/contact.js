
//call api
//do on click event to get data
//send back to server-side api
$(document).ready(function () {

    $("#submit").on("click", function () {

        var newUser = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim(),
            message: $("#message").val().trim()
        }
        console.log(newUser);
        $.post("/send", newUser, function (data) {
            if (data) {
                alert("Your message has been sent!")
            }
            else {
                throw err
            }
        
            $("#name").val("");
        
        });
    });

});
