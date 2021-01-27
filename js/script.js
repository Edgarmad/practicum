const login = document.querySelector("#iniciarSesion");
if (login) {
    login.addEventListener('click', () => {
        console.log('working');
        window.open('login.html', 'popup', 'top=100, left=100, width=599, height=680, toolbar=NO, resizable=NO, Location=NO, Menubar=NO, Titlebar=No, Status=NO');
    })
}