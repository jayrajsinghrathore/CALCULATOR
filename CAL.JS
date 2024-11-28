let currentInput = document.getElementById('currentInput');
let history = document.getElementById('history');

function appendToDisplay(value) {
    currentInput.value += value;
}

function clearDisplay() {
    currentInput.value = '';
    history.textContent = '';
}

function calculateResult() {
    try {
        history.textContent = currentInput.value;
        currentInput.value = eval(currentInput.value.replace('÷', '/').replace('×', '*'));
    } catch {
        currentInput.value = 'Error';
    }
}

function deleteLast() {
    currentInput.value = currentInput.value.slice(0, -1);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

// Keyboard Input Handling
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});