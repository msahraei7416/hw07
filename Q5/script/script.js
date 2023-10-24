var companyElement = document.getElementById("company-box");
var companyInput = document.getElementById("comoany-name");
var bussinessInput = document.getElementById("bussiness");
var addressInput = document.getElementById("address");
var postcodeInput = document.getElementById("postcode");
var contactInput = document.getElementById("contact-name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("mail");
var formElement = document.getElementById("form");
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    var companyValid = checkCompanyName(), addressValid = checkAddress(), bussinessValid = checkBussiness(), contactValid = checkContact(), phoneValid = checkPhone(), postCodeValid = checkPostCode(), emailValid = checkEmail();
    var formValid = companyValid &&
        addressValid &&
        bussinessValid &&
        contactValid &&
        phoneValid &&
        postCodeValid &&
        emailValid;
    if (formValid) {
        alert("sucsses");
    }
});
var isRequired = function (value) { return (value === "" ? false : true); };
var isBetween = function (length, min, max) {
    return length < min || length > max ? false : true;
};
var emailValid = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
};
var showError = function (input, message) {
    var formField = input.parentElement;
    formField === null || formField === void 0 ? void 0 : formField.classList.add("invalid");
    formField === null || formField === void 0 ? void 0 : formField.classList.remove("valid");
    var small = formField === null || formField === void 0 ? void 0 : formField.querySelector("small");
    if (small) {
        small.textContent = message;
    }
};
var showSuccess = function (input) {
    var formFeild = input.parentElement;
    formFeild === null || formFeild === void 0 ? void 0 : formFeild.classList.remove("invalid");
    formFeild === null || formFeild === void 0 ? void 0 : formFeild.classList.add("valid");
    var small = formFeild === null || formFeild === void 0 ? void 0 : formFeild.querySelector("small");
    if (small) {
        small.textContent = "";
    }
};
var checkLength = function (length, range) {
    return length === range ? true : false;
};
//
//
//
//
//
var checkCompanyName = function () {
    var valid = false;
    var min = 3, max = 20;
    var companyName = companyInput.value.trim();
    if (!isRequired(companyName)) {
        showError(companyInput, "plz enter your company name");
    }
    else if (!isBetween(companyName.length, min, max)) {
        showError(companyInput, "companyName must be ".concat(min, " and ").concat(max, " characters."));
    }
    else {
        showSuccess(companyInput);
        valid = true;
    }
    return valid;
};
var checkBussiness = function () {
    var valid = false;
    var min = 3, max = 20;
    var bussiness = bussinessInput.value.trim();
    if (!isRequired(bussiness)) {
        showError(bussinessInput, "plz enter your bussiness");
    }
    else {
        showSuccess(bussinessInput);
        valid = true;
    }
    return valid;
};
var checkAddress = function () {
    var valid = false;
    var address = addressInput.value.trim();
    if (!isRequired(address)) {
        showError(addressInput, "plz enter your address");
    }
    else {
        showSuccess(addressInput);
        valid = true;
    }
    return valid;
};
var checkPostCode = function () {
    var valid = false;
    var postCode = postcodeInput.value.trim();
    if (!isRequired(postCode)) {
        showError(postcodeInput, "plz enter postcode true");
    }
    else if (!checkLength(postCode.length, 10)) {
        showError(postcodeInput, "plz enter 10 characters ");
    }
    else {
        showSuccess(postcodeInput);
        valid = true;
    }
    return valid;
};
var checkContact = function () {
    var valid = true;
    var contact = contactInput.value.trim();
    if (!isRequired(contact)) {
        showError(contactInput, "plz enter contact name");
    }
    else {
        showSuccess(contactInput);
        valid = true;
    }
    return valid;
};
var checkPhone = function () {
    var valid = false;
    var phone = phoneInput.value.trim();
    if (!isRequired(phone)) {
        showError(phoneInput, "plz enter your company phone");
    }
    else {
        showSuccess(phoneInput);
        valid = true;
    }
    return valid;
};
var checkEmail = function () {
    var valid = false;
    var email = emailInput.value.trim();
    if (!isRequired(email)) {
        showError(emailInput, "plz enter your email");
    }
    else if (!emailValid(email)) {
        showError(emailInput, "your email not valid");
    }
};
function companyCheckValid() {
    var _a;
    (_a = companyInput.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("invalid");
}
formElement.addEventListener("input", function (event) {
    // console.log(event);
    var target = event.target;
    switch (target.id) {
        case "comoany-name":
            checkCompanyName();
            break;
        case "bussiness":
            checkBussiness();
            break;
        case "address":
            checkAddress();
            break;
        case "postcode":
            checkPostCode();
            break;
        case "phone":
            checkPhone();
            break;
        case "mail":
            checkEmail();
            break;
    }
});
