var s = netlifyIdentity.currentUser.user
function login() {
    document.write(currentUser);
}

netlifyIdentity.on('login', user => login());




