let display = document.getElementById('result');
let expression = '';

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}
