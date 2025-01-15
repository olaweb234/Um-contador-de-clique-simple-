let numero = 0


function aumentar(){
    numero++
    let aumento = document.getElementById('contador')
    aumento.textContent = numero
}

function diminuir(){

   
    if(numero==0){
    alert('Não é possivel colocar números negativos')
   }else{
     numero--
     let abaixar = document.getElementById('contador')
     abaixar.textContent = numero
   }
    
}