$(document).ready(function () {

    console.log('CONNECTED');
    console.log('*********');

    $("#sub-new").on("click", function (event) {

        event.preventDefault();

        let newBurger = {
            burger_name: $("#new-burger").val().trim()
        }


        $.ajax("/add/burger", {
            type: "POST",
            data: newBurger,
            success: function () {
                console.log("CREATED NEW BURGER");
                // location.reload();
            }
        })

    })

})