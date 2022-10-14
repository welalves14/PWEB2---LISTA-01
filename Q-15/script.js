let num = parseInt(prompt("Digite o número"));

for(i=0;i<=num;i++){
    if(num%i==0){
        document.write("Divisor: <b>", i,"</b><br>")
    }
}