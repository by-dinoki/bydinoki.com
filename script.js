// set the domain web

texto = window.location.href ;
const onrnd = "bydinoki.onrender.com";
const gitt = "bydinoki.github.io/bydinoki.com";

if (texto.includes(onrnd) || texto.includes(gitt)){
  
  console.log("ENTRO A https://BYDINOKI.com");

}



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
     
 urlParams = new URLSearchParams(window.location.search);
 nombre = urlParams.get('hidenark') ?? "false";
       
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


      // Cookies Pager

              
      dialogoCookies = document.getElementById('dialogo-cookies');
      aceptarCookies = document.getElementById('aceptar-cookies');
      
      // Función para mostrar el diálogo de cookies
      function mostrarDialogoCookies() {
          if (!localStorage.getItem('cookiesAceptadas')) {
              dialogoCookies.classList.remove('oculto');
              dialogoCookies.classList.add('visible');
          }
      }
      
      // Función para ocultar el diálogo de cookies
      function ocultarDialogoCookies() {
          dialogoCookies.classList.remove('visible');
          dialogoCookies.classList.add('oculto');
      }
      
      // Eventos de los botones
      aceptarCookies.addEventListener('click', () => {
          localStorage.setItem('cookiesAceptadas', 'true');
          ocultarDialogoCookies();
      });
      
      // Mostrar el diálogo al cargar la página
      mostrarDialogoCookies();
