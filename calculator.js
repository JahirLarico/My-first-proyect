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
        console.log(event.keyCode)
    }
}