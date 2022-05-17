var s = netlifyIdentity.currentUser.user
function login() {
    document.write(user.currentUser);
}

netlifyIdentity.on('login', user => login());




