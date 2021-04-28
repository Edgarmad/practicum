<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <!-- ICONO DE PESTAÑA -->
    <link rel="shortcut icon" href="https://www.miplana.mx/r_/inc/img/favicon.ico">
    <!--NORMALIZE-->
    <link rel="stylesheet" href="css/normalize.css">
    <!--ICONOS-->
    <link rel="stylesheet" href="fontawesome-free-5.15.1-web/css/all.min.css">
    <!--ESTILOS PERSONALIZADOS-->
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div class="c-azul header">
        <a href="registroEmpresa.php" class=""><i class="fas fa-arrow-left"></i></a>
        <h2 class="centrar-texto">Editar Perfil</h2>
        <a href="perfilEmpresa.php" class="btn btn-2 p-2">Confirmar</a>
    </div>
    <main class="contenedor">
        <div class="carta-xl">
            <img class="img-form" src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="foto_personal ">
            <div class="flex-contenedor">
                <div class="flex-mitad-especial f-16">
                    <form action=" # " class="contenedor registro-form height-100 " id="registro">
                        <fieldset>
                            <div class="derecha"><a class="btn" id="editDatosPersonalesEmpresa"><i class="fas fa-edit"></i></a></div>
                            <legend class="izquierda ">Datos Personales del Responsable</legend>
                            <div class="labels-2 ">
                                <label for="nombreResponsable">Nombre(s):</label>
                                <label for="apellidoResponsable">Apellidos:</label>
                            </div>
                            <div class="registro-2 centrar ">
                                <input disabled type="text " name="nombreResponsable " id="nombreResponsable">
                                <input disabled type="text " name="apellidoResponsable " id="apellidoResponsable">
                            </div>
                            <div class="izquierda ">
                                <label for="correoResponsable ">Email:</label>
                                <input disabled type="email " name="correoResponsable" id="correoResponsable">
                                <label for="telefonoResponsable">Telefono:</label>
                                <input disabled type="tel " name="telefonoResponsable " id="telefonoResponsable">
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="derecha"><a class="btn" id="editDatosEmpresa"><i class="fas fa-edit"></i></a></div>
                            <legend class="izquierda">Datos de la Empresa</legend>
                            <div class="izquierda">
                                <label for="nombreEmpresa">Nombre de la empresa:</label>
                                <input disabled type="text" name="nombreEmpresa" id="nombreEmpresa">
                                <label for="ciudadEmpresa">¿En qué ciudad esta ubicada?</label>
                                <input disabled type="text" name="ciudadEmpresa" id="ciudadEmpresa">
                                <label for="correoEmpresa ">Email:</label>
                                <input disabled type="email " name="correoEmpresa" id="correoEmpresa">
                                <label for="telefonoEmpresa">Telefono:</label>
                                <input disabled type="tel " name="telefonoEmpresa " id="telefonoEmpresa">
                                <label for="direccionEmpresa">Dirección:</label>
                                <textarea disabled name="direccionEmpresa" id="direccionEmpresa" cols="30 " rows="10 "></textarea>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <form action="#" class="flex-mitad-especial f-16">
                    <div class="contenedor registro-form height-100">
                        <fieldset>
                            <div class="derecha"><a class="btn" id="editarOtros"><i class="fas fa-edit"></i></a></div>
                            <legend class="izquierda">Otros Datos</legend>
                            <div class="izquierda">
                                <label for="descripcionEmpresa">Descripción de la Empresa::</label>
                                <textarea disabled name="descripcionEmpresa" id="descripcionEmpresa" cols="30 " rows="10 "></textarea>
                                <label for="deseoAlumnoEmpresa">Describe el perfil del alumno que buscas:</label>
                                <textarea disabled name="deseoAlumnoEmpresa" id="deseoAlumnoEmpresa" cols="30 " rows="10 "></textarea>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <div class="centrar-texto c-blanco m-2">
        <a href="#top">Volver Arriba <i class="fas fa-arrow-up"></i></a>
    </div>

    <script src="js/script2.js"></script>
</body>

</html>