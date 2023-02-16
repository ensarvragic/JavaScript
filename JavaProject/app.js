const validateForm = () => {
    let eInput = document.forms["myForm"]["Email"].value;
    let pInput = document.forms["myForm"]["Password"].value;
    let cInput = document.forms["myForm"]["Confirm"].value;

    if (eInput == "") { 
        alert("Email must be filled out");
        return false;
    }

    if (pInput == "") {
        alert("Password must be filled out");
        return false
    }

    if (cInput == "") { 
        alert("Your password must be confirmed");
        return false;
    }

    if (eInput != cInput) {
        alert("Password did not match")
        return false
    } else {
        alert("you have successfully logged in")
        return true
    }
}