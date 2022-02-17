var dibujo = document.getElementById("canvas");
var linea = dibujo.getContext("2d");
var n_lineas= document.querySelector(".lines");
var draw = document.getElementById("draw");
var position = document.querySelector(".posicion");
draw.addEventListener("click",run);

function run(){
    let numero=n_lineas.value;
    let posicion=position.value;
        while(numero>=1){
            let fin=numero*10;
            if(posicion=="left"){
                dibujarlinea("pink",0,251,fin,50);
                numero--
            }
            else if(posicion=="right"){
                dibujarlinea("pink",500,250,fin,20);
                numero--
            }
            else if(posicion=="top"){
                dibujarlinea("pink",250,0,fin,250);
                numero--
            }
            else if(posicion=="both"){
                dibujarlinea("pink",250,500,fin,250);
                numero--
            }
        }
}
function dibujarlinea(color,xini,yini,xfin,yfin)
{   
    linea.beginPath();
    linea.strokeStyle =color;
    linea.lineWidth=0.5;
    linea.moveTo(xini,yini);
    linea.lineTo(xfin,yfin);
    linea.stroke();
    linea.closePath();
}
