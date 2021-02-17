const login = document.querySelector("#iniciarSesion");
const burger = document.querySelector("#burger-menu");
const dash = document.querySelectorAll(".accion")
if (login) {
    login.addEventListener('click', () => {
        console.log('working');
        window.open('login.html', 'popup', 'top=100, left=100, width=599, height=680, toolbar=NO, resizable=NO, Location=NO, Menubar=NO, Titlebar=No, Status=NO');
    })
}
if (burger && dash) {
    // burger.onmouseenter = scream;
    burger.addEventListener('click', () => {
        dash.forEach(element => {
            if (element.className == 'accion') {
                element.className += ' responsive'
            } else {
                element.className = 'accion'
            }

        });
    })
}