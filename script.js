function addValue(value) {
    document.calculator.ans.value += value;
}

function calculateResult() {
    document.calculator.ans.value = eval(document.calculator.ans.value);
}