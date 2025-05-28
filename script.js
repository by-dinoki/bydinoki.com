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
    setTimeout(() => {
      nav.scrollTop = 0;
    }, 290);
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
       let branding2 = document.querySelector("#myBtn");
       let branding3 = document.querySelector("#dialogo-cookies");
       ppage = document.querySelector(".dorian");       
       
       if (nombre == "1" || nombre == "true") {
       
     branding.style.display = "none";
       branding1.style.display = "none";
       if (myBtn != null) {
        branding2.style.display = "none";
      }
      if (branding3 != null) {
        branding3.style.display = "none";
      }
       ppage.style.padding = "20px 0";
       
       }
      })


      // Go Up
      
     myBtn = document.querySelector("#myBtn");
      
     if (myBtn != null) {
       myBtn.style.opacity = "0.0";
      myBtn.style.pointerEvents = "none";
      
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myBtn.style.opacity = "1.0";
      myBtn.style.pointerEvents = "all";
  } else {
    myBtn.style.opacity = "0.0";
      myBtn.style.pointerEvents = "none";
  }
}

}

function topFunction() {
  myBtn.style.opacity = "0.0";
  myBtn.style.pointerEvents = "none";
  window.scrollTo({top: 0, behavior: 'smooth'});
}


      // Cookies Pager
              
      dialogoCookies = document.getElementById('dialogo-cookies');
      aceptarCookies = document.getElementById('aceptar-cookies');
      
      if (dialogoCookies != null) {

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
    }


    // javascript history back

    var window = (window)
    const fallback = '/';
    var hasHistory = false;

window.addEventListener('beforeunload', function(){
    hasHistory = true;
});

    function setHome(){

window.history.go(-1);

    setTimeout(function(){
        if (!hasHistory){
            window.location.href = fallback;
        }
    }, 200);

    return false;

    }