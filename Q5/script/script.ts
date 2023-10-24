const companyElement = <HTMLDivElement>document.getElementById("company-box");
const companyInput = <HTMLInputElement>document.getElementById("comoany-name");
const bussinessInput = <HTMLInputElement>document.getElementById("bussiness");
const addressInput = <HTMLInputElement>document.getElementById("address");
const postcodeInput = <HTMLInputElement>document.getElementById("postcode");
const contactInput = <HTMLInputElement>document.getElementById("contact-name");
const phoneInput = <HTMLInputElement>document.getElementById("phone");
const emailInput = <HTMLInputElement>document.getElementById("mail");
const formElement = <HTMLFormElement>document.getElementById("form");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let companyValid = checkCompanyName(),
    addressValid = checkAddress(),
    bussinessValid = checkBussiness(),
    contactValid = checkContact(),
    phoneValid = checkPhone(),
    postCodeValid = checkPostCode(),
    emailValid = checkEmail();

  let formValid =
    companyValid &&
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
const isRequired = (value: string) => (value === "" ? false : true);

const isBetween = (length: number, min: number, max: number) =>
  length < min || length > max ? false : true;

const emailValid = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};
const showError = (input: HTMLInputElement, message: string) => {
  const formField = input.parentElement;

  formField?.classList.add("invalid");
  formField?.classList.remove("valid");

  const small = formField?.querySelector("small");
  if (small) {
    small.textContent = message;
  }
};
const showSuccess = (input: HTMLInputElement) => {
  const formFeild = input.parentElement;

  formFeild?.classList.remove("invalid");
  formFeild?.classList.add("valid");
  const small = formFeild?.querySelector("small");
  if (small) {
    small.textContent = "";
  }
};
const checkLength = (length: number, range: number) => {
  return length === range ? true : false;
};
//
//
//
//
//

const checkCompanyName = () => {
  let valid = false;
  const min = 3,
    max = 20;
  const companyName = companyInput.value.trim();
  if (!isRequired(companyName)) {
    showError(companyInput, "plz enter your company name");
  } else if (!isBetween(companyName.length, min, max)) {
    showError(
      companyInput,
      `companyName must be ${min} and ${max} characters.`
    );
  } else {
    showSuccess(companyInput);
    valid = true;
  }
  return valid;
};
const checkBussiness = () => {
  let valid = false;
  const min = 3,
    max = 20;
  const bussiness = bussinessInput.value.trim();
  if (!isRequired(bussiness)) {
    showError(bussinessInput, "plz enter your bussiness");
  } else {
    showSuccess(bussinessInput);
    valid = true;
  }
  return valid;
};
const checkAddress = () => {
  let valid = false;
  const address = addressInput.value.trim();
  if (!isRequired(address)) {
    showError(addressInput, "plz enter your address");
  } else {
    showSuccess(addressInput);
    valid = true;
  }
  return valid;
};
const checkPostCode = () => {
  let valid = false;
  const postCode = postcodeInput.value.trim();
  if (!isRequired(postCode)) {
    showError(postcodeInput, "plz enter postcode true");
  } else if (!checkLength(postCode.length, 10)) {
    showError(postcodeInput, "plz enter 10 characters ");
  } else {
    showSuccess(postcodeInput);
    valid = true;
  }
  return valid;
};
const checkContact = () => {
  let valid = true;
  const contact = contactInput.value.trim();
  if (!isRequired(contact)) {
    showError(contactInput, "plz enter contact name");
  } else {
    showSuccess(contactInput);
    valid = true;
  }
  return valid;
};
const checkPhone = () => {
  let valid = false;
  let phone = phoneInput.value.trim();
  if (!isRequired(phone)) {
    showError(phoneInput, "plz enter your company phone");
  } else {
    showSuccess(phoneInput);
    valid = true;
  }
  return valid;
};
const checkEmail = () => {
  let valid = false;
  const email = emailInput.value.trim();
  if (!isRequired(email)) {
    showError(emailInput, "plz enter your email");
  } else if (!emailValid(email)) {
    showError(emailInput, "your email not valid");
  }
};
function companyCheckValid() {
  companyInput.parentElement?.classList.add("invalid");
}

formElement.addEventListener("input", (event) => {
  // console.log(event);
  const target = event.target as HTMLInputElement;
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
