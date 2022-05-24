// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b);
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { //arrow simplifica e ao inves de colocar o nome function nos colocamos arrow
    return a +b
}


// retorno implicito
const subtracao = (a, b) /* parametros esperados */ => a - b //acao a ser tomada
//esse tipo de funcao serve somente quando a funcao é feita em somente uma linha
// e ela retorna automaticamente