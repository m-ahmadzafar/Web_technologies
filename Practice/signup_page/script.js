$(document).ready(function() {
    // Call formChecker when the form is submitted
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
        formChecker(); // Call formChecker function
    });
    
    // Function to check the input field and apply/remove border
    function formChecker() { 
        let name = $("#signup_name");
        let email = $("#signup_email"); // Select input field by its id
        let password = $("#signup_password");
        
        //NAME CHECK
        if (name.val().trim() === '') {
            name.css("border", "1px solid red"); // Apply red border if empty
        } else {
            name.css("border", ""); // Remove any existing border styles if not empty
        }

        //EMAIL CHECK
        if (email.val().trim() === '') {
            email.css("border", "1px solid red"); // Apply red border if empty
        } else {
            email.css("border", ""); // Remove any existing border styles if not empty
        }

        //PASSWORD CHECK
        let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
         let passwordValue = password.val().trim();
        if (!passwordPattern.test(passwordValue)) {
            password.css("border", "1px solid red"); // Apply red border if password doesn't meet criteria
        } else {
            password.css("border", ""); // Remove any existing border styles if password meets criteria
        }
    
    }
})
