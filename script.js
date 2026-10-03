document.addEventListener('DOMContentLoaded', () => {
         const previousOperandElement = document.getElementById('previous-operand');
            const currentOperandElement = document.getElementById('current-operand');
            const numberButtons = document.querySelectorAll('.number');
            const operatorButtons = document.querySelectorAll('.operator');
            const equalsButton = document.getElementById('equals');
            const clearButton = document.getElementById('clear');
            const deleteButton = document.getElementById('delete');
            
            let currentOperand = '0';
            let previousOperand = '';
            let operation = undefined;
            let resetScreen = false;

            function updateDisplay() {
                currentOperandElement.textContent = currentOperand;
                if (operation != null) {
                    previousOperandElement.textContent = 
                        `${previousOperand} ${operation}`;
                } else {
                    previousOperandElement.textContent = '';
                }
            }

            function appendNumber(number) {
                if (currentOperand === '0' || resetScreen) {
                    currentOperand = '';
                    resetScreen = false;
                }
                if (number === '.' && currentOperand.includes('.')) return;
                currentOperand += number;
                updateDisplay();
            }

            function chooseOperation(selectedOperation) {
                if (currentOperand === '') return;
                if (previousOperand !== '') {
                    compute();
                }
                operation = selectedOperation;
                previousOperand = currentOperand;
                resetScreen = true;
                updateDisplay();
            }

            function compute() {
                let computation;
                const prev = parseFloat(previousOperand);
                const current = parseFloat(currentOperand);
                if (isNaN(prev) || isNaN(current)) return;
                
                switch (operation) {
                    case '+':
                        computation = prev + current;
                        break;
                    case '−':
                        computation = prev - current;
                        break;
                    case '×':
                        computation = prev * current;
                        break;
                    case '÷':
                        computation = prev / current;
                        break;
                    default:
                        return;
                }
                
                currentOperand = computation.toString();
                operation = undefined;
                previousOperand = '';
                resetScreen = true;
                updateDisplay();
            }

            function clear() {
                currentOperand = '0';
                previousOperand = '';
                operation = undefined;
                updateDisplay();
            }

            function deleteNumber() {
                if (currentOperand.length === 1) {
                    currentOperand = '0';
                } else {
                    currentOperand = currentOperand.slice(0, -1);
                }
                updateDisplay();
            }

            document.addEventListener('keydown', (e) => {
                if (e.key >= '0' && e.key <= '9') {
                    appendNumber(e.key);
                } else if (e.key === '.') {
                    appendNumber('.');
                } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
                    const ops = {
                        '+': '+',
                        '-': '−',
                        '*': '×',
                        '/': '÷'
                    };
                    chooseOperation(ops[e.key]);
                } else if (e.key === 'Enter' || e.key === '=') {
                    e.preventDefault();
                    compute();
                } else if (e.key === 'Escape') {
                    clear();
                } else if (e.key === 'Backspace') {
                    deleteNumber();
                }
            });

            numberButtons.forEach(button => {
                button.addEventListener('click', () => {
                    appendNumber(button.textContent);
                });
            });

            operatorButtons.forEach(button => {
                button.addEventListener('click', () => {
                    chooseOperation(button.textContent);
                });
            });

            equalsButton.addEventListener('click', () => {
                compute();
            });

            clearButton.addEventListener('click', () => {
                clear();
            });

            deleteButton.addEventListener('click', () => {
                deleteNumber();
            });
        });
  
