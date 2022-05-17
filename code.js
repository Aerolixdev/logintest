var s = document.getElementsByClassName('infoTextEmail');
function login() {
    alert(s.textContent)
}

netlifyIdentity.on('login', user => login());





