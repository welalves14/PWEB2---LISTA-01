let numero1 = parseInt(prompt("Digite o numero 01:  "));
let numero2 = parseInt(prompt("Digite o numero 02:  "));
let numero3 = parseInt(prompt("Digite o numero 03:  "));
let soma = 0;

if (numero1 <= numero2 && numero2 <= numero3) {
    soma = numero1 + numero2;    
}else if (numero1 <= numero3 && numero3 <= numero2) {
    soma = + numero1 + numero3;    
}else if (numero2 <= numero1 && numero1 <= numero3) {
    soma = numero2 + numero1;    
}else if (numero2 <= numero3 && numero3 <= numero1) {
    soma = numero2+ numero3;    
}else if (numero3 <= numero1 && numero1 <= numero2) {
    soma = numero3 + numero1;    
}else if(numero3 <= numero2 && numero2 <= numero1) {
    soma = + numero3 +numero2;
}
document.write("O resultado da soma dos dois maiores numeros é: " + soma);