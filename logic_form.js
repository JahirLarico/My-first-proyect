var first_name = document.getElementById("first_name") ;
var last_name=document.getElementById("last_name") ;
var birth= document.getElementById("birth");
var sex=document.getElementById("sex") ;
var email= document.getElementById("email");
var button_send=document.getElementById("send");
var result=document.getElementById("result");
button_send.addEventListener("click",show_information);

function show_information(){
    var value_name=first_name.value;
    var value_last=last_name.value;
    var value_birth=birth.value;
    var value_sex=sex.value;
    var value_email=email.value;  
    result.innerHTML+= '<p id="result">'+'Tu(s) nombre(s) es: '+value_name+'</p>';
    result.innerHTML+= '<p id="result">'+'Tus apellidos son: '+value_last+'</p>';
    result.innerHTML+= '<p id="result">'+'Tu fecha de nacimiento es: '+value_birth+'</p>';
    result.innerHTML+= '<p id="result">'+'Tu sexo es: '+value_sex+'</p>';
    result.innerHTML+= '<p id="result">'+'Tu email es: '+value_email+'</p>';
}
