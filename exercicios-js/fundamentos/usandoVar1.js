{
  {
    {
      {
        var sera = "Sera??"; // un VAR é visivel por conta do hosting, inicia antes das funcoes 
      }
    }
  }
}
console.log(sera);


function teste(){
    var local = 123
}

teste()
console.log(local);// a variavel do tipo var nao é acessivel fora do escopo da funcao 