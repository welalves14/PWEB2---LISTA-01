

let x = parseInt(prompt("Digite um valor x : "));
let n = parseInt(prompt("Digite um valor n : "));

while (n < 0){
    n = parseInt(prompt("Digite um positivo para valor n : "));
}

potencia = x ** n;


document.write(potencia);
