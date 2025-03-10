// Store the display element
const display = document.getElementById('display');

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Append number or operator to the display
function appendToDisplay(value) {
  display.value += value;
}

// Calculate the result and display it
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
