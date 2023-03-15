// let buttons = document.querySelectorAll('.button');
let screen = document.querySelector('.screen');
let outputscreen = document.querySelector('.history1');

// let history = [];
// let btnvalue = "";
let outputvalue = "";
// let symbols = ["+", "-", "*", "/", "%"];
// let index;
// let result = 0;

// Array.from(buttons).forEach(function(element){
//        element.addEventListener("click",function(e){
//         for (index = 0; index < symbols.length; index++) {

//             if(e.target.value===symbols[index]){
//                 outputvalue+=e.target.value;
//                 history.push(btnvalue);
//                 history.push(e.target.value);
//                 btnvalue="";
//                 break;
//             }

//         }
//         console.log(index);
//         console.log(symbols.length);
//         if(index==symbols.length && e.target.value!="="){
//             btnvalue+=e.target.value;
//             outputvalue+=e.target.value;
//         }
//         outputscreen.innerText=outputvalue;
//         console.log(outputvalue);
//         console.log(btnvalue);
//         if(e.target.value=="="){
//             history.push(btnvalue);
//             btnvalue="";
//             for (let i = 0; i < history.length; i++) {
//                 if(history[i]==="+"){
//                     result = result + (parseInt(history[i - 1]) + parseInt(history[i + 1]));
//                     screen.value = result;
//                 }

//             }
//             console.log(result);
//         }
//        })
// })


// function pressed(value) {
//     if (outputvalue.length == 0 && value == "+") {
//         outputscreen.innerText = "Invalid Input";
//     }
//     else if (value == "+") {
//         outputvalue += value;
//         history.push(btnvalue);
//         history.push(value);
//         outputscreen.innerText = outputvalue;
//         btnvalue = "";
//     }

//     else {
//         btnvalue += value;
//         outputvalue += value;
//         outputscreen.innerText = outputvalue;
//         console.log(outputvalue);
//     }

//     console.log(outputvalue.length);
//     console.log(history);
//     console.log(btnvalue);
// }
// function backspace(value) {
//     if (outputscreen.innerText == "Invalid Input") {
//         outputscreen.innerText = "";
//     }
//     else{
//         outputscreen.innerText=outputscreen.innerText.slice(0,-1);

//         history=history.pop();
//         console.log(history);

//     }
// }

// function equal(value) {
//     if (outputvalue.length == 0 && value == "=") {
//         outputscreen.innerText = "";
//     }
//     history.push(btnvalue);
//     outputscreen.innerText = outputvalue + value;

//     for (let i = 0; i < history.length; i++) {
//         if (history[i] === "+") {
//             result = result + (parseInt(history[i - 1]) + parseInt(history[i + 1]));
//             screen.value = result;
//             CloseEvent;
//         }

//     }

//     console.log(history);
//     console.log(result);
// }
// console.log(symbols);

function pressed(e,S) {
  
    outputscreen.innerText+=S;
    outputvalue+=e;   
}

function Allclear() {
    outputscreen.innerText="";
    screen.value="";
    outputvalue="";
}

function backspace() {
    outputscreen.innerText = outputscreen.innerText.slice(0, -1);
    outputvalue=outputvalue.slice(0,-1);
    screen.value="";
}

function calculate() {
    let expression = outputvalue;
    let operators = [];
    let operands = [];
    let currentvalue = "";
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "+" || expression[i] === "-" || expression[i] === "*" || expression[i] ==="/" || expression[i] === "%") {
            operands.push(parseFloat(currentvalue));
            currentvalue = "";
            operators.push(expression[i]);

        }
        else {
            currentvalue+=expression[i];
        }
    }
    operands.push(parseFloat(currentvalue));

    let calculatedvalue = operands[0];


    for (let j = 0; j < operators.length; j++) {

        if (operators.length == 1 && operands.length==1) {
            calculatedvalue = operands[0];
            console.log(calculatedvalue)
        }
        else if (operators[j] === "+") {
            calculatedvalue+=operands[j + 1];
        }
        else if (operators[j] === "-") {
            calculatedvalue -= operands[j + 1];
        }
        else if (operators[j] === "*") {
            calculatedvalue *= operands[j + 1];
        }
        else if (operators[j] === "/") {
            calculatedvalue /= operands[j + 1];
        }
        else if (operators[j] === "%") {
            calculatedvalue %= operands[j + 1];
        }

    }

    screen.value="="+calculatedvalue;
}