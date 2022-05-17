var s = document.getElementsByClassName('infoTextEmail');
function login() {
    setTimeout(() => {  alert(s)}, 1000);
}

netlifyIdentity.on('login', user => login());




