function login() {
    document.write(email)
}

netlifyIdentity.on('login', user => login());




