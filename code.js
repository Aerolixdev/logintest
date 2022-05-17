var s = document.getElementsByClassName('infoTextEmail');
function login() {
    alert(netlifyIdentity.currentUser.email)
}

netlifyIdentity.on('login', user => login());




