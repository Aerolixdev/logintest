var s = netlifyIdentity.currentUser.user
function login() {
    document.write(netlifyIdentity.currentUser.user())
}

netlifyIdentity.on('login', user => login());





