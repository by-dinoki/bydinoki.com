// redirect ma render/git pager

texto = window.location.href;
const onrnd = "bydinoki.onrender.com";
const gitt = "by-dinoki.github.io/bydinoki.com/";

if (texto.includes(onrnd) || texto.includes(gitt)){
  
  console.log("ENTRO A https://BYDINOKI.com");

}

else{

  console.log("%cBIENVENIDO A #BYDINOKI.com !","color: #b80000; font-family:poppins; font-weight: bold; font-size: 25px");

}