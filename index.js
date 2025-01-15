const smallButtons = document.querySelectorAll(".small-buttons");
const bigButtons = document.querySelectorAll(".big-buttons");
const buttons = document.querySelectorAll("button");
const span = document.querySelector("span");

let operandString1 = "", operandString2 = "", operand = "";
let isOperandPressed = false;


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const selectedButton = e.target;
        console.log(isOperandPressed, operandString1, operandString2);
        if (!selectedButton.hasAttributes()) {
            displayNum(selectedButton.textContent);
        }
        if (selectedButton.hasAttributes()) {
            if (selectedButton.classList.contains("operator")) {
                if (isOperandPressed) handleDoublePress();
                else handleOperandPress();
            } else {
                if (selectedButton.id === "clear") {
                    clear();
                }
                if (selectedButton.id === "delete") {
                    deleteEle();
                }
                if (selectedButton.id === "equals") {
                    if (isOperandPressed) {
                        performOperation();
                    } else {
                        alert("Give the Operand");
                    }
                }
                
            }
            
        }
    });
});

function displayNum(selectedNumber) {
    operandString1 += selectedNumber
    span.textContent = `${operandString1}`;
}

function clear() {
    operandString1 = "";
    operandString2 = "";
    span.innerText = 0;
}

function deleteEle() {
    let currentNumber =  span.innerText;
    currentNumber = currentNumber.slice(0, -1);
    span.innerText = currentNumber;
    if (isOperandPressed) operandString2 = operandString2.slice(0, -1);
    else operandString1 = operandString1.slice(0, -1);
}

// function performOperation() {

// }

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