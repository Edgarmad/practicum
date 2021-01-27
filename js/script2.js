let form = document.querySelector('#registro');
let continuar = document.querySelector('#continuar');
let contenedor = document.querySelector('#contenedor');
let cont = 0;

continuar.addEventListener('click', function() {
    console.log('working');
    form.remove();
    next();
    cont++;
})

function next() {
    contenedor.innerHTML = `<form action="#" class="contenedor registro-form height-100">
    <ol class="pasos">
        <li class="centrar-texto">1</li>
        <li class="centrar-texto focus">2</li>
        <li class="centrar-texto">3</li>
        <li class="centrar-texto">4</li>
        <li class="centrar-texto">5</li>
    </ol>
    <h4 class="izquierda">Formación Profesional</h4>
    <div class="izquierda">
        <label for="carrera">Estudio:</label>
        <input type="text" name="carrera" id="carrera">
        <label for="institucion">Institucion:</label>
        <input type="text" name="institucion" id="institucion">
        <label for="nivelProf">Nivel Profesional:</label>
        <select name="nivelProf" id="nivelProf">
            <option value="" disabled>--Ingresa tu nivel de estudios--</option>
            <option value="licenciatura">Licenciatura</option>
            <option value="maestria">Maestria</option>
            <option value="doctorado">Doctorado</option>
        </select>
        <div class="labels-2">
            <label for="">Inicio:</label>
            <label for="">Fin:</label>
        </div>
        <div class="registro-2 centrar">
            <input type="date" name="" id="">
            <input type="date" name="" id="">
        </div>
        <div class="derecha">
            <a href="#" class="btn">Agregar <i class="fas fa-plus"></i></a>
        </div>
        <div class="centrar-texto">
            <a href="dPersonales.html" class="btn-2">Volver a Datos Personales</a>
            <a href="experiencia.html" class="btn btn-azul c-blanco" id="continuar2">Continuar prueba</a>
            <!-- <button type="submit" class="btn btn-azul c-blanco">Continuar</button> -->
        </div>`;
    continuar = document.querySelector('continuar2');
    // form = document.querySelector('#registro');
    // document.querySelector('#contenedor');
}