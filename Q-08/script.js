let exame1 = parseInt(prompt("Digite a nota I"));
let exame2 = parseInt(prompt("Digite a nota II"));
let exame3 = parseInt(prompt("Digite a nota III"));
let exame4 = parseInt(prompt("Digite a nota IV"));
let exame5 = parseInt(prompt("Digite a nota V"));

document.write("Classificação: A – passou em todos os exames;<br>");
document.write("B – passou em I, II e IV, mas não em III ou V; <br>");
document.write("C – passou em I e II, III ou IV, mas não em <br>");
document.write("V. Reprovado – outras situações.<br><br>");

document.write("Resultado : <b>")



if(exame1>=70 && exame2>=70 && exame3>=70 && exame4>=70 && exame5>=70){
    document.write("Classificação A")
}

else if((exame1>=70 && exame2>=70 && exame4>=70) && (exame5<70 || exame3<70)){
    document.write("Classificação B")
}

else if((exame1>=70 && exame2>=70) && (exame3>=70 || exame4>=70) && (exame5<70)){
    document.write("Classificação C")
}

else{
    document.write("Classificação D")
}
document.write("</b>")