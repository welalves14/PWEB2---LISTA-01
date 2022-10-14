let x = parseInt(prompt("Digite o N-ésimo termo FIBONACCI : "));

let fibo = [];
fibo [0] = 0;
fibo [1] = 1;

for (let i=2; i<x; i++){
    fibo [i] = fibo [i-2] + fibo [i-1];
}
document.write("Os números da sequência são: ", fibo);