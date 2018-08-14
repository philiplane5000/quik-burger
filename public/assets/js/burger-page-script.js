$(document).ready(function () {

    console.log('CONNECTED');
    console.log('*********');

    $("#sub-new").on("click", function (event) {

        event.preventDefault();
        
        let burgerData = {
            burger_name: $("#new-burger").val().trim()
        }
        
        $.ajax({
            url: "/add/burger",
            type: "POST",
            data: burgerData,
            success: function () {
                console.log("CREATED NEW BURGER");
                // location.reload();
            }
        })
        
    })
    
    $(".devour-btn").on("click", function(event) {

        event.preventDefault();
        
        let burgerName = $(this).data("attribute");
        let burgerID = $(this).data("id");
        let devoured = $(this).data("state");

        let devourBurger = {
            burger_name: burgerName,
            id: burgerID,
            devoured: devoured
        }

        $.ajax({
            url: "/update/burger",
            type: "PUT",
            data: devourBurger,
            success: function() {
                console.log("BURGER DEVOURED");
                // location.reload();
            }

        })
        
    })

})