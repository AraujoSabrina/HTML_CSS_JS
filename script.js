var num = 9
if(num < 7){
    console.log("opa");
}else{
    console.log("ola");
}
var listaNomes = [];

var obj = {
    nome: "Sabrina",
    idade: 20,
    desc: "oo"
}
console.log(obj.idade)  

function btn_castrar(){
    var nome = document.getElementById('Nome').value
    var senha = document.getElementById('Senha').value
    console.log(nome)
    console.log(senha)
    var check = validaFormulario(nome, senha)
    if(!check){
        alert("Informe os dados");
        return;
    }
    else{
        alert("Ola "+ nome)
    }
    let pessoasObjeto = {nome, senha}
    listaNomes.push(pessoasObjeto)
    console.log(listaNomes)
}
function pegaLetra(event){
    console.log(event.key);
    
}

function validaFormulario(Nome, Senha){
    if(!Nome || !Senha){
       return false;
    }else{
      return true;
    }
}
function adcElementosHTML(){

}