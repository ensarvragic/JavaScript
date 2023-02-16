const validationForm = () => {
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    let check = document.forms["myForm"]["confirm"].value;

    if(email == ""){
        alert("email mora biti ispunjen");
        return false;
    } 

    if(password == ""){
        alert("password mora biti ispunjen");
        return false;
    }

    if(check == ""){
        alert("Moras potvrditi sifru")
        return false;
    }

    else{
        alert("uspesno ste se ulogovali")
        return true
    }
};