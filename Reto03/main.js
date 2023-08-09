
    let cantidad = 0
  function checkear(a){
    let tareaRealizada = document.getElementById(a)    
    let tareaT = document.getElementById('tareaTerminada')
    let nombre2 = document.getElementById('nombre')
    let completo = document.getElementById('completo')
    if(nombre2.value==''){
        alert('Ingrese algun nombre por favor')
}
    else{
    cantidad ++
    
   
    tareaRealizada.style.textDecoration='line-through'
    document.getElementById('enlistado').style.display='flex'
    tareaT.innerHTML = nombre2.value+' Cumpliste con la tarea'+' '+tareaRealizada.innerText
    }
    if(cantidad==10){
        document.getElementById('enlistado').style.background='url(/images/fondolista2.jpg)no-repeat'
        document.getElementById('enlistado').style.backgroundSize='150px 240px'
        completo.innerHTML='!!!Felicitaciones cumplistes las 10 tareas!!!'
 }
}


    function foco(elemento){
        elemento.style.border = "3px solid red"
        elemento.style.background = "gray"
     }
     function cambioColor(elemento){
        elemento.style.background = "#A5FF33"
        elemento.style.border = "2px solid green"
     } 
     