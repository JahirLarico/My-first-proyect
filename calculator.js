document.addEventListener("keydown",write);
var result=document.querySelector(".value");
const teclas={
    number_zero:96,
    number_one:97,
    number_two:98,
    number_three:99,
    number_four:100,
    number_five:101,
    number_six:102,
    number_seven:103,
    number_eight:104,
    number_nine:105,
    decimal_point:110,
    add:107,
    subtract:109,
    multiply:106,
    divide:111,
    total:13
}
function write(event){
    var codes=event.keyCode;
        if(codes==teclas.number_zero){
            result.innerHTML+="0";
        }
        else if(codes==teclas.number_one){
            result.innerHTML+="1";
        }
        else if(codes==teclas.number_two){
            result.innerHTML+="2";
        }
        else if(codes==teclas.number_three){
            result.innerHTML+="3";
        }
        else if(codes==teclas.number_four){
            result.innerHTML+="4";
        }
        else if(codes==teclas.number_five){
            result.innerHTML+="5";
        }
        else if(codes==teclas.number_six){
            result.innerHTML+="6";
        }
        else if(codes==teclas.number_seven){
            result.innerHTML+="7";
        }
        else if(codes==teclas.number_eight){
            result.innerHTML+="8";
        }
        else if(codes==teclas.number_nine){
            result.innerHTML+="9";
        }
        else if(codes==teclas.add){
            result.innerHTML+="+";
        }
        else if(codes==teclas.subtract){
            result.innerHTML+="-";
        }
        else if(codes==teclas.multiply){
            result.innerHTML+="*";
        }
        else if(codes==teclas.divide){
            result.innerHTML+="/";
        }
        else if(codes==teclas.decimal_point){
            result.innerHTML+=".";
        }   
        else if(codes==teclas.total){
            result.innerHTML+=document.cacl.txt.value=eval(cacl.txt.value);
        }   
}