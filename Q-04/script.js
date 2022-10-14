let x = parseInt(prompt("Digite um numero inteiro não-negativo: "));
resp = 1;
cont = 2;
while (cont <= x) {
    resp = resp * cont;
    cont++;
}
document.write("O fatorial de " + x +" é igual a: " + resp);