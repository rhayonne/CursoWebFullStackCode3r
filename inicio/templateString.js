const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'


const template = ` Uma outra maneira de imprimir: 
Ola ${nome}!`
console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUppercase()
console.log(`Ei... ${up('cuidado')}!`);