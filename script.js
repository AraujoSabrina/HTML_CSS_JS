var num = 9
if(num < 7){
    console.log("opa");
}else{
    console.log("ola");
}

var obj = {
    nome: "Sabrina",
    idade: 20,
    desc: "oo"
}
console.log(obj.idade)  

function btn_castrar(){
    var nome = document.getElementById('primeiroNome').value
    console.log(nome);
    console.log('cadstro-btn');
}
function pegaLetra(event){
    console.log(event.key);
    
}