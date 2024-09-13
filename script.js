const form = document.getElementById('split-form');
const amountInput = document.getElementById('amount');
const peopleInput = document.getElementById('people');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    const people = parseInt(peopleInput.value);
    const splitAmount = calculateSplitAmount(amount, people);
    displayResult(splitAmount);
});

function calculateSplitAmount(amount, people) {
    return (amount / people).toFixed(2);
}

function displayResult(splitAmount) {
    resultDiv.innerText = `Each person owes: ₹${splitAmount}`;
}
