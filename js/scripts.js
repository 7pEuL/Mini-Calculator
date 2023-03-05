// DOM element
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

// Create element for error message display
let errorP1 = document.createElement("p");
numOne.after(errorP1);
errorP1.style.color = "red";
let errorP2 = document.createElement("p");
errorP2.style.color = "red";
numTwo.after(errorP2);

add.addEventListener("click", () => {
  if (numOne.value == "" && numTwo.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(1);
  } else if (numOne.value == "" && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(2);
  } else if (numTwo.value == "" && isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c002px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(3);
  } else if (numOne.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(4);
  } else if (numTwo.value == "") {
    errorP1.textContent = "";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(5);
  } else if (isNaN(numOne.value) && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(6);
  } else if (isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(7);
  } else if (isNaN(numTwo.value)) {
    errorP1.textContent = "";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(8);
  } else {
    result.value = parseInt(numOne.value) + parseInt(numTwo.value);
    numOne.style.border = "3px solid #2de000";
    numTwo.style.border = "3px solid #2de000";
    errorP1.textContent = "";
    errorP2.textContent = "";
  }
});

subtract.addEventListener("click", () => {
  if (numOne.value == "" && numTwo.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(1);
  } else if (numOne.value == "" && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(2);
  } else if (numTwo.value == "" && isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(3);
  } else if (numOne.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(4);
  } else if (numTwo.value == "") {
    errorP1.textContent = "";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(5);
  } else if (isNaN(numOne.value) && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(6);
  } else if (isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "";
    numTwo.style.border = "";
    console.log(7);
  } else if (isNaN(numTwo.value)) {
    errorP1.textContent = "";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(8);
  } else {
    result.value = parseInt(numOne.value) - parseInt(numTwo.value);
    numOne.style.border = "3px solid #2de000";
    numTwo.style.border = "3px solid #2de000";
    errorP1.textContent = "";
    errorP2.textContent = "";
  }
});

multiply.addEventListener("click", () => {
  if (numOne.value == "" && numTwo.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(1);
  } else if (numOne.value == "" && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(2);
  } else if (numTwo.value == "" && isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(3);
  } else if (numOne.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(4);
  } else if (numTwo.value == "") {
    errorP1.textContent = "";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(5);
  } else if (isNaN(numOne.value) && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(6);
  } else if (isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(7);
  } else if (isNaN(numTwo.value)) {
    errorP1.textContent = "";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(8);
  } else {
    result.value = parseInt(numOne.value) * parseInt(numTwo.value);
    numOne.style.border = "3px solid #2de000";
    numTwo.style.border = "3px solid #2de000";
    errorP1.textContent = "";
    errorP2.textContent = "";
  }
});

divide.addEventListener("click", () => {
  if (numOne.value == "" && numTwo.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(1);
  } else if (numOne.value == "" && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(2);
  } else if (numTwo.value == "" && isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(3);
  } else if (numOne.value == "") {
    errorP1.textContent = "Provide a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(4);
  } else if (numTwo.value == "") {
    errorP1.textContent = "";
    errorP2.textContent = "Provide a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(5);
  } else if (isNaN(numOne.value) && isNaN(numTwo.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(6);
  } else if (isNaN(numOne.value)) {
    errorP1.textContent = "Provide Only a Number";
    errorP2.textContent = "";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(7);
  } else if (isNaN(numTwo.value)) {
    errorP1.textContent = "";
    errorP2.textContent = "Provide Only a Number";
    result.value = "";

    numOne.style.border = "2px solid #e03c00";
    numTwo.style.border = "2px solid #e03c00";
    console.log(8);
  } else {
    result.value = parseInt(numOne.value) / parseInt(numTwo.value);
    numOne.style.border = "3px solid #2de000";
    numTwo.style.border = "3px solid #2de000";
    errorP1.textContent = "";
    errorP2.textContent = "";
  }
});

// Rest Button function
reset.addEventListener("click", () => {
  errorP1.textContent = "";
  errorP2.textContent = "";
  numOne.value = "";
  numTwo.value = "";
  result.value = "";
  result.style.border = "";
  numOne.style.border = "";
  numTwo.style.border = "";
});
