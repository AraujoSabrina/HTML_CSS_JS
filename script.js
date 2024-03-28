var num = 9
if(num < 7){
    console.log("opa");
}else{
    console.log("ola");
}


let id = 0;
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
        
        //alert("Ola " + nome)
    }
    let pessoasObjeto = {nome, senha}
    listaNomes.push(pessoasObjeto)
    console.log("Nome:" + pessoasObjeto.nome)
    adcElementosHTML(pessoasObjeto)
    
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
function adcElementosHTML(pessoasObjeto){
    const lista = document.getElementById('lista')

    var div = document.createElement("div");


    id++;
    div.innerHTML = `${pessoasObjeto.nome} ${pessoasObjeto.senha} <button class='${id}'> Deletar </button>`;
    
    //qndo adc filh
    lista.appendChild(div);

    ///////////////////////////
    DeletarTarefa();
    
}


function DeletarTarefa(){

  let buttonsDeletar = document.querySelectorAll("button");

    for(let i = 0; i < buttonsDeletar.length; i++){

        buttonsDeletar[i].addEventListener("click", (e)=>{
            e.target.parentNode.remove();

        })

    }

}