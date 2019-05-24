var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            templateUrl: 'pages/routing.html',
            controller: 'indexController'
        })
        .when('/form1', {
            templateUrl: 'pages/formulario.html',
            controller: 'formController'
        })
        .when('/inicio', {
            templateUrl: 'pages/inicio.html',
            controller: 'indexController'
        })
        .when('/Login', {
            templateUrl: 'pages/Login.html',
            controller: 'loginController'
        })
        .when('/formPaciente', {
            templateUrl: 'pages/formularioPaciente.html',
            controller: 'formPacienteController'
        })
        .when('/formRegistroPaciente', {
            templateUrl: 'pages/registroPaciente.html',
            controller: 'formPacienteController'
        })
        .otherwise({
            templateUrl: 'pages/routeNotFound.html',
            controller: 'notFoundController'
        });

});

app.controller('formPacienteController', function($scope,$http){
    $scope.registrarPaciente = function(){
        var data = {
            nombre: $scope.name,
            sangre: $scope.sangre,
            pulso: $scope.pulso,
            talla: $scope.talla,
            temperatura: $scope.temperatura,
            alergias: $scope.alergias,
            peso: $scope.peso,
            presion: $scope.presionAr,
            malestares: $scope.malestares
        };
        $http.post('addPac',data)
        .then(
            function(response){
                alert(response.data.message);
                location.reload();
            },
            function(response){
                $scope.error = true;
                $scope.mensajeError = response.data.message;
            }
        );
    };
});
app.controller('indexController', function ($scope) {
    //SESION
    $scope.usuario = sessionStorage.getItem('usuario');
    $scope.privilegio = sessionStorage.getItem('privilegio');
    sessionStorage.setItem('rol',"");
    $scope.rol = sessionStorage.getItem('rol');
    $scope.cerrarSesion = function(){
        sessionStorage.clear();
        window.location.href = "/";
    };

    $scope.variable = false;
    $scope.mostrar = function () {
        $scope.variable = true;
    };

    $scope.ocultar = function () {
        $scope.variable = false;
    };

    $scope.telcontacto = '+52 496 118 5457';
    $scope.subTitulo4 = 'Contactanos';
    $scope.textoSub4 = 'Disponibles todos los dias de Lunes a Viernes, mandanos o cuentanos que es lo que tienes y nosotros te ayudaremos.';
    $scope.subTitulo3 = 'Equipo de Trabajo';
    $scope.subTitulo2 = 'Consultorios en Aguascalientes ';
    $scope.textoSub2 = 'A lo largo de la república mexicana se cuenta con muchos hospitales y consultorios médicos  dispuestos a brindar apoyo en los tiempos libres de los respectivos doctores. Aguascalientes cuenta con los 4 lugares más frecuentados por los clientes.';
    $scope.subTitulo1 = 'Un espacio de salud para todos en Aguascalientes';
    $scope.textoSub1 = 'El objetivo consiste en crear una red de doctores, dispuestos a brindar apoyo en su tiempo libre dando consulta en línea, auxiliados de una enfermera que apoyará en el manejo del sistema y toma de signos vitales';
    $scope.beneficios = [{
        beneficio: 'Atención al instánte.',
    },
    {
        beneficio: 'Rápido y recomendable.',
    },
    {
        beneficio: 'El gobierno paga xD.',
    }
    ];

    $scope.servicios = [{
        fade: 'box wow fadeInLeft',
        delay: 'data-wow-delay="0s"',
        icono: 'fa fa-bar-chart',
        titulo: 'Médico ortopedista',
        descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio laborum cum, eius nihil sequi ratione atque suscipit necessitatibus ut esse minima deserunt id non dolore? Tempore amet dolorum adipisci consequatur!',
    },
    {
        fade: 'box wow fadeInRight',
        delay: 'data-wow-delay="0s"',
        icono: 'fa fa-picture-o',
        titulo: 'Médico internista',
        descripcion: 'Lorem ipsum dolor sit amet adipisicing elit. Voluptates nostrum rem eius omnis tempore quod dolorum delectus ipsa! Sit quibusdam quod saepe non ullam amet, eveniet provident consequatur neque corrupti.',
    },
    {
        fade: 'box wow fadeInLeft',
        delay: 'data-wow-delay="0.2s"',
        icono: 'fa fa-shopping-bag',
        titulo: 'Médico General',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat amet iste animi corrupti eaque quidem sed cum iusto, perferendis, assumenda laborum earum est dolore molestias facere inventore illo excepturi!',
    },
    {
        fade: 'box wow fadeInRight',
        delay: 'data-wow-delay="0.2s"',
        icono: 'fa fa-map',
        titulo: 'Enfermería',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit itaque nisi, veritatis quod laborum earum? Accusantium, nostrum aliquam voluptas consequatur vitae ipsa quibusdam dolor officia, architecto expedita eveniet hic.',
    },
    ];

    $scope.consultorios = [{
        imagen: 'img/portfolio/1.jpg',
        titulo: 'Star Médica',
    },
    {
        imagen: 'img/portfolio/2.jpg',
        titulo: 'Hídalgo',
    },
    {
        imagen: 'img/portfolio/3.jpg',
        titulo: 'MAC',
    },
    {
        imagen: 'img/portfolio/4.jpg',
        titulo: 'Unidad Médica UAA',
    },
    ];

    $scope.equipo = [{
        imagen: 'img/team-1.jpg',
        nombre: 'Juan Cornejo',
        area: 'Ing. Sistemas',
    },
    {
        imagen: 'img/team-2.jpg',
        nombre: 'Jazmin',
        area: 'Diseñadora',
    },
    {
        imagen: 'img/team-3.jpg',
        nombre: 'Samuel Leos',
        area: 'Barrendero',
    },
    {
        imagen: 'img/team-4.jpg',
        nombre: 'Monica',
        area: 'Enfermera',
    },
    ];
});
app.controller('formController', function ($scope,$http) {

    $scope.opciones = [
        { value: 0, name: 'Medico' },
        { value: 1, name: 'Enfermera' },
    ]
    $scope.selectOption = {};

    $scope.registroTrabajador = function(){
        if($scope.selectOption == 0)
        {
            var data ={
                nombre: $scope.nombre,
                apellidos: $scope.apellidos,
                usuario: $scope.usuario,
                rol: 0,
                especialidad: document.getElementById('especialidad').value,
                cedula: document.getElementById('cedula').value,
                correo: $scope.correo,
                contra: $scope.contrasena
            };
        }else{
            var data ={
                nombre: $scope.nombre,
                apellidos: $scope.apellidos,
                usuario: $scope.usuario,
                rol: 1,
                cedula: document.getElementById('cedula2').value,
                correo: $scope.correo,
                contra: $scope.contrasena
            };
        }
        $http.post('/addUser',data)
        .then(
            function(response){
                alert('Usuario creado correctamente');
                window.location.href = '/';
            },
            function(response){
                $scope.error = true;
                $scope.mensajeError = response.data.message;
            });
    };
});
app.controller('loginController', function ($scope,$http) {
    $scope.login = function() {
        var data = {
            user: $scope.usuario,
            contra: $scope.contra
        }

        $http.post('/loginUser',data)
        .then(
            function(response){
                if($scope.usuario == "root")
                    sessionStorage.setItem('privilegio',1);
                else if(response.data.privilegio == 2)    
                    sessionStorage.setItem('privilegio',2);
                else
                    sessionStorage.setItem('privilegio',0);
                sessionStorage.setItem('usuario',$scope.usuario);
                window.location.href = "/";
            },
            function(response){
                $scope.error = true;
                $scope.mensajeError = response.data.message;
            }
        );
    }
});


