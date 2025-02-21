const display = document.querySelector('.display');
const keys = document.querySelectorAll('.item');

const arr = [];
let result = null;
let resetDisplay = false;

keys.forEach(item => {
    item.addEventListener('click', () => handleInput(item.textContent));
});

document.addEventListener('keypress', (e) => {

    const key = e.key;
    if (key === ',') {
        handleInput('.');
    } else {
        handleInput(key);
    }
});

function handleInput(itemValue) {
    // Se for número ou vírgula
    if (!isNaN(itemValue) || itemValue === ',') {
        if (resetDisplay) {
            display.value = itemValue;
            resetDisplay = false;
        } else {
            display.value = (display.value === '0' ? '' : display.value) + itemValue;
        }
    }

    if (['+', '-', '*', '/'].includes(itemValue)) {
        if (result !== null) {
            arr[0] = result;
        } else {
            display.value = display.value.replace(',', '.');
            arr[0] = parseFloat(display.value);
        }

        arr[1] = itemValue;
        resetDisplay = true;
    }

    if (itemValue === '=') {
        display.value = display.value.replace(',', '.');
        arr[2] = parseFloat(display.value);
        result = calculate(arr[0], arr[2], arr[1]);
        display.value = result;
        arr.length = 0;
        resetDisplay = true;
    }

    else if (itemValue === 'C') {
        arr.length = 0;
        result = null;
        display.value = '';
        resetDisplay = false;
    }
}

function calculate(value, value2, operator) {
    if (typeof value === 'number' && typeof value2 === 'number') {
        switch (operator) {
            case '+': return value + value2;
            case '-': return value - value2;
            case '/': return value / value2;
            case '*': return value * value2;
        }
    }
    return 'Erro';
}
