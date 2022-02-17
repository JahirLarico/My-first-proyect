var dibujo = document.getElementById("dibujo");
var linea = dibujo.getContext("2d");
var n_lineas= document.querySelector(".lines");
var draw = document.getElementById("draw");
var position = document.getElementById("posicion");
function dibujarlinea(xini,yini,xfin,yfin);
const  teclas ={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
{   
    linea.beginPath();
    linea.stronkeStyle =color;
    linea.lineWidth=grosor3;
    linea.moveTo(xini,yini);
    linea.lineTo(xfin,yfin);
    linea.stroke();
    linea.closePath();
}