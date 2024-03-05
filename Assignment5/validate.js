document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('zip').addEventListener('input', validateZip);
    document.getElementById('credit-card').addEventListener('input', validateCreditCard);
    document.getElementById('cvv').addEventListener('input', validateCVV);
  });
  
  function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setError(emailInput, 'Email must be in proper format');
    } else {
      setSuccess(emailInput);
    }
  }
  
  function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    const phoneRegex = /^\d{10}$/;
  
    if (!phoneRegex.test(phone)) {
      setError(phoneInput, 'Phone number must be 10 digits');
    } else {
      setSuccess(phoneInput);
    }
  }
  
  function validateZip() {
    const zipInput = document.getElementById('zip');
    const zip = zipInput.value.trim();
    const zipRegex = /^\d{5}$/;
  
    if (!zipRegex.test(zip)) {
      setError(zipInput, 'Zip code must be 5 digits');
    } else {
      setSuccess(zipInput);
    }
  }
  
  function validateCreditCard() {
    const creditCardInput = document.getElementById('credit-card');
    const creditCard = creditCardInput.value.trim();
    const creditCardRegex = /^\d{10}$/;
  
    if (!creditCardRegex.test(creditCard)) {
      setError(creditCardInput, 'Credit card number must be 10 digits');
    } else {
      setSuccess(creditCardInput);
    }
  }
  
  function validateCVV() {
    const cvvInput = document.getElementById('cvv');
    const cvv = cvvInput.value.trim();
    const cvvRegex = /^\d{3}$/;
  
    if (!cvvRegex.test(cvv)) {
      setError(cvvInput, 'CVV must be 3 digits');
    } else {
      setSuccess(cvvInput);
    }
  }
  
  function setError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    const errorText = formGroup.querySelector('small');
    errorText.innerText = message;
  }
  
  function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
    const errorText = formGroup.querySelector('small');
    errorText.innerText = '';
  }
  