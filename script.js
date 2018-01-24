var vp=document.getElementById("villa");
var papel=vp.getContext("2d");


var fondo={
  url: "tile.png",
  cargaOK: false
}
var vaca ={
  url: "vaca.png",
  cargaOK: false
}
fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",dibfondo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",dibvaca);

function dibfondo(){
  fondo.cargaOK=true;
  dibujar();
}

function dibvaca(){
  vaca.cargaOK=true;
  dibujar();
}

function dibujar(){
  if(fondo.cargaOK==true){
    papel.drawImage(fondo.imagen,0,0);
  }
  if(vaca.cargaOK==true){
    for(var v=0;v<10;v++){
      var x=aleatorio(0,420);
      var y=aleatorio(0,420);
      papel.drawImage(vaca.imagen,x,y);
    }

  }
}



function aleatorio(min,max){
  var resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
