var dibujo = document.getElementById("canvas");
var linea = dibujo.getContext("2d");
var position = document.querySelector(".posicion");
const  teclas ={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
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
    linea.lineWidth=2;
    linea.moveTo(xini,yini);
    linea.lineTo(xfin,yfin);
    linea.stroke();
    linea.closePath();
}
dibujarlinea("white",150,76,152,78);
