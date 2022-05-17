var s = document.getElementsByClassName('infoTextEmail');
function login() {
    for(var i=0;i < s.length; i++){
        console.log(s[i].textContent);
     }
}

netlifyIdentity.on('login', user => login());




