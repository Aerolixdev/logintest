var s = document.getElementsByClassName('infoTextEmail');
function login() {
    setTimeout(() => {  alert(s.textContent)}, 1000);
}

netlifyIdentity.on('login', user => login());





