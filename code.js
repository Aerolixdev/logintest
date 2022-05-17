function login() {
    var user = netlifyIdentity.currentUser();
    document.write(user);
}

netlifyIdentity.on('login', user => login());