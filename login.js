
let username=document.getElementById('username');
let password=document.getElementById('password');

function login(){
var name=username.value;
var pass=password.value;
    if((name.length >=6 )  && (pass.length >= 6 )){
        alert("login successful");
    }
    else{
        alert("login unsuccessful");
    }


}