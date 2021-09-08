window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let defaultAmount = document.getElementById("loan-amount");
  defaultAmount.defaultValue = 10000;
  let defaultYears = document.getElementById('loan-years');
  defaultYears.defaultValue = 10;
  let defaultRate = document.getElementById('loan-rate');
  defaultRate.defaultValue = 0.12;

  let payment = calculateMonthlyPayment(defaultAmount.value, defaultYears.value, defaultRate.value);
  updateMonthly(payment)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let inputAmount = document.getElementById('loan-amount');
  let inputYears = document.getElementById('loan-years');
  let inputRate = document.getElementById('loan-rate');

  let payment = calculateMonthlyPayment(inputAmount.value, inputYears.value, inputRate.value)
  updateMonthly(payment)
}


// rounding function from here: https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  const i = rate/12;
  const n = -12 * years;
  const p = amount;
  let payment = (p * i) / (1 - (Math.pow((1+i), n)))
  let roundedPayment = roundToTwo(payment);
  return `$${roundedPayment}`
   
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let payment = document.getElementById('monthly-payment');
  payment.innerText = monthly;
}
