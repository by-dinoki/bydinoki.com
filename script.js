// tries the header bar...

 const nav = document.querySelector("nav");
        const menuToggle = document.querySelector(".menu-toggle");
        const cerrar = document.querySelector(".cl0");
        
        menuToggle.addEventListener("click", () => {
            nav.classList.add("visible");
        })
        
        cerrar.addEventListener("click", () => {
            nav.classList.remove("visible");
        })

// add the body fadding animation

 window.addEventListener("load", () => {
      document.body.classList.add("cargado");
    })

// Obtener la fecha actual
    var fecha = new Date();

    // Formatear la fecha (puedes personalizar el formato)
    var opciones = { year: 'numeric'};
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    // Mostrar la fecha en el elemento span
    document.getElementById('fechaActual').textContent = fechaFormateada;
