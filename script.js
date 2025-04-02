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

// add the body animation

 window.addEventListener(&#39;load&#39;, () =&gt; {
      document.body.classList.add(&#39;cargado&#39;);
    });
