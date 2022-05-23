const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]); //imprime a posicao 0 e 3
console.log(valores[4]); // quando a posicao nao existe, o valor retornado ou impresso sera Undefined

valores[4] = 10 //adiciona o valor 10 na posicao 4
console.log(valores);

console.log(valores.length); //imprime quantidade de elementos no array
valores.push({id: 3}, false, null, 'teste', 452) // adiciona todos esses valores no array
console.log(valores);

console.log(valores.pop()) //retirar/exclui o ultimo valor do array
delete valores[0] //Deleta o valor na posicao do array





console.log(typeof valores); // imprime o tipo da variavel
