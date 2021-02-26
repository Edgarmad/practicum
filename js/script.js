/* LOGIN */
const pop = document.querySelector('#openPop');
const popup = document.querySelector('#pop');
const closePop = document.querySelector('#close')

/* RESPONSIVO */
const burger = document.querySelector("#burger-menu");
const dash = document.querySelectorAll(".accion");

/*VARIABLES DE REGISTRO*/
const continuarRegistro = document.querySelector("#continuarRegistro");
const regresar = document.querySelector('#regresar');
const datosPersonales = document.querySelector("#datosPersonales");
const formacion = document.querySelector('#formacion')
const objetivos = document.querySelector("#objetivos");
const competencias = document.querySelector('#competencias');
const experiencia = document.querySelector("#experiencia");

/* RESPONSIVO */
if (burger && dash) {
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

/* LOGIN */

if (pop && popup && closePop) {
    pop.addEventListener('click', () => {
        pop.classList.toggle('hide');
        popup.classList.toggle('show');
    })

    closePop.addEventListener('click', () => {
        pop.classList.toggle('hide');
        popup.classList.toggle('show');
    })
}

/*
Datos personales
Formacion
Experiencia
Competencias
Objetivos
*/
/* REGISTRO */
if (continuarRegistro && regresar) {
    let cont = 0;
    continuarRegistro.addEventListener('click', () => {
        switch (cont) {
            case 0:
                datosPersonales.classList.add('hide');
                formacion.classList.remove('hide');
                regresar.textContent = 'Volver a Datos Personales';
                cont++;
                console.log(cont);
                break;
            case 1:
                formacion.classList.add('hide');
                experiencia.classList.remove('hide');
                cont++;
                regresar.textContent = 'Volver a For. Profesional';
                console.log(cont);
                break;
            case 2:
                experiencia.classList.add('hide');
                competencias.classList.remove('hide');
                cont++;
                regresar.textContent = 'Volver a Exp. Profesional';
                console.log(cont);
                break;
            case 3:
                competencias.classList.add('hide');
                objetivos.classList.remove('hide');
                continuarRegistro.textContent = 'Completar';
                cont = 4;
                regresar.textContent = 'Volver a Habilidades';
                console.log(cont);
                break;
            case 4:
                continuarRegistro.setAttribute('href', 'resultado.html')
                break;
            default:
                break;
        }
    })
    regresar.addEventListener('click', () => {
        switch (cont) {
            case 0:
                cont = 0;
                regresar.setAttribute('href', 'index.html')
                continuarRegistro.textContent = 'Continuar';
                console.log(cont);
                break;
            case 1:
                formacion.classList.add('hide');
                datosPersonales.classList.remove('hide');
                regresar.textContent = 'Volver a página principal';
                continuarRegistro.textContent = 'Continuar';
                cont--;
                break;
            case 2:
                experiencia.classList.add('hide');
                formacion.classList.remove('hide');
                regresar.textContent = 'Volver a Datos Personales';
                continuarRegistro.textContent = 'Continuar';
                cont--;
                break;
            case 3:
                competencias.classList.add('hide');
                experiencia.classList.remove('hide');
                regresar.textContent = 'Volver a For. Profesional';
                continuarRegistro.textContent = 'Continuar';
                cont--;
                break;
            case 4:
                competencias.classList.remove('hide');
                objetivos.classList.add('hide');
                regresar.textContent = 'Volver a Exp. Profesional';
                continuarRegistro.textContent = 'Continuar';
                cont--;
                break;
            default:
                break;
        }
    })
}

// if (login) {
//     login.addEventListener('click', () => {
//         console.log('working');
//         window.open('login.html', 'popup', 'top=100, left=100, width=599, height=680, toolbar=NO, resizable=NO, Location=NO, Menubar=NO, Titlebar=No, Status=NO');
//     })
// } Esto lo abre en otra ventana