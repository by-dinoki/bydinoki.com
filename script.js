// tries the header bar

  nav = document.querySelector("nav");
         menuToggle = document.querySelector(".menu-toggle");
         cerrar = document.querySelector(".cl0");
        
        menuToggle.addEventListener("click", () => {
            nav.classList.add("visible");
          document.body.classList.add("drawer");
         nav.classList.add("drawer");
        })
        
        cerrar.addEventListener("click", () => {
            nav.classList.remove("visible");
          document.body.classList.remove("drawer");
     nav.classList.remove("drawer");
        })

// add the body fadding animation

 window.addEventListener("load", () => {
      document.body.classList.add("cargado");
    })

window.addEventListener('load', function(){

// Obtener la fecha actual
    var fecha = new Date();

    // Formatear la fecha (puedes personalizar el formato)
    var opciones = { year: 'numeric'};
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    // Mostrar la fecha en el elemento span
    document.getElementById('fechaActual').textContent = fechaFormateada;

 });

 //set string quiery ocultar branding
     
 const urlParams = new URLSearchParams(window.location.search);
 const nombre = urlParams.get('hidenark') ?? "false";
       
        document.addEventListener("DOMContentLoaded", function () {
       
       let branding = document.getElementById("header");
       let branding1 = document.getElementById("footer");
       ppage = document.querySelector(".dorian");       
       
       if (nombre == "1" || nombre == "true") {
       
     branding.style.display = "none";
       branding1.style.display = "none";
       ppage.style.padding = "20px 0";
       
       }
      })
