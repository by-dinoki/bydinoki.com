// redirect render/git pager to #BYDINOKI.com

texto = window.location.hostname;
const onrnd = "bydinoki.onrender.com";
const gitt = "by-dinoki.github.io";
const bydinoki = "bydinoki.com";

if (texto.includes(onrnd)){
  
  var url = window.location.toString();
  window.location = url.replace(texto, bydinoki);
  document.body.style.display = "none";

}

else if (texto.includes(gitt)){

  location.replace("https://"+bydinoki);
  document.body.style.display = "none";
  
}

else{

  console.log("%cBIENVENIDO A #BYDINOKI.com !","color: #b80000; font-family:poppins; font-weight: bold; font-size: 25px");

}