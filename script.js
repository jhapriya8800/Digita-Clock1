document.addEventListener('DOMContentLoaded', function() {
    const valueElement = document.getElementById('value');
    const changeByElement = document.getElementById('changeBy');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');

    let counterValue = 0;

    // Function to update the counter value in the DOM
    const updateCounter = (newValue) => {
        counterValue = newValue;
        valueElement.textContent = counterValue;
    };

    // Increment button click event
    incrementButton.addEventListener('click', () => {
        const changeBy = parseInt(changeByElement.value) || 1; // Get the value from the input
        updateCounter(counterValue + changeBy);  // Increment the counter
    });

    // Decrement button click event
    decrementButton.addEventListener('click', () => {
        const changeBy = parseInt(changeByElement.value) || 1; // Get the value from the input
        updateCounter(counterValue - changeBy);  // Decrement the counter
    });

    // Reset button click event
    resetButton.addEventListener('click', () => {
        updateCounter(0);  // Reset the counter to 0
    });
});