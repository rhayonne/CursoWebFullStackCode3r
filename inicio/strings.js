const escola = 'Cod3r'


console.log(escola.charAt(4)); //imprime o valor na posicao definida
console.log(escola.charAt(3)); //imprime o valor na posicao definida
console.log(escola.charCodeAt(3));//Codigo unicode em html da string na posicao 
console.log(escola.indexOf('d')); //imprime a posicao dentro do array do valor inserido

console.log(escola.substring(1));//Imprime o valor na posicao definida
console.log(escola.substring(0,3));// imprime os valores que estao dentro da posicoes definidas

console.log('Escola '.concat(escola).concat("!")); //Contatena textos e variaveis 
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e')); // modifica o valor da posicao pela string

console.log('Ana, Maria, Pedro'.split(','));//Cria um arrai separando os valores pelo simbolo usado, nesse caso virgula
