
function validateEmail() {
    var emailID = document.getElementById("email").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID\nXXXXX@XXX.XX")
        document.myForm.email.focus();
        return false;
    }
    return (true);
}

function buy() {

    // Full Name javascript
    var x = document.getElementById("name");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    if (defaultVal == currentVal) {
        document.getElementById("dname").innerHTML = "Full Name: The name cannot Empty";
    }
    else {
        document.getElementById("dname").innerHTML = "Full Name: " + currentVal;
    }


    // Address javascript
    var a = document.getElementById("address");
    var defaultAddr = a.defaultValue;
    var currentAddr = a.value;
    if (defaultAddr == currentAddr) {
        document.getElementById("daddress").innerHTML = "Address: The address cannot Empty";
    }
    else {
        document.getElementById("daddress").innerHTML = "Address: " + currentAddr;
    }


    // Email javascript
    var e = document.getElementById("email")
    var defaultEmail = e.defaultValue;
    var currentEmail = e.value;
    if (defaultEmail == currentEmail) {
        document.getElementById("demail").innerHTML = "Email: The email cannot Empty";
    }
    else {
        document.getElementById("demail").innerHTML = "Email: " + currentEmail;
    }


    // Order Time javascript
    var p = document.getElementById("phone")
    var defaultPhone = p.defaultValue;
    var currentPhone = p.value;
    if (defaultPhone == currentPhone) {
        document.getElementById("dphone").innerHTML = "Phone: The phone cannot Empty";
    }
    else {
        document.getElementById("dphone").innerHTML = "Phone: " + currentPhone;
    }


    // Transport Type javascript (Radio button)
    var getSelectedValue = document.querySelector('input[name="transport"]:checked');
    if (getSelectedValue != null) {
        document.getElementById("transportName").innerHTML = "Transport Type: " + getSelectedValue.value;
    }
    else {
        document.getElementById("transportName").innerHTML = "Transport Type: You have not selected any Transport Type...";
    }


    // Display the order quantity of each product when the customer places an order
    var r1Amount = document.getElementById("pr1");
    var currentr1Amount = r1Amount.value;
    document.getElementById("ar1").innerHTML = "ROG PHONE 1: " + currentr1Amount;

    var r2Amount = document.getElementById("pr2");
    var currentr2Amount = r2Amount.value;
    document.getElementById("ar2").innerHTML = "ROG PHONE 2: " + currentr2Amount;

    var r3Amount = document.getElementById("pr3");
    var currentr3Amount = r3Amount.value;
    document.getElementById("ar3").innerHTML = "ROG PHONE 3: " + currentr3Amount;

    var r4Amount = document.getElementById("pr4");
    var currentr4Amount = r4Amount.value;
    document.getElementById("ar4").innerHTML = "ROG PHONE 4: " + currentr4Amount;

    var r5Amount = document.getElementById("pr5");
    var currentr5Amount = r5Amount.value;
    document.getElementById("ar5").innerHTML = "ROG PHONE 5: " + currentr5Amount;

    // Calculate Total Payment (Number Field)
    var priceR1 = 1999;
    var priceR2 = 2599;
    var priceR3 = 2999;
    var priceR4 = 3599;
    var priceR5 = 3999;


    var totalPayment = (currentr1Amount * priceR1) + (currentr2Amount * priceR2) + (currentr3Amount * priceR3) + (currentr4Amount * priceR4) + (currentr5Amount * priceR5);
    document.getElementById("finalPayment").innerHTML = "Total Payment: RM " + totalPayment;
    document.getElementById("AutoCountPrice").value = "RM " + totalPayment;
}

function total() {
    var r1Amount = document.getElementById("pr1");
    var currentr1Amount = r1Amount.value;

    var r2Amount = document.getElementById("pr2");
    var currentr2Amount = r2Amount.value;

    var r3Amount = document.getElementById("pr3");
    var currentr3Amount = r3Amount.value;

    var r4Amount = document.getElementById("pr4");
    var currentr4Amount = r4Amount.value;

    var r5Amount = document.getElementById("pr5");
    var currentr5Amount = r5Amount.value;


    var priceR1 = 1999;
    var priceR2 = 2599;
    var priceR3 = 2999;
    var priceR4 = 3599;
    var priceR5 = 3999;


    var totalPayment = (currentr1Amount * priceR1) + (currentr2Amount * priceR2) + (currentr3Amount * priceR3) + (currentr4Amount * priceR4) + (currentr5Amount * priceR5);
    document.getElementById("AutoCountPrice").value = "RM " + totalPayment;
}