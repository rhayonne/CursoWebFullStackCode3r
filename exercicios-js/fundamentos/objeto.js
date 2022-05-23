/* par de chaves {} significa que é um objeto
um objeto é uma colecao de chaves e valores
no JS podemos criar valores e chaves quando quisermos (forma dinamica)
*/
const prod1 = {}
prod1.nome = 'Celular ultra Mega' // inserindo a chave nome com o valor 'celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //inserindo uma KEY (chave) com espaco (deve-se evitar)


console.log(prod1)

// Outra forma de criar objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2);