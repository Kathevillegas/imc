function calcular(){
  var altura=(document.getElementById("altura").value)/100;
  var peso=document.getElementById("peso").value

  var imc= peso / altura ** 2;
  var text=""

  if(imc<18.5){
   text="esta delgado"
  }else if(imc<24.9){
  text="esta normal"

  }else if (imc<29.9){
    text="tiene sobrepeso"

  }else if (imc<39.9){
    text="tiene obesidad"
  }else if(imc>39.9){
    text="tiene obesidad morbida"
  }
  document.getElementById('cuadro').innerText=text
}

 
