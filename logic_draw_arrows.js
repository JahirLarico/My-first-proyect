var dibujo = document.getElementById("canvas");
var linea = dibujo.getContext("2d");
var position = document.querySelector(".posicion");
document.addEventListener("keydown",draw);
var x=151;
var y=76;
const  teclas ={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
function draw(event){
    if(event.keyCode==teclas.UP){
        dibujarlinea("white",x,y,x,y-10);
        y=y-10;
    }
    else if(event.keyCode==teclas.DOWN){
        dibujarlinea("white",x,y,x,y+10);
        y=y+10;
    }
    else if(event.keyCode==teclas.LEFT){
        dibujarlinea("white",x,y,x-10,y);
        x=x-10;
    }
    else if(event.keyCode==teclas.RIGHT){
        dibujarlinea("white",x,y,x+10,y);
        x=x+10;
    }

}
function dibujarlinea(color,xini,yini,xfin,yfin)
{   
    linea.beginPath();
    linea.strokeStyle =color;
    linea.lineWidth=2;
    linea.moveTo(xini,yini);
    linea.lineTo(xfin,yfin);
    linea.stroke();
    linea.closePath();
}
dibujarlinea("white",150,76,152,78);
