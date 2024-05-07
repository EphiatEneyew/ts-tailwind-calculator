"use strict";
var displayValue = '';
function addToDisplay(value) {
    displayValue += value;
    updateDisplay();
}
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function calculate() {
    try {
        var result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    }
    catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
function updateDisplay() {
    var display = document.getElementById('display');
    display.value = displayValue;
}
