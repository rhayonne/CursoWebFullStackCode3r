/* Quando uma variavel esta undefined ou null, nao podemos acessar as funcoes da variavel */

let valor
console.log(valor);//aqui ela ainda nao foi definida Undefined

valor = null // indica que a variavel nao recebe nada (ausencia de valor)
console.log(valor);
const produto = {}
console.log(produto.preco); 
console.log(produto);
produto.preco = 3.50 //atribui o valor em na key preco
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
//delete produto.preco // deleta o valor que esta dentro do produto.preco
console.log(produto);


produto.preco = null //colocar quando o produto nao tem preco nenhum
console.log(!!produto.preco);
console.log(produto);