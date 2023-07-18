const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

const MAX_INPUT_LENGTH = 10; // Maximum number of digits allowed in the inputs
const MAX_TIP_PERCENT = 3; // Maximum allowed tip percentage

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

billInput.addEventListener("input", validateInputLength);
tipInput.addEventListener("input", validateInputLength);

function validateInputLength(event) {
  const input = event.target;
  const inputValue = input.value;

  if (inputValue.length > MAX_INPUT_LENGTH) {
    input.value = inputValue.slice(0, MAX_INPUT_LENGTH); // Truncate the input value
  }
  if (input === tipInput && inputValue.length > 3) {
    input.value = inputValue.slice(0, 3); // Truncate the tip input value to 3 digits
  }

  calculateBill();
}

// Function to calculate the total bill per person
const calculateBill = () => {
  // Get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // Get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100;

  // Validate the inputs: Check if bill or tip input is negative or exceeds maximum
  if (bill < 0 || tipPercent < 0 || tipPercent > MAX_TIP_PERCENT) {
    // Clear the perPersonTotal and return
    perPersonTotalDiv.innerText = "";
    return;
  }

  // Get the total tip amount
  const tipAmount = bill * tipPercent;

  // Calculate the total (tip amount + bill)
  const total = tipAmount + bill;

  // Calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople;

  // Update the perPersonTotal on the DOM & show it to the user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// Function to increase the number of people
const increasePeople = () => {
  // Increment the number of people
  numberOfPeople += 1;

  // Update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // Calculate the bill based on the new number of people
  calculateBill();
};

// Function to decrease the number of people
const decreasePeople = () => {
  // Guard clause: If the number of people is 1 or less, simply return (can't decrease to 0 or negative)
  if (numberOfPeople <= 1) {
    return;
  }

  // Decrement the number of people
  numberOfPeople -= 1;

  // Update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // Calculate the bill based on the new number of people
  calculateBill();
};
