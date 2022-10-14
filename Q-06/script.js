let numero1 = parseInt(prompt("Digite o numero 01:  "));
let numero2 = parseInt(prompt("Digite o numero 02:  "));
let numero3 = parseInt(prompt("Digite o numero 03:  "));

if (numero1 <= numero2 && numero2 <= numero3) {
    document.write("Ordem Crescente: n1 = "+ numero1 +" | n2 = "+ numero2 +" | n3 = "+ numero3);    
}else if (numero1 <= numero3 && numero3 <= numero2) {
    document.write("Ordem Crescente: n1 = "+ numero1 +" | n2 = "+ numero3 +" | n3 = "+ numero2);    
    
}else if (numero2 <= numero1 && numero1 <= numero3) {
    document.write("Ordem Crescente: n1 = "+ numero2 +" | n2 = "+ numero1 +" | n3 = "+ numero3);    
}else if (numero2 <= numero3 && numero3 <= numero1) {
    document.write("Ordem Crescente: n1 = "+ numero2 +" | n2 = "+ numero3 +" | n3 = "+ numero1);    
    
}else if (numero3 <= numero1 && numero1 <= numero2) {
    document.write("Ordem Crescente: n1 = "+ numero3 +" | n2 = "+ numero1 +" | n3 = "+ numero2);    
    
}else if(numero3 <= numero2 && numero2 <= numero1) {
    document.write("Ordem Crescente: n1 = "+ numero3 +" | n2 = "+ numero2 +" | n3 = "+ numero1);
}