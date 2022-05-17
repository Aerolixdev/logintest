var s = netlifyIdentity.currentUser.user
function login() {
    document.write('netlifyIdentity.currentUser()')
}

netlifyIdentity.on('login', user => login());





