const funcs =[]

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(`impresso de  posicao ${i}`);
    })
}

funcs[1]()
funcs[5]()
funcs[9]()

//o valores sao diferentes por que o LET tem o escopo de bloco