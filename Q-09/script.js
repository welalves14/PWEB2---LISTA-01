let x = parseInt(prompt("Digite um numero:"));
cont = 0;
for (let i = 2; i <= x/2; i++) {
    if (x % i == 0) {
        cont++;
    }   
}
if (cont == 0) {
    document.write("O numero é primo ");
}else
    document.write("O numero não primo: " );