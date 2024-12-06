// Closure for managing the counter
function createCounter() {
    let count = 0;

    return {
        add: function () {
            count += 1;
            return count;
        },
        subtract: function () {
            count -= 1;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

// Initialize counter
const counter = createCounter();

// DOM Elements
const counterDisplay = document.getElementById('counter');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');

// Update counter display
function updateDisplay() {
    counterDisplay.textContent = counter.getCount();
}

// Event listeners for buttons
addButton.addEventListener('click', () => {
    counter.add();
    updateDisplay();
});

subtractButton.addEventListener('click', () => {
    counter.subtract();
    updateDisplay();
});

// Initialize display
updateDisplay();