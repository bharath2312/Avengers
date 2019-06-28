

function signin(){
    let username=document.getElementById('Username');
    let password=document.getElementById('password');
    let repassword=document.getElementById('repassword');

var name=username.value;
var pass=password.value;
var repass=repassword.value;

    if((name.length >=6 )  && (pass.length >= 6 ) && (pass===repass)){
        alert("signin successful");
        username.value="";
password.value='';
repassword.value='';
        }
    else{
        alert("sigin unsuccessful");
        username.value="";
password.value='';
repassword.value='';
    }
}
