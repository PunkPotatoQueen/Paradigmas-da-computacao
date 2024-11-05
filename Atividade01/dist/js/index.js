"use strict";
const x = document.getElementById("num1");
const y = document.getElementById("num2");
const input = document.getElementById("input");
const button = document.getElementById("submit");
const raio = document.getElementById("raio");
button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(input.value);
    console.log(Number(x.value) + Number(y.value));
    console.log(Number(raio.value) * 2 * 3.14);
});
