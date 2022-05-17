var s = netlifyIdentity.currentUser.user
function login() {
    document.write(s);
}

netlifyIdentity.on('login', user => login());

var s = netlifyIdentity.currentUser.user
