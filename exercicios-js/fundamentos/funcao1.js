function imprimirSoma(a, b){
    console.log(a +b);
}

imprimirSoma(2,3)
imprimirSoma(2)

//funcao com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(2,10));
console.log(soma(10));
