let a = parseInt(prompt("Digite o primeiro numero: "));
let b = parseInt(prompt("Digite o segundo numero: "));
let resto;
while (b != 0){
    resto = a % b;
    a = b;
    b = resto;
}
document.write(a);