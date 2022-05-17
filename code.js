var s = netlifyIdentity.currentUser.user
function login() {
    document.write(netlifyIdentity.user);
}

netlifyIdentity.on('login', user => login());





