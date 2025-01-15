const buttons = document.querySelectorAll("button");
const span = document.querySelector("span");

let operandString1 = "", operandString2 = "", operand = "";
let isOperandPressed = false, isSecondOperandPressed = false;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const selectedButton = e.target;

        if (!selectedButton.hasAttributes()) {
            // Handle number input
            displayNum(selectedButton.textContent);
        } else {
            // Handle operator and functional buttons
            if (selectedButton.classList.contains("operator")) {
                handleOperator(selectedButton.innerText);
            } else {
                if (selectedButton.id === "clear") {
                    clear();
                } else if (selectedButton.id === "delete") {
                    deleteEle();
                } else if (selectedButton.id === "equals") {
                    if (isOperandPressed && isSecondOperandPressed) {
                        performOperation();
                    } else {
                        span.textContent = "Enter numbers first!";
                    }
                }
            }
        }
    });
});

function displayNum(selectedNumber) {
    if (isOperandPressed) {
        isSecondOperandPressed = true;
        operandString2 += selectedNumber;
        span.textContent = operandString2 || "0";
    } else {
        operandString1 += selectedNumber;
        span.textContent = operandString1 || "0";
    }
}

function handleOperator(selectedOperator) {
    if (isOperandPressed && isSecondOperandPressed) {
        // Perform operation if both operands are present
        performOperation();
    }
    isOperandPressed = true;
    operand = selectedOperator;
}

function clear() {
    operandString1 = "";
    operandString2 = "";
    operand = "";
    isOperandPressed = false;
    isSecondOperandPressed = false;
    span.textContent = "0";
}

function deleteEle() {
    if (isOperandPressed) {
        operandString2 = operandString2.slice(0, -1);
        span.textContent = operandString2 || "0";
    } else {
        operandString1 = operandString1.slice(0, -1);
        span.textContent = operandString1 || "0";
    }
}

function performOperation() {
    const x = parseFloat(operandString1);
    const y = parseFloat(operandString2);
    let result = 0;

    if (operand === "/" && y === 0) {
        span.textContent = "Infinity";
        clear();
        return;
    }

    switch (operand) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            span.textContent = "Error";
            return;
    }

    result = Math.round(result * 100) / 100; // Round to 2 decimal places
    operandString1 = `${result}`;
    operandString2 = "";
    isOperandPressed = false;
    isSecondOperandPressed = false;
    span.textContent = operandString1;
}


// bigButtons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         console.log(e.target);
//     });
// });

// smallButtons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         console.log(e.target);
//     });
// });