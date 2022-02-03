var dibujo = document.getElementById("dibujo");
var linea = dibujo.getContext("2d");
function dibujarlinea(color,xini,yini,xfin,yfin,grosor3=3)
{   
    var xmax=dibujo.width;
    var ymax=dibujo.height;
    var xmin=0;
    var ymin=0;
    linea.beginPath();
    linea.stronkeStyle =color;
    linea.lineWidth=grosor3;
    linea.moveTo(xini,yini);
    linea.lineTo(xfin,yfin);
    linea.stroke();
    linea.closePath();
}