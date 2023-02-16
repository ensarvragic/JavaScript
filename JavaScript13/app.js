const validateForm = () => {
    let Name = document.forms["myForm"]["Ime"];
    let LastName = document.forms["myForm"]["Prezime"];
    let email= document.forms["myForm"]["Email"];
    let ConfirmE = document.forms["myForm"]["ConfirmEmail"];
    let Pass = document.forms["myForm"]["Password"];
    let ConfirmP = document.forms["myForm"]["ConfirmPassword"];

    let name1 = document.getElementById('name')
    let last1 = document.getElementById('lastname')
    let email1 = document.getElementById('email2')
    let email3 = document.getElementById('emailc')
    let password = document.getElementById('Password')
    let password1 = document.getAnimations('PasswordC')



    if (name1.value == "") { 
        alert("Name must be filled out");
        name1.style.border = '2px solid red'
        return false;
    }else{
        name1.style.border = '2px solid green'
    }

    if (LastName.value.length == "") {
        alert("LastName must be filled out");
        last1.style.border = '2px solid red'
        return false
    }else{
        last1.style.border = '2px solid green'
    }

    if (email.value.length == ""){ 
        alert("Email must be filled out");
        email1.style.border = '2px solid red'
        return false;
    }else{
        email1.style.border = '2px solid green'
    }

    if (email.value.length !== ConfirmE){
        alert("Emails did not match")
        email3.style.color = '2px solid red'
        return false
    } else{
        email3.style.color = '2px solid green'
    }
    if (Pass.value.length == ""){
        alert("Password must be filled out")
        password.style.color = '2px solid red'
        return false
    }else{
        password.style.color = '2px solid green'
    }

    if(Pass.value.length !== ConfirmP){
        alert("Password did not match")
        password1.style.color = '2px solid red'
        return false
    }else{
        alert("You have successfully logged in")
        password1.style.border = '2px solid green'
        return true
    }
}