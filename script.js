console.log("Saranraj Portfolio Loaded Successfully");


// Simple animation when project button is clicked

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "Opening project: " + button.innerText
        );

    });

});