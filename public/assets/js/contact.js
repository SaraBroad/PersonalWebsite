
//call api
//do on click event to get data
//send back to server-side api
$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault()
        var newUser = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim(),
            message: $("#message").val().trim()
        }
        console.log(newUser);
        $.post("/send", newUser, function (data) {
            console.log(data);
            if (data) {
                alert("Your message has been sent!")
            }
            else {
                console.log("Error message")
                throw err
            }

            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#message").val("");
        });
    });

});

console.log();
function test() {

}
feed = () => {

}