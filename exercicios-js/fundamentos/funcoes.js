// Funcao sem retorno

function imprimirSoma (a, b){
    console.log(a + b);
}

imprimirSoma(2,3)
imprimirSoma(2,3, 3,4) //JS aceita mas soma somente os dois primeiros numeros, ignorando o restante
imprimirSoma()//soma igual NaN também.

//funcao com retorno
function somar(a, b = 5){ //você pode atribuir o valor de uma variavel. 
    //nesse caso quando se coloca somente um valor na hora de chamar a funcao, ele vai somar com o valor ja declarado.
    return a + b

}

console.log(somar(7,3));
console.log(somar(8));