var vp=document.getElementById("villa");
var papel=vp.getContext("2d");
var mapa="tile.png";

var fondo=new Image();
fondo.src=mapa;
fondo.addEventListener("load",dibujar);

var cerdo=new Image();
cerdo.src="cerdo.png";
cerdo.addEventListener("load",dibcerdo);

var pollo=new Image();
pollo.src="pollo.png";
pollo.addEventListener("load",dibpollo);

var vaca=new Image();
vaca.src="vaca.png";
vaca.addEventListener("load",dibvaca);

function dibujar(){
  papel.drawImage(fondo,0,0);
}

function dibcerdo(){
  papel.drawImage(cerdo,0,0);
}

function dibpollo(){
  papel.drawImage(pollo,0,0);
}

function dibvaca(){
  papel.drawImage(vaca,0,0);
}

function aleatorio(min,max){
  var resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
