//par nome/valor
const saudacao = 'OPA' //contexto lexico 1

function exec(){
    const saudacao ='Falaa'// contxto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua X',
        numero: 50,
    }
}

console.log(saudacao);
console.log(exec());

console.log(cliente);