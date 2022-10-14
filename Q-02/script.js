//n1 =parseInt(prompt("Digite o valor nota 1: "));

let N = parseInt(prompt("Digite um valor. "));

/*while (N >= 0) {
    document.write("<br>");
    document.write(N + N);
    x = parseInt(prompt("Digite um valor. Para encerrar digite O"));
}
*/

j = 0
if(N > 0){
    for ( i = 1; i < N+1; i++) {
        j = j +i;
    }
document.write(j);
}
