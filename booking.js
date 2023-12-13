/********* create variables *********/
// Useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let dailyRate = 35; // Cost per day
let dayCounter = 0; // Number of days selected

// Array of days of the week
const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

// Elements on the screen

const dayElements = daysOfWeek.map(function(day) {
 return document.getElementById(day);
});

const fullDayElement = document.getElementById('full');
const halfDayElement = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');


/********* colour change days of week *********/
// When the day buttons are clicked, apply the "clicked" class to that element and update any other relevant variables.
// Recalculate the total cost.
// Added challenge: Don't update the dayCounter if the same day is clicked more than once. Hint: .classList.contains() might be helpful here!

function updateDayCounter(dayIndex) {
    if (!dayElements[dayIndex].classList.contains('clicked')) {
        dayElements[dayIndex].classList.add('clicked');
        dayCounter++;
    }
}

dayElements.forEach(function(dayElement, index) {
    dayElement.addEventListener('click', function() {
        updateDayCounter(index);
        calculateCost();
    });
});

/********* clear days *********/
// When the clear-button is clicked, remove the "clicked" class from all days, reset any other relevant variables, and set the calculated cost to 0.

clearButton.addEventListener('click', function() {
    dayElements.forEach(function(dayElement) {
        dayElement.classList.remove('clicked');
    });
    dayCounter = 0;
    calculateCost();
});

/********* change rate *********/
// When the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function setFullDayRate() {
    fullDayElement.classList.add('clicked');
    halfDayElement.classList.remove('clicked');
    dailyRate = 35;
}


// When the full-day button is clicked, the daily rate is set back to $35, the "clicked" class is added to "full" and removed from "half", and the total cost is recalculated.

function setHalfDayRate() {
    halfDayElement.classList.add('clicked');
    fullDayElement.classList.remove('clicked');
    dailyRate = 20;
}

fullDayElement.addEventListener('click', setFullDayRate);
halfDayElement.addEventListener('click', setHalfDayRate);

/********* calculate *********/
// When a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value.

function calculateCost() {
    const totalCost = dayCounter * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}

// Initialize the script
calculateCost();
