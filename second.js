let nm = document.getElementById("name");
let ce = document.getElementById("contact");
let el = document.getElementById("email");
let data = 1;
function validate_form() {
    if (nm.value == "") {
        document.getElementById("namerror").innerHTML = "Please Enter your name";
        data = 0;
    }
    else if (nm.value.length < 8) {
        document.getElementById("namerror").innerHTML = "username must be in 8 character";
        data = 0;
    }
    else {
        document.getElementById("namerror").innerHTML = "";
        data = 1;
    }

    if (el.value == "") {
        document.getElementById("emailerror").innerHTML = "please input your phone-number";
        data = 0;
    }
    else if(el.value.length < 10) {
        document.getElementById("emailerror").innerHTML = "invaild phone-number";
        data = 0;
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
        data = 1;
    }
    if (ce.value == "") {
        document.getElementById("contacterror").innerHTML = "please enter your address";
        data = 0;
    }
    else{
        document.getElementById("contacterror").innerHTML = "";
        data = 1;
    }

    if (data) {
        return true;
    }
    else {
        return false;
    }
}


let nm_1 = document.getElementById("name_1");
let ce_1 = document.getElementById("contact_1");
let el_1 = document.getElementById("email_1");
let data_1 = 1;
function validate_form_1() {
    if (nm_1.value == "") {
        document.getElementById("namerror_1").innerHTML = "Please Enter your name";
        data_1 = 0;
    }
    else if (nm_1.value.length < 8) {
        document.getElementById("namerror_1").innerHTML = "username must be in 8 character";
        data_1 = 0;
    }
    else {
        document.getElementById("namerror_1").innerHTML = "";
        data_1 = 1;
    }

    if (el_1.value == "") {
        document.getElementById("emailerror_1").innerHTML = "please input your country name";
        data_1 = 0;
    }
    else {
        document.getElementById("emailerror_1").innerHTML = "";
        data = 1;
    }
    if (ce_1.value == "") {
        document.getElementById("contacterror_1").innerHTML = "please enter your company name";
        data_1 = 0;
    }
    else{
        document.getElementById("contacterror_1").innerHTML = "";
        data_1 = 1;
    }

    if (data_1) {
        return true;
    }
    else {
        return false;
    }
}