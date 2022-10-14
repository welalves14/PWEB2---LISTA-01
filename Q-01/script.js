//n1 =parseInt(prompt("Digite o valor nota 1: "));

let x = parseInt(prompt("Digite um valor. Para encerrar digite O"));

while (x != 0) {
    document.write(x*x);
    document.write("<br>");
    x = parseInt(prompt("Digite um valor. Para encerrar digite O"));
    
}