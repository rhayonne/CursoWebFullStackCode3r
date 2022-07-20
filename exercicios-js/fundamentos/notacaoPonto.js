console.log(typeof console);

console.log(Math.ceil(7,1));//vai retornar sempre um numero inteiro 

const obj1 ={}

obj1.nome = 'Bola' //vai criar o atributo dentro do objeto se nao houver tal atributo
//obj1['nome'] = 'Bola2' //uma outra forma de criar ou alterar o atributo de um objeto

 console.log(obj1.nome);


 function Obj(nome){
    this.nome = nome, 
    this.exec = function(){
        console.log('Funcao dentro do obj');
    }
 }

 const obj2 = new Obj('Cadeira')

 const obj3 = new Obj('Mesa')

 console.log(obj2.nome);
 console.log(obj3);
 obj3.exec();