const display = document.getElementById("display");

function appendToDisplay(intput) {
  display.value += intput;
}
function clearToDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
