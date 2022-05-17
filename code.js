var s = netlifyIdentity.currentUser.user
function login() {
    alert(JSON.stringify(s))
}

netlifyIdentity.on('login', user => login());





