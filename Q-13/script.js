let anos= parseInt(prompt("Digite a quantidade de anos: "));
let cigarrosDia= parseInt(prompt("Digite quantidae cigarros/dia: "));
let preco= parseInt(prompt("Digite o valor da carteira com 20 cigarros"));

anos = anos * 365;
total=cigarrosDia*(preco/20);

document.write("Total gasto: ",total);