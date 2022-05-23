/* Valores booleanos sao valores logicos ou verdadeiro (true) ou falso (false)
sao utilizados para fazer testes logicos de verdadeiros ou falsos onde os resultados so podem ser
verdadeiros ou falsos
*/

isAtivo = true // atribui a variavel como true
console.log(isAtivo); //imprime o valor

isAtivo = 1 // 1 é um numero inteiro e por isso é considerado true
console.log(!!isAtivo);/* negacao da negacao 
quando se tem uma dupla negacao, o operador logico vai se negado duas vezes ou seja nesse caso
isAtivo = true
!isativo ==> negacao  entao o valor passa a ser
isAtivo = false
!isAtivo ==> o valor de isativo é negado e passa a ser true
isativo = true */

console.log(' os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(' '); //espaco ou qualquer preenchimento é true
console.log(!!'Texto');
console.log(!![]); //Array vazio ou nao é verdadeiro
console.log(!!{}); //objeto literal vazio ou nao
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //verifica se o valor atribuido à variavel é verdadeiro ou nao



console.log('Os falsos...');
console.log(!!0);
console.log('');//string vazia sem espaço nem nada
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); //se valor atribuido da variavel é false


console.log('Para finalizar');
console.log(!!('' || null || 0 || 'text' || 123));