const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset-btn');
const counterDisplay = document.getElementById('counter');

let counter = 0;

incrementButton.addEventListener('click', function() {
    counter += 1;
    updateCounterDisplay();
});

decrementButton.addEventListener('click', function() {
    counter -= 1;
    updateCounterDisplay();
});

resetButton.addEventListener('click', function() {
    counter = 0;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}