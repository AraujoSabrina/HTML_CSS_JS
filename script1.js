let $_btnCadastra = document.querySelector(".btnCadastrar");
let $_divListaTemperatura = document.querySelector(".ListaTemperatura");


async function exec(){
    await ConsumindoAPI();
}
exec();
$_btnCadastra.addEventListener("click",async () =>{
   
    

});

async function ConsumindoAPI() {
    try {
        let response = await axios.get('https://localhost:7287/WeatherForecast');
        if (response.status === 200) {

            CriarElementos(response.data);

        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false; // Return false if there's an error
    }
}

function CriarElementos(data){
    
    
    for(let i=0; i<data.length; i++){
        let li = document.createElement("li");
        
        li.innerHTML = data[i].date + " - "+ data[i].temperatureF + " - " + "<button> deletar </button>";
        let btn = document.querySelector("button") ;
        $_divListaTemperatura.append(li);
        if(btn == )
    }
    console.log(data);

}

function excluiElemento(data){
    let btn = document.querySelector("button") 
    for(let i=0; data<length; i++){
        buttonsDeletar[i].addEventListener("click", (e)=>{
            if(confirma){
                e.target.ParentNode.remove();
            }
            

        })
    }
}

