const x = document.getElementById("num1") as HTMLInputElement;
const y = document.getElementById("num2") as HTMLInputElement;

const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("submit") as HTMLButtonElement;

const raio = document.getElementById("raio") as HTMLInputElement;

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(input.value); 
    console.log(Number(x.value) + Number(y.value));
    console.log(Number(raio.value) * 2 * 3.14);
});

