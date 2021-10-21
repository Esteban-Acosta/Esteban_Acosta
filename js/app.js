window.addEventListener('load', ()=> {
    let horaHTML = document.getElementById('hora')
    let minutoHTML = document.getElementById('minuto')
    let segundoHTML = document.getElementById('segundo')

     const mostrarHora = () => {
         let fecha = new Date()
         let hora = fecha.getHours()
         let minuto = fecha.getMinutes()
         let segundo = fecha.getSeconds()

         horaHTML.textContent = String(hora).padStart(2, "0") 
         minutoHTML.textContent = String(minuto).padStart(2, "0") 
         segundoHTML.textContent = String(segundo).padStart(2, "0") 

         setTimeout(mostrarHora, 1000)     
     }
     mostrarHora()
})