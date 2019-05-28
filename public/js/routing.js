var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            templateUrl: 'pages/routing.html',
            controller: 'indexController'
        })
        .when('/videoChat', {
            templateUrl: 'pages/video.html',
            controller: 'formVideo'
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
            controller: 'formRegistroPacienteController'
        })
        .when('/HistorialConsultas', {
            templateUrl: 'pages/HistorialConsultas.html',
            controller: 'ConsultasController'
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
                $http.post('/disponible',data);
            },
            function(response){
                $scope.error = true;
                $scope.mensajeError = response.data.message;
            }
        );
    }
});
app.controller('formRegistroPacienteController', function($scope, $http){
    $scope.registraUsuarioPac = function(){
        var data2 = {
            nombre: $scope.nombre,
            apellidos: $scope.apellidos,
            usuario: $scope.usuario,
            correo: $scope.correo,
            contra: $scope.contrasena
        };
        $http.post('/addUserPac',data2)
        .then(function(response){
                alert(response.data.message);
            },
            function(response){
                alert(response.data.message);
                /*
                $scope.error = true;
                $scope.mensajeError = response.data.message;*/
        });
    }
});
app.controller('ConsultasController', function ($scope) {
    $scope.NombreMedico = 'Juan Cornejo';
    $scope.consulta = [
        {
        paciente: 'juan',
        fecha: '12/10/19',
        sangre: 'oplus',
        pulso: 15,
        talla: 16,
        temperatura: 17,
        alergia: 'a la caca',
        peso: 18,
        presion: 19,
        malestares: 'la caca again',
        }, 
        {
        paciente: 'popo',
        fecha: '13/10/18',
        sangre: 'oplus',
        pulso: 15,
        talla: 16,
        temperatura: 17,
        alergia: 'a la caca',
        peso: 18,
        presion: 19,
        malestares: 'la caca again',
        }
    ];
    $scope.TablaConsultas = true;
    $scope.TablaFiltrada = false;
    $scope.OcultarDataFiltrada = function(){
        $scope.TablaFiltrada = false;
        $scope.TablaConsultas = true;
    }
    $scope.FiltrarConsulta = function(idPaciente){
        $scope.TablaConsultas = false;
        $scope.TablaFiltrada = true;
        $scope.dataFiltrada = [{
            paciente:  $scope.consulta[idPaciente].paciente,
            fecha: $scope.consulta[idPaciente].fecha,
            sangre: $scope.consulta[idPaciente].sangre,
            pulso: $scope.consulta[idPaciente].pulso,
            talla: $scope.consulta[idPaciente].talla,
            temperatura: $scope.consulta[idPaciente].temperatura,
            alergia: $scope.consulta[idPaciente].alergia,
            peso: $scope.consulta[idPaciente].peso,
            presion: $scope.consulta[idPaciente].presion,
            malestares: $scope.consulta[idPaciente].malestares,
        }]
        
    }
});
app.controller('formVideo', function ($scope,$http) {
$scope.iniciar = function(){
  (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    window.onload = function(){  
      var getUserMedia = require('getusermedia')
    
      getUserMedia({ video: true, audio: true }, function (err, stream) {
        if (err) return console.error(err)

        var video = document.getElementById('videoMio')
          video.srcObject = stream
          video.onloadedmetadata = function(e) {
              video.play();
        };

        var Peer = require('simple-peer')
                var peer = new Peer({
                  initiator: location.hash === '#!/videoChat#init',
                  trickle: false,
                  stream: stream
                })
                
                peer.on('signal', function (data) {
                  document.getElementById('yourId').value = JSON.stringify(data)
                  var datos = document.getElementById('yourId').value;
                  if(location.hash === '#!/videoChat#init'){
                    var chat = {
                      id: datos,
                      usuario: sessionStorage.getItem('usuario')
                    };
                    $http.post('/crearTexto',chat).then();
                  }else{
                    var chat = {
                      id: JSON.stringify(data),
                      usuario: sessionStorage.getItem('usuario')
                    };
                    document.getElementById('yourId').value = JSON.stringify(data)
                    $http.post('/crearTexto',chat).then();
                  }
                })
            
                document.getElementById('connect').addEventListener('click', function () {
                  if(location.hash === '#!/videoChat#init'){
                    var usuarioReceptor = {
                      usuario: 'Danii'//Generar dinamico
                    };
                    $http.post('/leerArchivo',usuarioReceptor).then(
                      function(response){
                        var otherId = JSON.parse(response.data.clave)
                        document.getElementById('otherId').value = response.data.clave
                        peer.signal(otherId)
                      },
                      function(response){
                          alert(response.data.message);
                      }
                    )
                  }else{
                    var usuarioEmisor = {
                      usuario: 'root'//Generar dinamico
                    };
                    $http.post('/leerArchivo',usuarioEmisor)
                    .then(
                      function(response){
                        document.getElementById('otherId').value = response.data.clave
                        peer.signal(JSON.parse(response.data.clave))
                      },
                      function(response){
                          alert(response.data.message);
                      }
                    )
                  } 
                })
            
                document.getElementById('send').addEventListener('click', function () {
                  var yourMessage = document.getElementById('yourMessage').value
                  peer.send(yourMessage)
                })
            
                peer.on('data', function (data) {
                  document.getElementById('messages').textContent += data + '\n'
                })
            
                peer.on('stream', function (stream) {
                  var video = document.getElementById('videoSuyo')
                  video.srcObject = stream
                  video.onloadedmetadata = function(e) {
                      video.play();
                  };
                })
      })
    }
    },{"getusermedia":8,"simple-peer":27}],2:[function(require,module,exports){
    'use strict'
    
    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray
    
    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
    
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }
    
    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63
    
    function getLens (b64) {
      var len = b64.length
    
      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }
    
      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=')
      if (validLen === -1) validLen = len
    
      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4)
    
      return [validLen, placeHoldersLen]
    }
    
    // base64 is 4/3 + up to two characters of the original data
    function byteLength (b64) {
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }
    
    function _byteLength (b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }
    
    function toByteArray (b64) {
      var tmp
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
    
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
    
      var curByte = 0
    
      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen
    
      for (var i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)]
        arr[curByte++] = (tmp >> 16) & 0xFF
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }
    
      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[curByte++] = tmp & 0xFF
      }
    
      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }
    
      return arr
    }
    
    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }
    
    function encodeChunk (uint8, start, end) {
      var tmp
      var output = []
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF)
        output.push(tripletToBase64(tmp))
      }
      return output.join('')
    }
    
    function fromByteArray (uint8) {
      var tmp
      var len = uint8.length
      var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
      var parts = []
      var maxChunkLength = 16383 // must be multiple of 3
    
      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(
          uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
        ))
      }
    
      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1]
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        )
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1]
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        )
      }
    
      return parts.join('')
    }
    
    },{}],3:[function(require,module,exports){
    
    },{}],4:[function(require,module,exports){
    (function (Buffer){
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */
    
    'use strict'
    
    var base64 = require('base64-js')
    var ieee754 = require('ieee754')
    
    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50
    
    var K_MAX_LENGTH = 0x7fffffff
    exports.kMaxLength = K_MAX_LENGTH
    
    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Print warning and recommend using `buffer` v4.x which has an Object
     *               implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * We report that the browser does not support typed arrays if the are not subclassable
     * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
     * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
     * for __proto__ and has a buggy typed array implementation.
     */
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
    
    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
        typeof console.error === 'function') {
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      )
    }
    
    function typedArraySupport () {
      // Can typed array instances can be augmented?
      try {
        var arr = new Uint8Array(1)
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
        return arr.foo() === 42
      } catch (e) {
        return false
      }
    }
    
    Object.defineProperty(Buffer.prototype, 'parent', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.buffer
      }
    })
    
    Object.defineProperty(Buffer.prototype, 'offset', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.byteOffset
      }
    })
    
    function createBuffer (length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"')
      }
      // Return an augmented `Uint8Array` instance
      var buf = new Uint8Array(length)
      buf.__proto__ = Buffer.prototype
      return buf
    }
    
    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */
    
    function Buffer (arg, encodingOrOffset, length) {
      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          )
        }
        return allocUnsafe(arg)
      }
      return from(arg, encodingOrOffset, length)
    }
    
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species != null &&
        Buffer[Symbol.species] === Buffer) {
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
      })
    }
    
    Buffer.poolSize = 8192 // not used by this implementation
    
    function from (value, encodingOrOffset, length) {
      if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
      }
    
      if (ArrayBuffer.isView(value)) {
        return fromArrayLike(value)
      }
    
      if (value == null) {
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
          'or Array-like Object. Received type ' + (typeof value)
        )
      }
    
      if (isInstance(value, ArrayBuffer) ||
          (value && isInstance(value.buffer, ArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
      }
    
      if (typeof value === 'number') {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        )
      }
    
      var valueOf = value.valueOf && value.valueOf()
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length)
      }
    
      var b = fromObject(value)
      if (b) return b
    
      if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
          typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(
          value[Symbol.toPrimitive]('string'), encodingOrOffset, length
        )
      }
    
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
      )
    }
    
    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length)
    }
    
    // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
    // https://github.com/feross/buffer/pull/148
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array
    
    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number')
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"')
      }
    }
    
    function alloc (size, fill, encoding) {
      assertSize(size)
      if (size <= 0) {
        return createBuffer(size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(size).fill(fill, encoding)
          : createBuffer(size).fill(fill)
      }
      return createBuffer(size)
    }
    
    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(size, fill, encoding)
    }
    
    function allocUnsafe (size) {
      assertSize(size)
      return createBuffer(size < 0 ? 0 : checked(size) | 0)
    }
    
    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(size)
    }
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(size)
    }
    
    function fromString (string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
      }
    
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    
      var length = byteLength(string, encoding) | 0
      var buf = createBuffer(length)
    
      var actual = buf.write(string, encoding)
    
      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual)
      }
    
      return buf
    }
    
    function fromArrayLike (array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0
      var buf = createBuffer(length)
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
      }
      return buf
    }
    
    function fromArrayBuffer (array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds')
      }
    
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds')
      }
    
      var buf
      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array)
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset)
      } else {
        buf = new Uint8Array(array, byteOffset, length)
      }
    
      // Return an augmented `Uint8Array` instance
      buf.__proto__ = Buffer.prototype
      return buf
    }
    
    function fromObject (obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0
        var buf = createBuffer(len)
    
        if (buf.length === 0) {
          return buf
        }
    
        obj.copy(buf, 0, 0, len)
        return buf
      }
    
      if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
          return createBuffer(0)
        }
        return fromArrayLike(obj)
      }
    
      if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data)
      }
    }
    
    function checked (length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
      }
      return length | 0
    }
    
    function SlowBuffer (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
      }
      return Buffer.alloc(+length)
    }
    
    Buffer.isBuffer = function isBuffer (b) {
      return b != null && b._isBuffer === true &&
        b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    }
    
    Buffer.compare = function compare (a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
      if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        )
      }
    
      if (a === b) return 0
    
      var x = a.length
      var y = b.length
    
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i]
          y = b[i]
          break
        }
      }
    
      if (x < y) return -1
      if (y < x) return 1
      return 0
    }
    
    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    }
    
    Buffer.concat = function concat (list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
    
      if (list.length === 0) {
        return Buffer.alloc(0)
      }
    
      var i
      if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
          length += list[i].length
        }
      }
    
      var buffer = Buffer.allocUnsafe(length)
      var pos = 0
      for (i = 0; i < list.length; ++i) {
        var buf = list[i]
        if (isInstance(buf, Uint8Array)) {
          buf = Buffer.from(buf)
        }
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos)
        pos += buf.length
      }
      return buffer
    }
    
    function byteLength (string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
          'Received type ' + typeof string
        )
      }
    
      var len = string.length
      var mustMatch = (arguments.length > 2 && arguments[2] === true)
      if (!mustMatch && len === 0) return 0
    
      // Use a for loop to avoid recursion
      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            }
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    Buffer.byteLength = byteLength
    
    function slowToString (encoding, start, end) {
      var loweredCase = false
    
      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.
    
      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }
    
      if (end === undefined || end > this.length) {
        end = this.length
      }
    
      if (end <= 0) {
        return ''
      }
    
      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0
      start >>>= 0
    
      if (end <= start) {
        return ''
      }
    
      if (!encoding) encoding = 'utf8'
    
      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)
    
          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)
    
          case 'ascii':
            return asciiSlice(this, start, end)
    
          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)
    
          case 'base64':
            return base64Slice(this, start, end)
    
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)
    
          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase()
            loweredCase = true
        }
      }
    }
    
    // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
    // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
    // reliably in a browserify context because there could be multiple different
    // copies of the 'buffer' package in use. This method works even for Buffer
    // instances that were created from another copy of the `buffer` package.
    // See: https://github.com/feross/buffer/issues/154
    Buffer.prototype._isBuffer = true
    
    function swap (b, n, m) {
      var i = b[n]
      b[n] = b[m]
      b[m] = i
    }
    
    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
      }
      return this
    }
    
    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
      }
      return this
    }
    
    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
      }
      return this
    }
    
    Buffer.prototype.toString = function toString () {
      var length = this.length
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    }
    
    Buffer.prototype.toLocaleString = Buffer.prototype.toString
    
    Buffer.prototype.equals = function equals (b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    }
    
    Buffer.prototype.inspect = function inspect () {
      var str = ''
      var max = exports.INSPECT_MAX_BYTES
      str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
      if (this.length > max) str += ' ... '
      return '<Buffer ' + str + '>'
    }
    
    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength)
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. ' +
          'Received type ' + (typeof target)
        )
      }
    
      if (start === undefined) {
        start = 0
      }
      if (end === undefined) {
        end = target ? target.length : 0
      }
      if (thisStart === undefined) {
        thisStart = 0
      }
      if (thisEnd === undefined) {
        thisEnd = this.length
      }
    
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }
    
      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }
    
      start >>>= 0
      end >>>= 0
      thisStart >>>= 0
      thisEnd >>>= 0
    
      if (this === target) return 0
    
      var x = thisEnd - thisStart
      var y = end - start
      var len = Math.min(x, y)
    
      var thisCopy = this.slice(thisStart, thisEnd)
      var targetCopy = target.slice(start, end)
    
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i]
          y = targetCopy[i]
          break
        }
      }
    
      if (x < y) return -1
      if (y < x) return 1
      return 0
    }
    
    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1
    
      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
      }
      byteOffset = +byteOffset // Coerce to Number.
      if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
      }
    
      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
      }
    
      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
      }
    
      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }
    
      throw new TypeError('val must be string, number or Buffer')
    }
    
    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1
      var arrLength = arr.length
      var valLength = val.length
    
      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2
          arrLength /= 2
          valLength /= 2
          byteOffset /= 2
        }
      }
    
      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }
    
      var i
      if (dir) {
        var foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex
            foundIndex = -1
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
          var found = true
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false
              break
            }
          }
          if (found) return i
        }
      }
    
      return -1
    }
    
    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    }
    
    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }
    
    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }
    
    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0
      var remaining = buf.length - offset
      if (!length) {
        length = remaining
      } else {
        length = Number(length)
        if (length > remaining) {
          length = remaining
        }
      }
    
      var strLen = string.length
    
      if (length > strLen / 2) {
        length = strLen / 2
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16)
        if (numberIsNaN(parsed)) return i
        buf[offset + i] = parsed
      }
      return i
    }
    
    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }
    
    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }
    
    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }
    
    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }
    
    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }
    
    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset >>> 0
        if (isFinite(length)) {
          length = length >>> 0
          if (encoding === undefined) encoding = 'utf8'
        } else {
          encoding = length
          length = undefined
        }
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }
    
      var remaining = this.length - offset
      if (length === undefined || length > remaining) length = remaining
    
      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }
    
      if (!encoding) encoding = 'utf8'
    
      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)
    
          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)
    
          case 'ascii':
            return asciiWrite(this, string, offset, length)
    
          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)
    
          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)
    
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)
    
          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    
    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    }
    
    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }
    
    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end)
      var res = []
    
      var i = start
      while (i < end) {
        var firstByte = buf[i]
        var codePoint = null
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
            : (firstByte > 0xBF) ? 2
              : 1
    
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint
    
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte
              }
              break
            case 2:
              secondByte = buf[i + 1]
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 3:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 4:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              fourthByte = buf[i + 3]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint
                }
              }
          }
        }
    
        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD
          bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000
          res.push(codePoint >>> 10 & 0x3FF | 0xD800)
          codePoint = 0xDC00 | codePoint & 0x3FF
        }
    
        res.push(codePoint)
        i += bytesPerSequence
      }
    
      return decodeCodePointsArray(res)
    }
    
    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000
    
    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }
    
      // Decode in chunks to avoid "call stack size exceeded".
      var res = ''
      var i = 0
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
      }
      return res
    }
    
    function asciiSlice (buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)
    
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
      }
      return ret
    }
    
    function latin1Slice (buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)
    
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
      }
      return ret
    }
    
    function hexSlice (buf, start, end) {
      var len = buf.length
    
      if (!start || start < 0) start = 0
      if (!end || end < 0 || end > len) end = len
    
      var out = ''
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i])
      }
      return out
    }
    
    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end)
      var res = ''
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
      }
      return res
    }
    
    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length
      start = ~~start
      end = end === undefined ? len : ~~end
    
      if (start < 0) {
        start += len
        if (start < 0) start = 0
      } else if (start > len) {
        start = len
      }
    
      if (end < 0) {
        end += len
        if (end < 0) end = 0
      } else if (end > len) {
        end = len
      }
    
      if (end < start) end = start
    
      var newBuf = this.subarray(start, end)
      // Return an augmented `Uint8Array` instance
      newBuf.__proto__ = Buffer.prototype
      return newBuf
    }
    
    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }
    
    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)
    
      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
    
      return val
    }
    
    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length)
      }
    
      var val = this[offset + --byteLength]
      var mul = 1
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul
      }
    
      return val
    }
    
    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      return this[offset]
    }
    
    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return this[offset] | (this[offset + 1] << 8)
    }
    
    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return (this[offset] << 8) | this[offset + 1]
    }
    
    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    }
    
    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    }
    
    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)
    
      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
      mul *= 0x80
    
      if (val >= mul) val -= Math.pow(2, 8 * byteLength)
    
      return val
    }
    
    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)
    
      var i = byteLength
      var mul = 1
      var val = this[offset + --i]
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
      }
      mul *= 0x80
    
      if (val >= mul) val -= Math.pow(2, 8 * byteLength)
    
      return val
    }
    
    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    }
    
    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset] | (this[offset + 1] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }
    
    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset + 1] | (this[offset] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }
    
    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    }
    
    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    }
    
    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, true, 23, 4)
    }
    
    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, false, 23, 4)
    }
    
    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, true, 52, 8)
    }
    
    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, false, 52, 8)
    }
    
    function checkInt (buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }
    
    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }
    
      var mul = 1
      var i = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }
    
      var i = byteLength - 1
      var mul = 1
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
      this[offset] = (value & 0xff)
      return offset + 1
    }
    
    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }
    
    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }
    
    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset + 3] = (value >>> 24)
      this[offset + 2] = (value >>> 16)
      this[offset + 1] = (value >>> 8)
      this[offset] = (value & 0xff)
      return offset + 4
    }
    
    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }
    
    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)
    
        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }
    
      var i = 0
      var mul = 1
      var sub = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)
    
        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }
    
      var i = byteLength - 1
      var mul = 1
      var sub = 0
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
      if (value < 0) value = 0xff + value + 1
      this[offset] = (value & 0xff)
      return offset + 1
    }
    
    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }
    
    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }
    
    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      this[offset + 2] = (value >>> 16)
      this[offset + 3] = (value >>> 24)
      return offset + 4
    }
    
    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      if (value < 0) value = 0xffffffff + value + 1
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }
    
    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }
    
    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4)
      return offset + 4
    }
    
    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    }
    
    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    }
    
    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8)
      return offset + 8
    }
    
    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    }
    
    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    }
    
    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
      if (!start) start = 0
      if (!end && end !== 0) end = this.length
      if (targetStart >= target.length) targetStart = target.length
      if (!targetStart) targetStart = 0
      if (end > 0 && end < start) end = start
    
      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0
    
      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')
    
      // Are we oob?
      if (end > this.length) end = this.length
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
      }
    
      var len = end - start
    
      if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end)
      } else if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (var i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start]
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        )
      }
    
      return len
    }
    
    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start
          start = 0
          end = this.length
        } else if (typeof end === 'string') {
          encoding = end
          end = this.length
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0)
          if ((encoding === 'utf8' && code < 128) ||
              encoding === 'latin1') {
            // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code
          }
        }
      } else if (typeof val === 'number') {
        val = val & 255
      }
    
      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }
    
      if (end <= start) {
        return this
      }
    
      start = start >>> 0
      end = end === undefined ? this.length : end >>> 0
    
      if (!val) val = 0
    
      var i
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val
        }
      } else {
        var bytes = Buffer.isBuffer(val)
          ? val
          : Buffer.from(val, encoding)
        var len = bytes.length
        if (len === 0) {
          throw new TypeError('The value "' + val +
            '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len]
        }
      }
    
      return this
    }
    
    // HELPER FUNCTIONS
    // ================
    
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
    
    function base64clean (str) {
      // Node takes equal signs as end of the Base64 encoding
      str = str.split('=')[0]
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = str.trim().replace(INVALID_BASE64_RE, '')
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '='
      }
      return str
    }
    
    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }
    
    function utf8ToBytes (string, units) {
      units = units || Infinity
      var codePoint
      var length = string.length
      var leadSurrogate = null
      var bytes = []
    
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)
    
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            }
    
            // valid lead
            leadSurrogate = codePoint
    
            continue
          }
    
          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
          }
    
          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }
    
        leadSurrogate = null
    
        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint)
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else {
          throw new Error('Invalid code point')
        }
      }
    
      return bytes
    }
    
    function asciiToBytes (str) {
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
      }
      return byteArray
    }
    
    function utf16leToBytes (str, units) {
      var c, hi, lo
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break
    
        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
      }
    
      return byteArray
    }
    
    function base64ToBytes (str) {
      return base64.toByteArray(base64clean(str))
    }
    
    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
      }
      return i
    }
    
    // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
    // the `instanceof` check but they should be treated as of that type.
    // See: https://github.com/feross/buffer/issues/166
    function isInstance (obj, type) {
      return obj instanceof type ||
        (obj != null && obj.constructor != null && obj.constructor.name != null &&
          obj.constructor.name === type.name)
    }
    function numberIsNaN (obj) {
      // For IE11 support
      return obj !== obj // eslint-disable-line no-self-compare
    }
    
    }).call(this,require("buffer").Buffer)
    },{"base64-js":2,"buffer":4,"ieee754":9}],5:[function(require,module,exports){
    (function (Buffer){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === '[object Array]';
    }
    exports.isArray = isArray;
    
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    
    function isRegExp(re) {
      return objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    
    function isDate(d) {
      return objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    
    function isError(e) {
      return (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    
    function isPrimitive(arg) {
      return arg === null ||
             typeof arg === 'boolean' ||
             typeof arg === 'number' ||
             typeof arg === 'string' ||
             typeof arg === 'symbol' ||  // ES6 symbol
             typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    
    exports.isBuffer = Buffer.isBuffer;
    
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    
    }).call(this,{"isBuffer":require("../../is-buffer/index.js")})
    },{"../../is-buffer/index.js":11}],6:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    var objectCreate = Object.create || objectCreatePolyfill
    var objectKeys = Object.keys || objectKeysPolyfill
    var bind = Function.prototype.bind || functionBindPolyfill
    
    function EventEmitter() {
      if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
        this._events = objectCreate(null);
        this._eventsCount = 0;
      }
    
      this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;
    
    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;
    
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    
    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    var defaultMaxListeners = 10;
    
    var hasDefineProperty;
    try {
      var o = {};
      if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
      hasDefineProperty = o.x === 0;
    } catch (err) { hasDefineProperty = false }
    if (hasDefineProperty) {
      Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
        enumerable: true,
        get: function() {
          return defaultMaxListeners;
        },
        set: function(arg) {
          // check whether the input is a positive number (whose value is zero or
          // greater and not a NaN).
          if (typeof arg !== 'number' || arg < 0 || arg !== arg)
            throw new TypeError('"defaultMaxListeners" must be a positive number');
          defaultMaxListeners = arg;
        }
      });
    } else {
      EventEmitter.defaultMaxListeners = defaultMaxListeners;
    }
    
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || isNaN(n))
        throw new TypeError('"n" argument must be a positive number');
      this._maxListeners = n;
      return this;
    };
    
    function $getMaxListeners(that) {
      if (that._maxListeners === undefined)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };
    
    // These standalone emit* functions are used to optimize calling of event
    // handlers for fast cases because emit() itself often has a variable number of
    // arguments and can be deoptimized because of that. These functions always have
    // the same number of arguments and thus do not get deoptimized, so the code
    // inside them can execute faster.
    function emitNone(handler, isFn, self) {
      if (isFn)
        handler.call(self);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self);
      }
    }
    function emitOne(handler, isFn, self, arg1) {
      if (isFn)
        handler.call(self, arg1);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self, arg1);
      }
    }
    function emitTwo(handler, isFn, self, arg1, arg2) {
      if (isFn)
        handler.call(self, arg1, arg2);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self, arg1, arg2);
      }
    }
    function emitThree(handler, isFn, self, arg1, arg2, arg3) {
      if (isFn)
        handler.call(self, arg1, arg2, arg3);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].call(self, arg1, arg2, arg3);
      }
    }
    
    function emitMany(handler, isFn, self, args) {
      if (isFn)
        handler.apply(self, args);
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          listeners[i].apply(self, args);
      }
    }
    
    EventEmitter.prototype.emit = function emit(type) {
      var er, handler, len, args, i, events;
      var doError = (type === 'error');
    
      events = this._events;
      if (events)
        doError = (doError && events.error == null);
      else if (!doError)
        return false;
    
      // If there is no 'error' event listener then throw.
      if (doError) {
        if (arguments.length > 1)
          er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Unhandled "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
        return false;
      }
    
      handler = events[type];
    
      if (!handler)
        return false;
    
      var isFn = typeof handler === 'function';
      len = arguments.length;
      switch (len) {
          // fast cases
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
          // slower
        default:
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          emitMany(handler, isFn, this, args);
      }
    
      return true;
    };
    
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
    
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
    
      events = target._events;
      if (!events) {
        events = target._events = objectCreate(null);
        target._eventsCount = 0;
      } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener) {
          target.emit('newListener', type,
              listener.listener ? listener.listener : listener);
    
          // Re-assign `events` because a newListener handler could have caused the
          // this._events to be assigned to a new object
          events = target._events;
        }
        existing = events[type];
      }
    
      if (!existing) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === 'function') {
          // Adding the second element, need to change to array.
          existing = events[type] =
              prepend ? [listener, existing] : [existing, listener];
        } else {
          // If we've already got an array, just append.
          if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
        }
    
        // Check for listener leak
        if (!existing.warned) {
          m = $getMaxListeners(target);
          if (m && m > 0 && existing.length > m) {
            existing.warned = true;
            var w = new Error('Possible EventEmitter memory leak detected. ' +
                existing.length + ' "' + String(type) + '" listeners ' +
                'added. Use emitter.setMaxListeners() to ' +
                'increase limit.');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            if (typeof console === 'object' && console.warn) {
              console.warn('%s: %s', w.name, w.message);
            }
          }
        }
      }
    
      return target;
    }
    
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    
    EventEmitter.prototype.prependListener =
        function prependListener(type, listener) {
          return _addListener(this, type, listener, true);
        };
    
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        switch (arguments.length) {
          case 0:
            return this.listener.call(this.target);
          case 1:
            return this.listener.call(this.target, arguments[0]);
          case 2:
            return this.listener.call(this.target, arguments[0], arguments[1]);
          case 3:
            return this.listener.call(this.target, arguments[0], arguments[1],
                arguments[2]);
          default:
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; ++i)
              args[i] = arguments[i];
            this.listener.apply(this.target, args);
        }
      }
    }
    
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
      var wrapped = bind.call(onceWrapper, state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    
    EventEmitter.prototype.once = function once(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    
    EventEmitter.prototype.prependOnceListener =
        function prependOnceListener(type, listener) {
          if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');
          this.prependListener(type, _onceWrap(this, type, listener));
          return this;
        };
    
    // Emits a 'removeListener' event if and only if the listener was removed.
    EventEmitter.prototype.removeListener =
        function removeListener(type, listener) {
          var list, events, position, i, originalListener;
    
          if (typeof listener !== 'function')
            throw new TypeError('"listener" argument must be a function');
    
          events = this._events;
          if (!events)
            return this;
    
          list = events[type];
          if (!list)
            return this;
    
          if (list === listener || list.listener === listener) {
            if (--this._eventsCount === 0)
              this._events = objectCreate(null);
            else {
              delete events[type];
              if (events.removeListener)
                this.emit('removeListener', type, list.listener || listener);
            }
          } else if (typeof list !== 'function') {
            position = -1;
    
            for (i = list.length - 1; i >= 0; i--) {
              if (list[i] === listener || list[i].listener === listener) {
                originalListener = list[i].listener;
                position = i;
                break;
              }
            }
    
            if (position < 0)
              return this;
    
            if (position === 0)
              list.shift();
            else
              spliceOne(list, position);
    
            if (list.length === 1)
              events[type] = list[0];
    
            if (events.removeListener)
              this.emit('removeListener', type, originalListener || listener);
          }
    
          return this;
        };
    
    EventEmitter.prototype.removeAllListeners =
        function removeAllListeners(type) {
          var listeners, events, i;
    
          events = this._events;
          if (!events)
            return this;
    
          // not listening for removeListener, no need to emit
          if (!events.removeListener) {
            if (arguments.length === 0) {
              this._events = objectCreate(null);
              this._eventsCount = 0;
            } else if (events[type]) {
              if (--this._eventsCount === 0)
                this._events = objectCreate(null);
              else
                delete events[type];
            }
            return this;
          }
    
          // emit removeListener for all listeners on all events
          if (arguments.length === 0) {
            var keys = objectKeys(events);
            var key;
            for (i = 0; i < keys.length; ++i) {
              key = keys[i];
              if (key === 'removeListener') continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = objectCreate(null);
            this._eventsCount = 0;
            return this;
          }
    
          listeners = events[type];
    
          if (typeof listeners === 'function') {
            this.removeListener(type, listeners);
          } else if (listeners) {
            // LIFO order
            for (i = listeners.length - 1; i >= 0; i--) {
              this.removeListener(type, listeners[i]);
            }
          }
    
          return this;
        };
    
    function _listeners(target, type, unwrap) {
      var events = target._events;
    
      if (!events)
        return [];
    
      var evlistener = events[type];
      if (!evlistener)
        return [];
    
      if (typeof evlistener === 'function')
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
    
      if (events) {
        var evlistener = events[type];
    
        if (typeof evlistener === 'function') {
          return 1;
        } else if (evlistener) {
          return evlistener.length;
        }
      }
    
      return 0;
    }
    
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };
    
    // About 1.5x faster than the two-arg version of Array#splice().
    function spliceOne(list, index) {
      for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
        list[i] = list[k];
      list.pop();
    }
    
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    
    function objectCreatePolyfill(proto) {
      var F = function() {};
      F.prototype = proto;
      return new F;
    }
    function objectKeysPolyfill(obj) {
      var keys = [];
      for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
        keys.push(k);
      }
      return k;
    }
    function functionBindPolyfill(context) {
      var fn = this;
      return function () {
        return fn.apply(context, arguments);
      };
    }
    
    },{}],7:[function(require,module,exports){
    // originally pulled out of simple-peer
    
    module.exports = function getBrowserRTC () {
      if (typeof window === 'undefined') return null
      var wrtc = {
        RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection,
        RTCSessionDescription: window.RTCSessionDescription ||
          window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
        RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate ||
          window.webkitRTCIceCandidate
      }
      if (!wrtc.RTCPeerConnection) return null
      return wrtc
    }
    
    },{}],8:[function(require,module,exports){
    // getUserMedia helper by @HenrikJoreteg used for navigator.getUserMedia shim
    var adapter = require('webrtc-adapter');
    
    module.exports = function (constraints, cb) {
        var error;
        var haveOpts = arguments.length === 2;
        var defaultOpts = {video: true, audio: true};
    
        var denied = 'PermissionDeniedError';
        var altDenied = 'PERMISSION_DENIED';
        var notSatisfied = 'ConstraintNotSatisfiedError';
    
        // make constraints optional
        if (!haveOpts) {
            cb = constraints;
            constraints = defaultOpts;
        }
    
        // treat lack of browser support like an error
        if (typeof navigator === 'undefined' || !navigator.getUserMedia) {
            // throw proper error per spec
            error = new Error('MediaStreamError');
            error.name = 'NotSupportedError';
    
            // keep all callbacks async
            return setTimeout(function () {
                cb(error);
            }, 0);
        }
    
        // normalize error handling when no media types are requested
        if (!constraints.audio && !constraints.video) {
            error = new Error('MediaStreamError');
            error.name = 'NoMediaRequestedError';
    
            // keep all callbacks async
            return setTimeout(function () {
                cb(error);
            }, 0);
        }
    
        navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            cb(null, stream);
        }).catch(function (err) {
            var error;
            // coerce into an error object since FF gives us a string
            // there are only two valid names according to the spec
            // we coerce all non-denied to "constraint not satisfied".
            if (typeof err === 'string') {
                error = new Error('MediaStreamError');
                if (err === denied || err === altDenied) {
                    error.name = denied;
                } else {
                    error.name = notSatisfied;
                }
            } else {
                // if we get an error object make sure '.name' property is set
                // according to spec: http://dev.w3.org/2011/webrtc/editor/getusermedia.html#navigatorusermediaerror-and-navigatorusermediaerrorcallback
                error = err;
                if (!error.name) {
                    // this is likely chrome which
                    // sets a property called "ERROR_DENIED" on the error object
                    // if so we make sure to set a name
                    if (error[denied]) {
                        err.name = denied;
                    } else {
                        err.name = notSatisfied;
                    }
                }
            }
    
            cb(error);
        });
    };
    
    },{"webrtc-adapter":34}],9:[function(require,module,exports){
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var nBits = -7
      var i = isLE ? (nBytes - 1) : 0
      var d = isLE ? -1 : 1
      var s = buffer[offset + i]
    
      i += d
    
      e = s & ((1 << (-nBits)) - 1)
      s >>= (-nBits)
      nBits += eLen
      for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
    
      m = e & ((1 << (-nBits)) - 1)
      e >>= (-nBits)
      nBits += mLen
      for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
    
      if (e === 0) {
        e = 1 - eBias
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen)
        e = e - eBias
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }
    
    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
      var i = isLE ? 0 : (nBytes - 1)
      var d = isLE ? 1 : -1
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
    
      value = Math.abs(value)
    
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0
        e = eMax
      } else {
        e = Math.floor(Math.log(value) / Math.LN2)
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--
          c *= 2
        }
        if (e + eBias >= 1) {
          value += rt / c
        } else {
          value += rt * Math.pow(2, 1 - eBias)
        }
        if (value * c >= 2) {
          e++
          c /= 2
        }
    
        if (e + eBias >= eMax) {
          m = 0
          e = eMax
        } else if (e + eBias >= 1) {
          m = ((value * c) - 1) * Math.pow(2, mLen)
          e = e + eBias
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
          e = 0
        }
      }
    
      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    
      e = (e << mLen) | m
      eLen += mLen
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    
      buffer[offset + i - d] |= s * 128
    }
    
    },{}],10:[function(require,module,exports){
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor
        var TempCtor = function () {}
        TempCtor.prototype = superCtor.prototype
        ctor.prototype = new TempCtor()
        ctor.prototype.constructor = ctor
      }
    }
    
    },{}],11:[function(require,module,exports){
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    module.exports = function (obj) {
      return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
    }
    
    function isBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }
    
    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
    }
    
    },{}],12:[function(require,module,exports){
    var toString = {}.toString;
    
    module.exports = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };
    
    },{}],13:[function(require,module,exports){
    (function (process){
    'use strict';
    
    if (!process.version ||
        process.version.indexOf('v0.') === 0 ||
        process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
      module.exports = { nextTick: nextTick };
    } else {
      module.exports = process
    }
    
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== 'function') {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
      case 0:
      case 1:
        return process.nextTick(fn);
      case 2:
        return process.nextTick(function afterTickOne() {
          fn.call(null, arg1);
        });
      case 3:
        return process.nextTick(function afterTickTwo() {
          fn.call(null, arg1, arg2);
        });
      case 4:
        return process.nextTick(function afterTickThree() {
          fn.call(null, arg1, arg2, arg3);
        });
      default:
        args = new Array(len - 1);
        i = 0;
        while (i < args.length) {
          args[i++] = arguments[i];
        }
        return process.nextTick(function afterTick() {
          fn.apply(null, args);
        });
      }
    }
    
    
    }).call(this,require('_process'))
    },{"_process":14}],14:[function(require,module,exports){
    // shim for using process in browser
    var process = module.exports = {};
    
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    
    var cachedSetTimeout;
    var cachedClearTimeout;
    
    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    } ())
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch(e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch(e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    
    
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e){
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e){
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    
    
    
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
    
        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    
    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    
    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};
    
    function noop() {}
    
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    
    process.listeners = function (name) { return [] }
    
    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };
    
    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };
    
    },{}],15:[function(require,module,exports){
    (function (process,global){
    'use strict'
    
    // limit of Crypto.getRandomValues()
    // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
    var MAX_BYTES = 65536
    
    // Node supports requesting up to this number of bytes
    // https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
    var MAX_UINT32 = 4294967295
    
    function oldBrowser () {
      throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
    }
    
    var Buffer = require('safe-buffer').Buffer
    var crypto = global.crypto || global.msCrypto
    
    if (crypto && crypto.getRandomValues) {
      module.exports = randomBytes
    } else {
      module.exports = oldBrowser
    }
    
    function randomBytes (size, cb) {
      // phantomjs needs to throw
      if (size > MAX_UINT32) throw new RangeError('requested too many random bytes')
    
      var bytes = Buffer.allocUnsafe(size)
    
      if (size > 0) {  // getRandomValues fails on IE if size == 0
        if (size > MAX_BYTES) { // this is the max bytes crypto.getRandomValues
          // can do at once see https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
          for (var generated = 0; generated < size; generated += MAX_BYTES) {
            // buffer.slice automatically checks if the end is past the end of
            // the buffer so we don't have to here
            crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES))
          }
        } else {
          crypto.getRandomValues(bytes)
        }
      }
    
      if (typeof cb === 'function') {
        return process.nextTick(function () {
          cb(null, bytes)
        })
      }
    
      return bytes
    }
    
    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"_process":14,"safe-buffer":25}],16:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // a duplex stream is just a stream that is both readable and writable.
    // Since JS doesn't have multiple prototypal inheritance, this class
    // prototypally inherits from Readable, and then parasitically from
    // Writable.
    
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    /*<replacement>*/
    var objectKeys = Object.keys || function (obj) {
      var keys = [];
      for (var key in obj) {
        keys.push(key);
      }return keys;
    };
    /*</replacement>*/
    
    module.exports = Duplex;
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    var Readable = require('./_stream_readable');
    var Writable = require('./_stream_writable');
    
    util.inherits(Duplex, Readable);
    
    {
      // avoid scope creep, the keys array can then be collected
      var keys = objectKeys(Writable.prototype);
      for (var v = 0; v < keys.length; v++) {
        var method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options);
    
      Readable.call(this, options);
      Writable.call(this, options);
    
      if (options && options.readable === false) this.readable = false;
    
      if (options && options.writable === false) this.writable = false;
    
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    
      this.once('end', onend);
    }
    
    Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    
    // the no-half-open enforcer
    function onend() {
      // if we allow half-open state, or if the writable side ended,
      // then we're ok.
      if (this.allowHalfOpen || this._writableState.ended) return;
    
      // no more data can be written.
      // But allow more writes to happen in this tick.
      pna.nextTick(onEndNT, this);
    }
    
    function onEndNT(self) {
      self.end();
    }
    
    Object.defineProperty(Duplex.prototype, 'destroyed', {
      get: function () {
        if (this._readableState === undefined || this._writableState === undefined) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) {
          return;
        }
    
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    
    Duplex.prototype._destroy = function (err, cb) {
      this.push(null);
      this.end();
    
      pna.nextTick(cb, err);
    };
    },{"./_stream_readable":18,"./_stream_writable":20,"core-util-is":5,"inherits":10,"process-nextick-args":13}],17:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // a passthrough stream.
    // basically just the most minimal sort of Transform stream.
    // Every written chunk gets output as-is.
    
    'use strict';
    
    module.exports = PassThrough;
    
    var Transform = require('./_stream_transform');
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    util.inherits(PassThrough, Transform);
    
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);
    
      Transform.call(this, options);
    }
    
    PassThrough.prototype._transform = function (chunk, encoding, cb) {
      cb(null, chunk);
    };
    },{"./_stream_transform":19,"core-util-is":5,"inherits":10}],18:[function(require,module,exports){
    (function (process,global){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    module.exports = Readable;
    
    /*<replacement>*/
    var isArray = require('isarray');
    /*</replacement>*/
    
    /*<replacement>*/
    var Duplex;
    /*</replacement>*/
    
    Readable.ReadableState = ReadableState;
    
    /*<replacement>*/
    var EE = require('events').EventEmitter;
    
    var EElistenerCount = function (emitter, type) {
      return emitter.listeners(type).length;
    };
    /*</replacement>*/
    
    /*<replacement>*/
    var Stream = require('./internal/streams/stream');
    /*</replacement>*/
    
    /*<replacement>*/
    
    var Buffer = require('safe-buffer').Buffer;
    var OurUint8Array = global.Uint8Array || function () {};
    function _uint8ArrayToBuffer(chunk) {
      return Buffer.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    
    /*</replacement>*/
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    /*<replacement>*/
    var debugUtil = require('util');
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog('stream');
    } else {
      debug = function () {};
    }
    /*</replacement>*/
    
    var BufferList = require('./internal/streams/BufferList');
    var destroyImpl = require('./internal/streams/destroy');
    var StringDecoder;
    
    util.inherits(Readable, Stream);
    
    var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
    
    function prependListener(emitter, event, fn) {
      // Sadly this is not cacheable as some libraries bundle their own
      // event emitter implementation with them.
      if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
    
      // This is a hack to make sure that our error handler is attached before any
      // userland ones.  NEVER DO THIS. This is here only because this code needs
      // to continue to work with older versions of Node.js that do not include
      // the prependListener() method. The goal is to eventually remove this hack.
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
    }
    
    function ReadableState(options, stream) {
      Duplex = Duplex || require('./_stream_duplex');
    
      options = options || {};
    
      // Duplex streams are both readable and writable, but share
      // the same options object.
      // However, some cases require setting options to different
      // values for the readable and the writable sides of the duplex stream.
      // These options can be provided separately as readableXXX and writableXXX.
      var isDuplex = stream instanceof Duplex;
    
      // object stream flag. Used to make read(n) ignore n and to
      // make all the buffer merging and length checks go away
      this.objectMode = !!options.objectMode;
    
      if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    
      // the point at which it stops calling _read() to fill the buffer
      // Note: 0 is a valid value, means "don't call _read preemptively ever"
      var hwm = options.highWaterMark;
      var readableHwm = options.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    
      if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;
    
      // cast to ints.
      this.highWaterMark = Math.floor(this.highWaterMark);
    
      // A linked list is used to store data chunks instead of an array because the
      // linked list can remove elements from the beginning faster than
      // array.shift()
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
    
      // a flag to be able to tell if the event 'readable'/'data' is emitted
      // immediately, or on a later tick.  We set this to true at first, because
      // any actions that shouldn't happen until "later" should generally also
      // not happen before the first read call.
      this.sync = true;
    
      // whenever we return null, then we set a flag to say
      // that we're awaiting a 'readable' event emission.
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
    
      // has it been destroyed
      this.destroyed = false;
    
      // Crypto is kind of old and crusty.  Historically, its default string
      // encoding is 'binary' so we have to make this configurable.
      // Everything else in the universe uses 'utf8', though.
      this.defaultEncoding = options.defaultEncoding || 'utf8';
    
      // the number of writers that are awaiting a drain event in .pipe()s
      this.awaitDrain = 0;
    
      // if true, a maybeReadMore has been scheduled
      this.readingMore = false;
    
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    
    function Readable(options) {
      Duplex = Duplex || require('./_stream_duplex');
    
      if (!(this instanceof Readable)) return new Readable(options);
    
      this._readableState = new ReadableState(options, this);
    
      // legacy
      this.readable = true;
    
      if (options) {
        if (typeof options.read === 'function') this._read = options.read;
    
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
      }
    
      Stream.call(this);
    }
    
    Object.defineProperty(Readable.prototype, 'destroyed', {
      get: function () {
        if (this._readableState === undefined) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function (value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) {
          return;
        }
    
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
      }
    });
    
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function (err, cb) {
      this.push(null);
      cb(err);
    };
    
    // Manually shove something into the read() buffer.
    // This returns true if the highWaterMark has not been hit yet,
    // similar to how Writable.write() returns true if you should
    // write() some more.
    Readable.prototype.push = function (chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
    
      if (!state.objectMode) {
        if (typeof chunk === 'string') {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer.from(chunk, encoding);
            encoding = '';
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
    
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    
    // Unshift should *always* be something directly out of read()
    Readable.prototype.unshift = function (chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
          stream.emit('error', er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
    
          if (addToFront) {
            if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit('error', new Error('stream.push() after EOF'));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }
    
      return needMoreData(state);
    }
    
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
      } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    
        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }
    
    // if it's past the high water mark, we can push in some more.
    // Also, if we have no data yet, we can stand some
    // more bytes.  This is to work around cases where hwm=0,
    // such as the repl.  Also, if the push() triggered a
    // readable event, and the user called read(largeNumber) such that
    // needReadable was set, then we ought to push more, so that another
    // 'readable' event will be triggered.
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    
    Readable.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };
    
    // backwards compatibility.
    Readable.prototype.setEncoding = function (enc) {
      if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    
    // Don't raise the hwm > 8MB
    var MAX_HWM = 0x800000;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
      }
      // If we're asking for more than the current hwm, then raise the hwm.
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      // Don't have enough
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    
    // you can override either this method, or the async _read(n) below.
    Readable.prototype.read = function (n) {
      debug('read', n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
    
      if (n !== 0) state.emittedReadable = false;
    
      // if we're doing read(0) to trigger a readable event, but we
      // already have a bunch of data in the buffer, then just trigger
      // the 'readable' event and move on.
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
        return null;
      }
    
      n = howMuchToRead(n, state);
    
      // if we've ended, and we're now clear, then finish it up.
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }
    
      // All the actual chunk generation logic needs to be
      // *below* the call to _read.  The reason is that in certain
      // synthetic stream cases, such as passthrough streams, _read
      // may be a completely synchronous operation which may change
      // the state of the read buffer, providing enough data when
      // before there was *not* enough.
      //
      // So, the steps are:
      // 1. Figure out what the state of things will be after we do
      // a read from the buffer.
      //
      // 2. If that resulting state will trigger a _read, then call _read.
      // Note that this may be asynchronous, or synchronous.  Yes, it is
      // deeply ugly to write APIs this way, but that still doesn't mean
      // that the Readable class should behave improperly, as streams are
      // designed to be sync/async agnostic.
      // Take note if the _read call is sync or async (ie, if the read call
      // has returned yet), so that we know whether or not it's safe to emit
      // 'readable' etc.
      //
      // 3. Actually pull the requested chunks out of the buffer and return.
    
      // if we need a readable event, then we need to do some reading.
      var doRead = state.needReadable;
      debug('need readable', doRead);
    
      // if we currently have less than the highWaterMark, then also read some
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }
    
      // however, if we've ended, then there's no point, and if we're already
      // reading, then it's unnecessary.
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }
    
      var ret;
      if (n > 0) ret = fromList(n, state);else ret = null;
    
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
    
      if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
    
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
      }
    
      if (ret !== null) this.emit('data', ret);
    
      return ret;
    };
    
    function onEofChunk(stream, state) {
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
    
      // emit 'readable' now to make sure it gets picked up.
      emitReadable(stream);
    }
    
    // Don't emit readable right away in sync mode, because this can trigger
    // another read() call => stack overflow.  This way, it might trigger
    // a nextTick recursion warning, but that's not so bad.
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
      }
    }
    
    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }
    
    // at this point, the user has presumably seen the 'readable' event,
    // and called read() to consume some data.  that may have triggered
    // in turn another _read(n) call, in which case reading = true if
    // it's in progress.
    // However, if we're not ended, or reading, and the length < hwm,
    // then go ahead and try to read some more preemptively.
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
      }
    }
    
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          // didn't get any data, stop spinning.
          break;else len = state.length;
      }
      state.readingMore = false;
    }
    
    // abstract method.  to be overridden in specific implementation classes.
    // call cb(er, data) where data is <= n in length.
    // for virtual (non-string, non-buffer) streams, "length" is somewhat
    // arbitrary, and perhaps not very meaningful.
    Readable.prototype._read = function (n) {
      this.emit('error', new Error('_read() is not implemented'));
    };
    
    Readable.prototype.pipe = function (dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
    
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);
    
      dest.on('unpipe', onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
    
      function onend() {
        debug('onend');
        dest.end();
      }
    
      // when the dest drains, it reduces the awaitDrain counter
      // on the source.  This would be more elegant with a .once()
      // handler in flow(), but adding and removing repeatedly is
      // too slow.
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);
    
      var cleanedUp = false;
      function cleanup() {
        debug('cleanup');
        // cleanup event handlers once the pipe is broken
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
    
        cleanedUp = true;
    
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
    
      // If the user pushes more data while we're writing to dest then we'll end up
      // in ondata again. However, we only want to increase awaitDrain once because
      // dest will only emit one 'drain' event for the multiple writes.
      // => Introduce a guard on increasing awaitDrain.
      var increasedAwaitDrain = false;
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
          // If the user unpiped during `dest.write()`, it is possible
          // to get stuck in a permanently paused state if that write
          // also returned false.
          // => Check whether `dest` is still a piping destination.
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug('false write response, pause', src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
    
      // if the dest has an error, then stop piping into it.
      // however, don't suppress the throwing behavior for this.
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
      }
    
      // Make sure our error handler is attached before userland ones.
      prependListener(dest, 'error', onerror);
    
      // Both close and finish should trigger unpipe, but only once.
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);
    
      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }
    
      // tell the dest that it's being piped to
      dest.emit('pipe', src);
    
      // start the flow if it hasn't been started already.
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }
    
      return dest;
    };
    
    function pipeOnDrain(src) {
      return function () {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    
    Readable.prototype.unpipe = function (dest) {
      var state = this._readableState;
      var unpipeInfo = { hasUnpiped: false };
    
      // if we're not piping anywhere, then do nothing.
      if (state.pipesCount === 0) return this;
    
      // just one destination.  most common case.
      if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
    
        if (!dest) dest = state.pipes;
    
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
      }
    
      // slow case. multiple pipe destinations.
    
      if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
    
        for (var i = 0; i < len; i++) {
          dests[i].emit('unpipe', this, unpipeInfo);
        }return this;
      }
    
      // try to find the right one.
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;
    
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];
    
      dest.emit('unpipe', this, unpipeInfo);
    
      return this;
    };
    
    // set up data events if they are asked for
    // Ensure readable listeners eventually get something
    Readable.prototype.on = function (ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
    
      if (ev === 'data') {
        // Start flowing on next tick if stream isn't explicitly paused
        if (this._readableState.flowing !== false) this.resume();
      } else if (ev === 'readable') {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            pna.nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }
    
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    
    function nReadingNextTick(self) {
      debug('readable nexttick read 0');
      self.read(0);
    }
    
    // pause() and resume() are remnants of the legacy readable stream API
    // If the user uses them, then switch into old mode.
    Readable.prototype.resume = function () {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
      }
    }
    
    function resume_(stream, state) {
      if (!state.reading) {
        debug('resume read 0');
        stream.read(0);
      }
    
      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }
    
    Readable.prototype.pause = function () {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };
    
    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      while (state.flowing && stream.read() !== null) {}
    }
    
    // wrap an old-style stream as the async data source.
    // This is *not* part of the readable stream interface.
    // It is an ugly unfortunate mess of history.
    Readable.prototype.wrap = function (stream) {
      var _this = this;
    
      var state = this._readableState;
      var paused = false;
    
      stream.on('end', function () {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
    
        _this.push(null);
      });
    
      stream.on('data', function (chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
    
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
    
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
    
      // proxy all the other methods.
      // important when wrapping filters and duplexes.
      for (var i in stream) {
        if (this[i] === undefined && typeof stream[i] === 'function') {
          this[i] = function (method) {
            return function () {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
    
      // proxy certain important events.
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
    
      // when we try to consume some more bytes, simply unpause the
      // underlying stream.
      this._read = function (n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
    
      return this;
    };
    
    Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    });
    
    // exposed for testing purposes only.
    Readable._fromList = fromList;
    
    // Pluck off n bytes from an array of buffers.
    // Length is the combined lengths of all the buffers in the list.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromList(n, state) {
      // nothing buffered
      if (state.length === 0) return null;
    
      var ret;
      if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        // read part of list
        ret = fromListPartial(n, state.buffer, state.decoder);
      }
    
      return ret;
    }
    
    // Extracts only enough buffered data to satisfy the amount requested.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        // first chunk is a perfect match
        ret = list.shift();
      } else {
        // result spans more than one buffer
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }
    
    // Copies a specified amount of characters from the list of buffered data
    // chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    
    // Copies a specified amount of bytes from the list of buffered data chunks.
    // This function is designed to be inlinable, so please take care when making
    // changes to the function body.
    function copyFromBuffer(n, list) {
      var ret = Buffer.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) list.head = p.next;else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    
    function endReadable(stream) {
      var state = stream._readableState;
    
      // If we get here before consuming all the bytes, then that is a
      // bug in node.  Should never happen.
      if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    
      if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
      }
    }
    
    function endReadableNT(state, stream) {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    }
    
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{"./_stream_duplex":16,"./internal/streams/BufferList":21,"./internal/streams/destroy":22,"./internal/streams/stream":23,"_process":14,"core-util-is":5,"events":6,"inherits":10,"isarray":12,"process-nextick-args":13,"safe-buffer":25,"string_decoder/":31,"util":3}],19:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // a transform stream is a readable/writable stream where you do
    // something with the data.  Sometimes it's called a "filter",
    // but that's not a great name for it, since that implies a thing where
    // some bits pass through, and others are simply ignored.  (That would
    // be a valid example of a transform, of course.)
    //
    // While the output is causally related to the input, it's not a
    // necessarily symmetric or synchronous transformation.  For example,
    // a zlib stream might take multiple plain-text writes(), and then
    // emit a single compressed chunk some time in the future.
    //
    // Here's how this works:
    //
    // The Transform stream has all the aspects of the readable and writable
    // stream classes.  When you write(chunk), that calls _write(chunk,cb)
    // internally, and returns false if there's a lot of pending writes
    // buffered up.  When you call read(), that calls _read(n) until
    // there's enough pending readable data buffered up.
    //
    // In a transform stream, the written data is placed in a buffer.  When
    // _read(n) is called, it transforms the queued up data, calling the
    // buffered _write cb's as it consumes chunks.  If consuming a single
    // written chunk would result in multiple output chunks, then the first
    // outputted bit calls the readcb, and subsequent chunks just go into
    // the read buffer, and will cause it to emit 'readable' if necessary.
    //
    // This way, back-pressure is actually determined by the reading side,
    // since _read has to be called to start processing a new chunk.  However,
    // a pathological inflate type of transform can cause excessive buffering
    // here.  For example, imagine a stream where every byte of input is
    // interpreted as an integer from 0-255, and then results in that many
    // bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
    // 1kb of data being output.  In this case, you could write a very small
    // amount of input, and end up with a very large amount of output.  In
    // such a pathological inflating mechanism, there'd be no way to tell
    // the system to stop doing the transform.  A single 4MB write could
    // cause the system to run out of memory.
    //
    // However, even in such a pathological case, only a single written chunk
    // would be consumed, and then the rest would wait (un-transformed) until
    // the results of the previous transformed chunk were consumed.
    
    'use strict';
    
    module.exports = Transform;
    
    var Duplex = require('./_stream_duplex');
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    util.inherits(Transform, Duplex);
    
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
    
      var cb = ts.writecb;
    
      if (!cb) {
        return this.emit('error', new Error('write callback called multiple times'));
      }
    
      ts.writechunk = null;
      ts.writecb = null;
    
      if (data != null) // single equals check for both `null` and `undefined`
        this.push(data);
    
      cb(er);
    
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options);
    
      Duplex.call(this, options);
    
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
    
      // start out asking for a readable event once data is transformed.
      this._readableState.needReadable = true;
    
      // we have implemented the _read method, and done the other things
      // that Readable wants before the first _read call, so unset the
      // sync guard flag.
      this._readableState.sync = false;
    
      if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
    
        if (typeof options.flush === 'function') this._flush = options.flush;
      }
    
      // When the writable side finishes, then flush out anything remaining.
      this.on('prefinish', prefinish);
    }
    
    function prefinish() {
      var _this = this;
    
      if (typeof this._flush === 'function') {
        this._flush(function (er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    
    Transform.prototype.push = function (chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    
    // This is the part where you do stuff!
    // override this function in implementation classes.
    // 'chunk' is an input chunk.
    //
    // Call `push(newChunk)` to pass along transformed output
    // to the readable side.  You may call 'push' zero or more times.
    //
    // Call `cb(err)` when you are done with this chunk.  If you pass
    // an error, then that'll put the hurt on the whole operation.  If you
    // never call cb(), then you'll never get another chunk.
    Transform.prototype._transform = function (chunk, encoding, cb) {
      throw new Error('_transform() is not implemented');
    };
    
    Transform.prototype._write = function (chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    
    // Doesn't matter what the args are here.
    // _transform does all the work.
    // That we got here means that the readable side wants more data.
    Transform.prototype._read = function (n) {
      var ts = this._transformState;
    
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        // mark that we need a transform, so that any data that comes in
        // will get processed, now that we've asked for it.
        ts.needTransform = true;
      }
    };
    
    Transform.prototype._destroy = function (err, cb) {
      var _this2 = this;
    
      Duplex.prototype._destroy.call(this, err, function (err2) {
        cb(err2);
        _this2.emit('close');
      });
    };
    
    function done(stream, er, data) {
      if (er) return stream.emit('error', er);
    
      if (data != null) // single equals check for both `null` and `undefined`
        stream.push(data);
    
      // if there's nothing in the write buffer, then that means
      // that nothing more will ever be provided
      if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
    
      if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
    
      return stream.push(null);
    }
    },{"./_stream_duplex":16,"core-util-is":5,"inherits":10}],20:[function(require,module,exports){
    (function (process,global,setImmediate){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    // A bit simpler than readable streams.
    // Implement an async ._write(chunk, encoding, cb), and it'll handle all
    // the drain event emission and buffering.
    
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    module.exports = Writable;
    
    /* <replacement> */
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
      this.next = null;
    }
    
    // It seems a linked list but it is not
    // there will be only 2 of these for each stream
    function CorkedRequest(state) {
      var _this = this;
    
      this.next = null;
      this.entry = null;
      this.finish = function () {
        onCorkedFinish(_this, state);
      };
    }
    /* </replacement> */
    
    /*<replacement>*/
    var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    /*</replacement>*/
    
    /*<replacement>*/
    var Duplex;
    /*</replacement>*/
    
    Writable.WritableState = WritableState;
    
    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/
    
    /*<replacement>*/
    var internalUtil = {
      deprecate: require('util-deprecate')
    };
    /*</replacement>*/
    
    /*<replacement>*/
    var Stream = require('./internal/streams/stream');
    /*</replacement>*/
    
    /*<replacement>*/
    
    var Buffer = require('safe-buffer').Buffer;
    var OurUint8Array = global.Uint8Array || function () {};
    function _uint8ArrayToBuffer(chunk) {
      return Buffer.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    
    /*</replacement>*/
    
    var destroyImpl = require('./internal/streams/destroy');
    
    util.inherits(Writable, Stream);
    
    function nop() {}
    
    function WritableState(options, stream) {
      Duplex = Duplex || require('./_stream_duplex');
    
      options = options || {};
    
      // Duplex streams are both readable and writable, but share
      // the same options object.
      // However, some cases require setting options to different
      // values for the readable and the writable sides of the duplex stream.
      // These options can be provided separately as readableXXX and writableXXX.
      var isDuplex = stream instanceof Duplex;
    
      // object stream flag to indicate whether or not this stream
      // contains buffers or objects.
      this.objectMode = !!options.objectMode;
    
      if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    
      // the point at which write() starts returning false
      // Note: 0 is a valid value, means that we always return false if
      // the entire buffer is not flushed immediately on write()
      var hwm = options.highWaterMark;
      var writableHwm = options.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    
      if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;
    
      // cast to ints.
      this.highWaterMark = Math.floor(this.highWaterMark);
    
      // if _final has been called
      this.finalCalled = false;
    
      // drain event flag.
      this.needDrain = false;
      // at the start of calling end()
      this.ending = false;
      // when end() has been called, and returned
      this.ended = false;
      // when 'finish' is emitted
      this.finished = false;
    
      // has it been destroyed
      this.destroyed = false;
    
      // should we decode strings into buffers before passing to _write?
      // this is here so that some node-core streams can optimize string
      // handling at a lower level.
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
    
      // Crypto is kind of old and crusty.  Historically, its default string
      // encoding is 'binary' so we have to make this configurable.
      // Everything else in the universe uses 'utf8', though.
      this.defaultEncoding = options.defaultEncoding || 'utf8';
    
      // not an actual buffer we keep track of, but a measurement
      // of how much we're waiting to get pushed to some underlying
      // socket or file.
      this.length = 0;
    
      // a flag to see when we're in the middle of a write.
      this.writing = false;
    
      // when true all writes will be buffered until .uncork() call
      this.corked = 0;
    
      // a flag to be able to tell if the onwrite cb is called immediately,
      // or on a later tick.  We set this to true at first, because any
      // actions that shouldn't happen until "later" should generally also
      // not happen before the first write call.
      this.sync = true;
    
      // a flag to know if we're processing previously buffered items, which
      // may call the _write() callback in the same tick, so that we don't
      // end up in an overlapped onwrite situation.
      this.bufferProcessing = false;
    
      // the callback that's passed to _write(chunk,cb)
      this.onwrite = function (er) {
        onwrite(stream, er);
      };
    
      // the callback that the user supplies to write(chunk,encoding,cb)
      this.writecb = null;
    
      // the amount that is being written when _write is called.
      this.writelen = 0;
    
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
    
      // number of pending user-supplied write callbacks
      // this must be 0 before 'finish' can be emitted
      this.pendingcb = 0;
    
      // emit prefinish if the only thing we're waiting for is _write cbs
      // This is relevant for synchronous Transform streams
      this.prefinished = false;
    
      // True if the error was already emitted and should not be thrown again
      this.errorEmitted = false;
    
      // count buffered requests
      this.bufferedRequestCount = 0;
    
      // allocate the first CorkedRequest, there is always
      // one allocated and free to use, and we maintain at most two
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    
    (function () {
      try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
          get: internalUtil.deprecate(function () {
            return this.getBuffer();
          }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
        });
      } catch (_) {}
    })();
    
    // Test _writableState for inheritance to account for Duplex streams,
    // whose prototype chain only points to Readable.
    var realHasInstance;
    if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function (object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable) return false;
    
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function (object) {
        return object instanceof this;
      };
    }
    
    function Writable(options) {
      Duplex = Duplex || require('./_stream_duplex');
    
      // Writable ctor is applied to Duplexes, too.
      // `realHasInstance` is necessary because using plain `instanceof`
      // would return false, as no `_writableState` property is attached.
    
      // Trying to use the custom `instanceof` for Writable here will also break the
      // Node.js LazyTransform implementation, which has a non-trivial getter for
      // `_writableState` that would lead to infinite recursion.
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
      }
    
      this._writableState = new WritableState(options, this);
    
      // legacy.
      this.writable = true;
    
      if (options) {
        if (typeof options.write === 'function') this._write = options.write;
    
        if (typeof options.writev === 'function') this._writev = options.writev;
    
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
    
        if (typeof options.final === 'function') this._final = options.final;
      }
    
      Stream.call(this);
    }
    
    // Otherwise people can pipe Writable streams, which is just wrong.
    Writable.prototype.pipe = function () {
      this.emit('error', new Error('Cannot pipe, not readable'));
    };
    
    function writeAfterEnd(stream, cb) {
      var er = new Error('write after end');
      // TODO: defer error events consistently everywhere, not just the cb
      stream.emit('error', er);
      pna.nextTick(cb, er);
    }
    
    // Checks that a user-supplied chunk is valid, especially for the particular
    // mode the stream is in. Currently this means that `null` is never accepted
    // and undefined/non-string values are only allowed in object mode.
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
    
      if (chunk === null) {
        er = new TypeError('May not write null values to stream');
      } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      if (er) {
        stream.emit('error', er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    
    Writable.prototype.write = function (chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
    
      if (isBuf && !Buffer.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
    
      if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }
    
      if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
    
      if (typeof cb !== 'function') cb = nop;
    
      if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
    
      return ret;
    };
    
    Writable.prototype.cork = function () {
      var state = this._writableState;
    
      state.corked++;
    };
    
    Writable.prototype.uncork = function () {
      var state = this._writableState;
    
      if (state.corked) {
        state.corked--;
    
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };
    
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      // node::ParseEncoding() requires lower case.
      if (typeof encoding === 'string') encoding = encoding.toLowerCase();
      if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer.from(chunk, encoding);
      }
      return chunk;
    }
    
    Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    
    // if we're already writing something, then just put this
    // in the queue, and wait our turn.  Otherwise, call _write
    // If we return false, then we need a drain event, so set that flag.
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = 'buffer';
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
    
      state.length += len;
    
      var ret = state.length < state.highWaterMark;
      // we must ensure that previous needDrain will not be reset to false.
      if (!ret) state.needDrain = true;
    
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk: chunk,
          encoding: encoding,
          isBuf: isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
    
      return ret;
    }
    
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
    
      if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        pna.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
      } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
      }
    }
    
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
    
      onwriteStateUpdate(state);
    
      if (er) onwriteError(stream, state, sync, er, cb);else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);
    
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
    
        if (sync) {
          /*<replacement>*/
          asyncWrite(afterWrite, stream, state, finished, cb);
          /*</replacement>*/
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    
    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    
    // Must force callback to be called on nextTick, so that we don't
    // emit 'drain' before the write() consumer gets the 'false' return
    // value, and has a chance to attach a 'drain' listener.
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }
    
    // if there's something in the buffer waiting, then process it
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
    
      if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
    
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
    
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
    
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        // Slow case, write chunks one-by-one
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
    
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          // if we didn't call the onwrite immediately, then
          // it means that we need to wait until it does.
          // also, that means that the chunk and cb are currently
          // being processed, so move the buffer counter past them.
          if (state.writing) {
            break;
          }
        }
    
        if (entry === null) state.lastBufferedRequest = null;
      }
    
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    
    Writable.prototype._write = function (chunk, encoding, cb) {
      cb(new Error('_write() is not implemented'));
    };
    
    Writable.prototype._writev = null;
    
    Writable.prototype.end = function (chunk, encoding, cb) {
      var state = this._writableState;
    
      if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }
    
      if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    
      // .end() fully uncorks
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
    
      // ignore unnecessary end() calls.
      if (!state.ending && !state.finished) endWritable(this, state, cb);
    };
    
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function (err) {
        state.pendingcb--;
        if (err) {
          stream.emit('error', err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function') {
          state.pendingcb++;
          state.finalCalled = true;
          pna.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit('prefinish');
        }
      }
    }
    
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit('finish');
        }
      }
      return need;
    }
    
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = corkReq;
      } else {
        state.corkedRequestsFree = corkReq;
      }
    }
    
    Object.defineProperty(Writable.prototype, 'destroyed', {
      get: function () {
        if (this._writableState === undefined) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function (value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) {
          return;
        }
    
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
      }
    });
    
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function (err, cb) {
      this.end();
      cb(err);
    };
    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)
    },{"./_stream_duplex":16,"./internal/streams/destroy":22,"./internal/streams/stream":23,"_process":14,"core-util-is":5,"inherits":10,"process-nextick-args":13,"safe-buffer":25,"timers":32,"util-deprecate":33}],21:[function(require,module,exports){
    'use strict';
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    var Buffer = require('safe-buffer').Buffer;
    var util = require('util');
    
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    
    module.exports = function () {
      function BufferList() {
        _classCallCheck(this, BufferList);
    
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
    
      BufferList.prototype.push = function push(v) {
        var entry = { data: v, next: null };
        if (this.length > 0) this.tail.next = entry;else this.head = entry;
        this.tail = entry;
        ++this.length;
      };
    
      BufferList.prototype.unshift = function unshift(v) {
        var entry = { data: v, next: this.head };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
      };
    
      BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
        --this.length;
        return ret;
      };
    
      BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
      };
    
      BufferList.prototype.join = function join(s) {
        if (this.length === 0) return '';
        var p = this.head;
        var ret = '' + p.data;
        while (p = p.next) {
          ret += s + p.data;
        }return ret;
      };
    
      BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer.alloc(0);
        if (this.length === 1) return this.head.data;
        var ret = Buffer.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      };
    
      return BufferList;
    }();
    
    if (util && util.inspect && util.inspect.custom) {
      module.exports.prototype[util.inspect.custom] = function () {
        var obj = util.inspect({ length: this.length });
        return this.constructor.name + ' ' + obj;
      };
    }
    },{"safe-buffer":25,"util":3}],22:[function(require,module,exports){
    'use strict';
    
    /*<replacement>*/
    
    var pna = require('process-nextick-args');
    /*</replacement>*/
    
    // undocumented cb() API, needed for core, not for public API
    function destroy(err, cb) {
      var _this = this;
    
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
    
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
          pna.nextTick(emitErrorNT, this, err);
        }
        return this;
      }
    
      // we set destroyed to true before firing error callbacks in order
      // to make it re-entrance safe in case destroy() is called within callbacks
    
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
    
      // if this is a duplex stream mark the writable part as destroyed as well
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
    
      this._destroy(err || null, function (err) {
        if (!cb && err) {
          pna.nextTick(emitErrorNT, _this, err);
          if (_this._writableState) {
            _this._writableState.errorEmitted = true;
          }
        } else if (cb) {
          cb(err);
        }
      });
    
      return this;
    }
    
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
    
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    
    function emitErrorNT(self, err) {
      self.emit('error', err);
    }
    
    module.exports = {
      destroy: destroy,
      undestroy: undestroy
    };
    },{"process-nextick-args":13}],23:[function(require,module,exports){
    module.exports = require('events').EventEmitter;
    
    },{"events":6}],24:[function(require,module,exports){
    exports = module.exports = require('./lib/_stream_readable.js');
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require('./lib/_stream_writable.js');
    exports.Duplex = require('./lib/_stream_duplex.js');
    exports.Transform = require('./lib/_stream_transform.js');
    exports.PassThrough = require('./lib/_stream_passthrough.js');
    
    },{"./lib/_stream_duplex.js":16,"./lib/_stream_passthrough.js":17,"./lib/_stream_readable.js":18,"./lib/_stream_transform.js":19,"./lib/_stream_writable.js":20}],25:[function(require,module,exports){
    /* eslint-disable node/no-deprecated-api */
    var buffer = require('buffer')
    var Buffer = buffer.Buffer
    
    // alternative to using Object.keys for old browsers
    function copyProps (src, dst) {
      for (var key in src) {
        dst[key] = src[key]
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer
    } else {
      // Copy properties from require('buffer')
      copyProps(buffer, exports)
      exports.Buffer = SafeBuffer
    }
    
    function SafeBuffer (arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length)
    }
    
    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer)
    
    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
      }
      return Buffer(arg, encodingOrOffset, length)
    }
    
    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      var buf = Buffer(size)
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding)
        } else {
          buf.fill(fill)
        }
      } else {
        buf.fill(0)
      }
      return buf
    }
    
    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return Buffer(size)
    }
    
    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return buffer.SlowBuffer(size)
    }
    
    },{"buffer":4}],26:[function(require,module,exports){
     /* eslint-env node */
    'use strict';
    
    // SDP helpers.
    var SDPUtils = {};
    
    // Generate an alphanumeric identifier for cname or mids.
    // TODO: use UUIDs instead? https://gist.github.com/jed/982883
    SDPUtils.generateIdentifier = function() {
      return Math.random().toString(36).substr(2, 10);
    };
    
    // The RTCP CNAME used by all peerconnections from the same JS.
    SDPUtils.localCName = SDPUtils.generateIdentifier();
    
    // Splits SDP into lines, dealing with both CRLF and LF.
    SDPUtils.splitLines = function(blob) {
      return blob.trim().split('\n').map(function(line) {
        return line.trim();
      });
    };
    // Splits SDP into sessionpart and mediasections. Ensures CRLF.
    SDPUtils.splitSections = function(blob) {
      var parts = blob.split('\nm=');
      return parts.map(function(part, index) {
        return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
      });
    };
    
    // Returns lines that start with a certain prefix.
    SDPUtils.matchPrefix = function(blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function(line) {
        return line.indexOf(prefix) === 0;
      });
    };
    
    // Parses an ICE candidate line. Sample input:
    // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
    // rport 55996"
    SDPUtils.parseCandidate = function(line) {
      var parts;
      // Parse both variants.
      if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
      } else {
        parts = line.substring(10).split(' ');
      }
    
      var candidate = {
        foundation: parts[0],
        component: parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
      };
    
      for (var i = 8; i < parts.length; i += 2) {
        switch (parts[i]) {
          case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
          case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
          default: // extension handling, in particular ufrag
            candidate[parts[i]] = parts[i + 1];
            break;
        }
      }
      return candidate;
    };
    
    // Translates a candidate object into SDP candidate attribute.
    SDPUtils.writeCandidate = function(candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.ip);
      sdp.push(candidate.port);
    
      var type = candidate.type;
      sdp.push('typ');
      sdp.push(type);
      if (type !== 'host' && candidate.relatedAddress &&
          candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress); // was: relAddr
        sdp.push('rport');
        sdp.push(candidate.relatedPort); // was: relPort
      }
      if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
      }
      return 'candidate:' + sdp.join(' ');
    };
    
    // Parses an ice-options line, returns an array of option tags.
    // a=ice-options:foo bar
    SDPUtils.parseIceOptions = function(line) {
      return line.substr(14).split(' ');
    }
    
    // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
    // a=rtpmap:111 opus/48000/2
    SDPUtils.parseRtpMap = function(line) {
      var parts = line.substr(9).split(' ');
      var parsed = {
        payloadType: parseInt(parts.shift(), 10) // was: id
      };
    
      parts = parts[0].split('/');
    
      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
      // was: channels
      parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
      return parsed;
    };
    
    // Generate an a=rtpmap line from RTCRtpCodecCapability or
    // RTCRtpCodecParameters.
    SDPUtils.writeRtpMap = function(codec) {
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
          (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
    };
    
    // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
    // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
    // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
    SDPUtils.parseExtmap = function(line) {
      var parts = line.substr(9).split(' ');
      return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
        uri: parts[1]
      };
    };
    
    // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
    // RTCRtpHeaderExtension.
    SDPUtils.writeExtmap = function(headerExtension) {
      return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
          (headerExtension.direction && headerExtension.direction !== 'sendrecv'
              ? '/' + headerExtension.direction
              : '') +
          ' ' + headerExtension.uri + '\r\n';
    };
    
    // Parses an ftmp line, returns dictionary. Sample input:
    // a=fmtp:96 vbr=on;cng=on
    // Also deals with vbr=on; cng=on
    SDPUtils.parseFmtp = function(line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(' ') + 1).split(';');
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };
    
    // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeFmtp = function(codec) {
      var line = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.parameters && Object.keys(codec.parameters).length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
          params.push(param + '=' + codec.parameters[param]);
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
      }
      return line;
    };
    
    // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
    // a=rtcp-fb:98 nack rpsi
    SDPUtils.parseRtcpFb = function(line) {
      var parts = line.substr(line.indexOf(' ') + 1).split(' ');
      return {
        type: parts.shift(),
        parameter: parts.join(' ')
      };
    };
    // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtcpFb = function(codec) {
      var lines = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
        // FIXME: special handling for trr-int?
        codec.rtcpFeedback.forEach(function(fb) {
          lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
          (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
              '\r\n';
        });
      }
      return lines;
    };
    
    // Parses an RFC 5576 ssrc media attribute. Sample input:
    // a=ssrc:3735928559 cname:something
    SDPUtils.parseSsrcMedia = function(line) {
      var sp = line.indexOf(' ');
      var parts = {
        ssrc: parseInt(line.substr(7, sp - 7), 10)
      };
      var colon = line.indexOf(':', sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else {
        parts.attribute = line.substr(sp + 1);
      }
      return parts;
    };
    
    // Extracts the MID (RFC 5888) from a media section.
    // returns the MID or undefined if no mid line was found.
    SDPUtils.getMid = function(mediaSection) {
      var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
      if (mid) {
        return mid.substr(6);
      }
    }
    
    SDPUtils.parseFingerprint = function(line) {
      var parts = line.substr(14).split(' ');
      return {
        algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
        value: parts[1]
      };
    };
    
    // Extracts DTLS parameters from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the fingerprint line as input. See also getIceParameters.
    SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
          'a=fingerprint:');
      // Note: a=setup line is ignored since we use the 'auto' role.
      // Note2: 'algorithm' is not case sensitive except in Edge.
      return {
        role: 'auto',
        fingerprints: lines.map(SDPUtils.parseFingerprint)
      };
    };
    
    // Serializes DTLS parameters to SDP.
    SDPUtils.writeDtlsParameters = function(params, setupType) {
      var sdp = 'a=setup:' + setupType + '\r\n';
      params.fingerprints.forEach(function(fp) {
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
      });
      return sdp;
    };
    // Parses ICE information from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the ice-ufrag and ice-pwd lines as input.
    SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      // Search in session part, too.
      lines = lines.concat(SDPUtils.splitLines(sessionpart));
      var iceParameters = {
        usernameFragment: lines.filter(function(line) {
          return line.indexOf('a=ice-ufrag:') === 0;
        })[0].substr(12),
        password: lines.filter(function(line) {
          return line.indexOf('a=ice-pwd:') === 0;
        })[0].substr(10)
      };
      return iceParameters;
    };
    
    // Serializes ICE parameters to SDP.
    SDPUtils.writeIceParameters = function(params) {
      return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
          'a=ice-pwd:' + params.password + '\r\n';
    };
    
    // Parses the SDP media section and returns RTCRtpParameters.
    SDPUtils.parseRtpParameters = function(mediaSection) {
      var description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(
            mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(
              mediaSection, 'a=fmtp:' + pt + ' ');
          // Only the first a=fmtp:<pt> is considered.
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(
              mediaSection, 'a=rtcp-fb:' + pt + ' ')
            .map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
          // parse FEC mechanisms from rtpmap lines.
          switch (codec.name.toUpperCase()) {
            case 'RED':
            case 'ULPFEC':
              description.fecMechanisms.push(codec.name.toUpperCase());
              break;
            default: // only RED and ULPFEC are recognized as FEC mechanisms.
              break;
          }
        }
      }
      SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
      });
      // FIXME: parse rtcp.
      return description;
    };
    
    // Generates parts of the SDP media section describing the capabilities /
    // parameters.
    SDPUtils.writeRtpDescription = function(kind, caps) {
      var sdp = '';
    
      // Build the mline.
      sdp += 'm=' + kind + ' ';
      sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
      sdp += ' UDP/TLS/RTP/SAVPF ';
      sdp += caps.codecs.map(function(codec) {
        if (codec.preferredPayloadType !== undefined) {
          return codec.preferredPayloadType;
        }
        return codec.payloadType;
      }).join(' ') + '\r\n';
    
      sdp += 'c=IN IP4 0.0.0.0\r\n';
      sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
    
      // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
      caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      var maxptime = 0;
      caps.codecs.forEach(function(codec) {
        if (codec.maxptime > maxptime) {
          maxptime = codec.maxptime;
        }
      });
      if (maxptime > 0) {
        sdp += 'a=maxptime:' + maxptime + '\r\n';
      }
      sdp += 'a=rtcp-mux\r\n';
    
      caps.headerExtensions.forEach(function(extension) {
        sdp += SDPUtils.writeExtmap(extension);
      });
      // FIXME: write fecMechanisms.
      return sdp;
    };
    
    // Parses the SDP media section and returns an array of
    // RTCRtpEncodingParameters.
    SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
      var encodingParameters = [];
      var description = SDPUtils.parseRtpParameters(mediaSection);
      var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
      var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
    
      // filter a=ssrc:... cname:, ignore PlanB-msid
      var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(parts) {
        return parts.attribute === 'cname';
      });
      var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
      var secondarySsrc;
    
      var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
      .map(function(line) {
        var parts = line.split(' ');
        parts.shift();
        return parts.map(function(part) {
          return parseInt(part, 10);
        });
      });
      if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
        secondarySsrc = flows[0][1];
      }
    
      description.codecs.forEach(function(codec) {
        if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
          var encParam = {
            ssrc: primarySsrc,
            codecPayloadType: parseInt(codec.parameters.apt, 10),
            rtx: {
              ssrc: secondarySsrc
            }
          };
          encodingParameters.push(encParam);
          if (hasRed) {
            encParam = JSON.parse(JSON.stringify(encParam));
            encParam.fec = {
              ssrc: secondarySsrc,
              mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
            };
            encodingParameters.push(encParam);
          }
        }
      });
      if (encodingParameters.length === 0 && primarySsrc) {
        encodingParameters.push({
          ssrc: primarySsrc
        });
      }
    
      // we support both b=AS and b=TIAS but interpret AS as TIAS.
      var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
      if (bandwidth.length) {
        if (bandwidth[0].indexOf('b=TIAS:') === 0) {
          bandwidth = parseInt(bandwidth[0].substr(7), 10);
        } else if (bandwidth[0].indexOf('b=AS:') === 0) {
          bandwidth = parseInt(bandwidth[0].substr(5), 10);
        }
        encodingParameters.forEach(function(params) {
          params.maxBitrate = bandwidth;
        });
      }
      return encodingParameters;
    };
    
    // parses http://draft.ortc.org/#rtcrtcpparameters*
    SDPUtils.parseRtcpParameters = function(mediaSection) {
      var rtcpParameters = {};
    
      var cname;
      // Gets the first SSRC. Note that with RTX there might be multiple
      // SSRCs.
      var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
          .map(function(line) {
            return SDPUtils.parseSsrcMedia(line);
          })
          .filter(function(obj) {
            return obj.attribute === 'cname';
          })[0];
      if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
      }
    
      // Edge uses the compound attribute instead of reducedSize
      // compound is !reducedSize
      var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
      rtcpParameters.reducedSize = rsize.length > 0;
      rtcpParameters.compound = rsize.length === 0;
    
      // parses the rtcp-mux attrіbute.
      // Note that Edge does not support unmuxed RTCP.
      var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
      rtcpParameters.mux = mux.length > 0;
    
      return rtcpParameters;
    };
    
    // parses either a=msid: or a=ssrc:... msid lines and returns
    // the id of the MediaStream and MediaStreamTrack.
    SDPUtils.parseMsid = function(mediaSection) {
      var parts;
      var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
      if (spec.length === 1) {
        parts = spec[0].substr(7).split(' ');
        return {stream: parts[0], track: parts[1]};
      }
      var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
      .map(function(line) {
        return SDPUtils.parseSsrcMedia(line);
      })
      .filter(function(parts) {
        return parts.attribute === 'msid';
      });
      if (planB.length > 0) {
        parts = planB[0].value.split(' ');
        return {stream: parts[0], track: parts[1]};
      }
    };
    
    SDPUtils.writeSessionBoilerplate = function() {
      // FIXME: sess-id should be an NTP timestamp.
      return 'v=0\r\n' +
          'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n' +
          's=-\r\n' +
          't=0 0\r\n';
    };
    
    SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
    
      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(
          transceiver.iceGatherer.getLocalParameters());
    
      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(
          transceiver.dtlsTransport.getLocalParameters(),
          type === 'offer' ? 'actpass' : 'active');
    
      sdp += 'a=mid:' + transceiver.mid + '\r\n';
    
      if (transceiver.direction) {
        sdp += 'a=' + transceiver.direction + '\r\n';
      } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }
    
      if (transceiver.rtpSender) {
        // spec.
        var msid = 'msid:' + stream.id + ' ' +
            transceiver.rtpSender.track.id + '\r\n';
        sdp += 'a=' + msid;
    
        // for Chrome.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
            ' ' + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
              ' ' + msid;
          sdp += 'a=ssrc-group:FID ' +
              transceiver.sendEncodingParameters[0].ssrc + ' ' +
              transceiver.sendEncodingParameters[0].rtx.ssrc +
              '\r\n';
        }
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' cname:' + SDPUtils.localCName + '\r\n';
      }
      return sdp;
    };
    
    // Gets the direction from the mediaSection or the sessionpart.
    SDPUtils.getDirection = function(mediaSection, sessionpart) {
      // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++) {
        switch (lines[i]) {
          case 'a=sendrecv':
          case 'a=sendonly':
          case 'a=recvonly':
          case 'a=inactive':
            return lines[i].substr(2);
          default:
            // FIXME: What should happen here?
        }
      }
      if (sessionpart) {
        return SDPUtils.getDirection(sessionpart);
      }
      return 'sendrecv';
    };
    
    SDPUtils.getKind = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      return mline[0].substr(2);
    };
    
    SDPUtils.isRejected = function(mediaSection) {
      return mediaSection.split(' ', 2)[1] === '0';
    };
    
    // Expose public methods.
    module.exports = SDPUtils;
    
    },{}],27:[function(require,module,exports){
    (function (Buffer){
    module.exports = Peer
    
    var debug = require('debug')('simple-peer')
    var getBrowserRTC = require('get-browser-rtc')
    var inherits = require('inherits')
    var randombytes = require('randombytes')
    var stream = require('readable-stream')
    
    var MAX_BUFFERED_AMOUNT = 64 * 1024
    
    inherits(Peer, stream.Duplex)
    
    /**
     * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
     * Duplex stream.
     * @param {Object} opts
     */
    function Peer (opts) {
      var self = this
      if (!(self instanceof Peer)) return new Peer(opts)
    
      self._id = randombytes(4).toString('hex').slice(0, 7)
      self._debug('new peer %o', opts)
    
      opts = Object.assign({
        allowHalfOpen: false
      }, opts)
    
      stream.Duplex.call(self, opts)
    
      self.channelName = opts.initiator
        ? opts.channelName || randombytes(20).toString('hex')
        : null
    
      // Needed by _transformConstraints, so set this early
      self._isChromium = typeof window !== 'undefined' && !!window.webkitRTCPeerConnection
    
      self.initiator = opts.initiator || false
      self.channelConfig = opts.channelConfig || Peer.channelConfig
      self.config = opts.config || Peer.config
      self.constraints = self._transformConstraints(opts.constraints || Peer.constraints)
      self.offerConstraints = self._transformConstraints(opts.offerConstraints || {})
      self.answerConstraints = self._transformConstraints(opts.answerConstraints || {})
      self.reconnectTimer = opts.reconnectTimer || false
      self.sdpTransform = opts.sdpTransform || function (sdp) { return sdp }
      self.stream = opts.stream || false
      self.trickle = opts.trickle !== undefined ? opts.trickle : true
    
      self.destroyed = false
      self.connected = false
    
      self.remoteAddress = undefined
      self.remoteFamily = undefined
      self.remotePort = undefined
      self.localAddress = undefined
      self.localPort = undefined
    
      self._wrtc = (opts.wrtc && typeof opts.wrtc === 'object')
        ? opts.wrtc
        : getBrowserRTC()
    
      if (!self._wrtc) {
        if (typeof window === 'undefined') {
          throw new Error('No WebRTC support: Specify `opts.wrtc` option in this environment')
        } else {
          throw new Error('No WebRTC support: Not a supported browser')
        }
      }
    
      self._pcReady = false
      self._channelReady = false
      self._iceComplete = false // ice candidate trickle done (got null candidate)
      self._channel = null
      self._pendingCandidates = []
      self._previousStreams = []
    
      self._chunk = null
      self._cb = null
      self._interval = null
      self._reconnectTimeout = null
    
      self._pc = new (self._wrtc.RTCPeerConnection)(self.config, self.constraints)
    
      // We prefer feature detection whenever possible, but sometimes that's not
      // possible for certain implementations.
      self._isWrtc = Array.isArray(self._pc.RTCIceConnectionStates)
      self._isReactNativeWebrtc = typeof self._pc._peerConnectionId === 'number'
    
      self._pc.oniceconnectionstatechange = function () {
        self._onIceStateChange()
      }
      self._pc.onicegatheringstatechange = function () {
        self._onIceStateChange()
      }
      self._pc.onsignalingstatechange = function () {
        self._onSignalingStateChange()
      }
      self._pc.onicecandidate = function (event) {
        self._onIceCandidate(event)
      }
    
      // Other spec events, unused by this implementation:
      // - onconnectionstatechange
      // - onicecandidateerror
      // - onfingerprintfailure
    
      if (self.initiator) {
        var createdOffer = false
        self._pc.onnegotiationneeded = function () {
          if (!createdOffer) self._createOffer()
          createdOffer = true
        }
    
        self._setupData({
          channel: self._pc.createDataChannel(self.channelName, self.channelConfig)
        })
      } else {
        self._pc.ondatachannel = function (event) {
          self._setupData(event)
        }
      }
    
      if ('addTrack' in self._pc) {
        // WebRTC Spec, Firefox
        if (self.stream) {
          self.stream.getTracks().forEach(function (track) {
            self._pc.addTrack(track, self.stream)
          })
        }
        self._pc.ontrack = function (event) {
          self._onTrack(event)
        }
      } else {
        // Chrome, etc. This can be removed once all browsers support `ontrack`
        if (self.stream) self._pc.addStream(self.stream)
        self._pc.onaddstream = function (event) {
          self._onAddStream(event)
        }
      }
    
      // HACK: wrtc doesn't fire the 'negotionneeded' event
      if (self.initiator && self._isWrtc) {
        self._pc.onnegotiationneeded()
      }
    
      self._onFinishBound = function () {
        self._onFinish()
      }
      self.once('finish', self._onFinishBound)
    }
    
    Peer.WEBRTC_SUPPORT = !!getBrowserRTC()
    
    /**
     * Expose config, constraints, and data channel config for overriding all Peer
     * instances. Otherwise, just set opts.config, opts.constraints, or opts.channelConfig
     * when constructing a Peer.
     */
    Peer.config = {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        },
        {
          urls: 'stun:global.stun.twilio.com:3478?transport=udp'
        }
      ]
    }
    Peer.constraints = {}
    Peer.channelConfig = {}
    
    Object.defineProperty(Peer.prototype, 'bufferSize', {
      get: function () {
        var self = this
        return (self._channel && self._channel.bufferedAmount) || 0
      }
    })
    
    Peer.prototype.address = function () {
      var self = this
      return { port: self.localPort, family: 'IPv4', address: self.localAddress }
    }
    
    Peer.prototype.signal = function (data) {
      var self = this
      if (self.destroyed) throw new Error('cannot signal after peer is destroyed')
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data)
        } catch (err) {
          data = {}
        }
      }
      self._debug('signal()')
    
      if (data.candidate) {
        if (self._pc.remoteDescription && self._pc.remoteDescription.type) self._addIceCandidate(data.candidate)
        else self._pendingCandidates.push(data.candidate)
      }
      if (data.sdp) {
        self._pc.setRemoteDescription(new (self._wrtc.RTCSessionDescription)(data), function () {
          if (self.destroyed) return
    
          self._pendingCandidates.forEach(function (candidate) {
            self._addIceCandidate(candidate)
          })
          self._pendingCandidates = []
    
          if (self._pc.remoteDescription.type === 'offer') self._createAnswer()
        }, function (err) { self.destroy(err) })
      }
      if (!data.sdp && !data.candidate) {
        self.destroy(new Error('signal() called with invalid signal data'))
      }
    }
    
    Peer.prototype._addIceCandidate = function (candidate) {
      var self = this
      try {
        self._pc.addIceCandidate(
          new self._wrtc.RTCIceCandidate(candidate),
          noop,
          function (err) { self.destroy(err) }
        )
      } catch (err) {
        self.destroy(new Error('error adding candidate: ' + err.message))
      }
    }
    
    /**
     * Send text/binary data to the remote peer.
     * @param {TypedArrayView|ArrayBuffer|Buffer|string|Blob|Object} chunk
     */
    Peer.prototype.send = function (chunk) {
      var self = this
      self._channel.send(chunk)
    }
    
    // TODO: Delete this method once readable-stream is updated to contain a default
    // implementation of destroy() that automatically calls _destroy()
    // See: https://github.com/nodejs/readable-stream/issues/283
    Peer.prototype.destroy = function (err) {
      var self = this
      self._destroy(err, function () {})
    }
    
    Peer.prototype._destroy = function (err, cb) {
      var self = this
      if (self.destroyed) return
    
      self._debug('destroy (error: %s)', err && (err.message || err))
    
      self.readable = self.writable = false
    
      if (!self._readableState.ended) self.push(null)
      if (!self._writableState.finished) self.end()
    
      self.destroyed = true
      self.connected = false
      self._pcReady = false
      self._channelReady = false
      self._previousStreams = null
    
      clearInterval(self._interval)
      clearTimeout(self._reconnectTimeout)
      self._interval = null
      self._reconnectTimeout = null
      self._chunk = null
      self._cb = null
    
      if (self._onFinishBound) self.removeListener('finish', self._onFinishBound)
      self._onFinishBound = null
    
      if (self._pc) {
        try {
          self._pc.close()
        } catch (err) {}
    
        self._pc.oniceconnectionstatechange = null
        self._pc.onicegatheringstatechange = null
        self._pc.onsignalingstatechange = null
        self._pc.onicecandidate = null
        if ('addTrack' in self._pc) {
          self._pc.ontrack = null
        } else {
          self._pc.onaddstream = null
        }
        self._pc.onnegotiationneeded = null
        self._pc.ondatachannel = null
      }
    
      if (self._channel) {
        try {
          self._channel.close()
        } catch (err) {}
    
        self._channel.onmessage = null
        self._channel.onopen = null
        self._channel.onclose = null
        self._channel.onerror = null
      }
      self._pc = null
      self._channel = null
    
      if (err) self.emit('error', err)
      self.emit('close')
      cb()
    }
    
    Peer.prototype._setupData = function (event) {
      var self = this
      if (!event.channel) {
        // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
        // which is invalid behavior. Handle it gracefully.
        // See: https://github.com/feross/simple-peer/issues/163
        return self.destroy(new Error('Data channel event is missing `channel` property'))
      }
    
      self._channel = event.channel
      self._channel.binaryType = 'arraybuffer'
    
      if (typeof self._channel.bufferedAmountLowThreshold === 'number') {
        self._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT
      }
    
      self.channelName = self._channel.label
    
      self._channel.onmessage = function (event) {
        self._onChannelMessage(event)
      }
      self._channel.onbufferedamountlow = function () {
        self._onChannelBufferedAmountLow()
      }
      self._channel.onopen = function () {
        self._onChannelOpen()
      }
      self._channel.onclose = function () {
        self._onChannelClose()
      }
      self._channel.onerror = function (err) {
        self.destroy(err)
      }
    }
    
    Peer.prototype._read = function () {}
    
    Peer.prototype._write = function (chunk, encoding, cb) {
      var self = this
      if (self.destroyed) return cb(new Error('cannot write after peer is destroyed'))
    
      if (self.connected) {
        try {
          self.send(chunk)
        } catch (err) {
          return self.destroy(err)
        }
        if (self._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
          self._debug('start backpressure: bufferedAmount %d', self._channel.bufferedAmount)
          self._cb = cb
        } else {
          cb(null)
        }
      } else {
        self._debug('write before connect')
        self._chunk = chunk
        self._cb = cb
      }
    }
    
    // When stream finishes writing, close socket. Half open connections are not
    // supported.
    Peer.prototype._onFinish = function () {
      var self = this
      if (self.destroyed) return
    
      if (self.connected) {
        destroySoon()
      } else {
        self.once('connect', destroySoon)
      }
    
      // Wait a bit before destroying so the socket flushes.
      // TODO: is there a more reliable way to accomplish this?
      function destroySoon () {
        setTimeout(function () {
          self.destroy()
        }, 1000)
      }
    }
    
    Peer.prototype._createOffer = function () {
      var self = this
      if (self.destroyed) return
    
      self._pc.createOffer(function (offer) {
        if (self.destroyed) return
        offer.sdp = self.sdpTransform(offer.sdp)
        self._pc.setLocalDescription(offer, onSuccess, onError)
    
        function onSuccess () {
          if (self.destroyed) return
          if (self.trickle || self._iceComplete) sendOffer()
          else self.once('_iceComplete', sendOffer) // wait for candidates
        }
    
        function onError (err) {
          self.destroy(err)
        }
    
        function sendOffer () {
          var signal = self._pc.localDescription || offer
          self._debug('signal')
          self.emit('signal', {
            type: signal.type,
            sdp: signal.sdp
          })
        }
      }, function (err) { self.destroy(err) }, self.offerConstraints)
    }
    
    Peer.prototype._createAnswer = function () {
      var self = this
      if (self.destroyed) return
    
      self._pc.createAnswer(function (answer) {
        if (self.destroyed) return
        answer.sdp = self.sdpTransform(answer.sdp)
        self._pc.setLocalDescription(answer, onSuccess, onError)
    
        function onSuccess () {
          if (self.destroyed) return
          if (self.trickle || self._iceComplete) sendAnswer()
          else self.once('_iceComplete', sendAnswer)
        }
    
        function onError (err) {
          self.destroy(err)
        }
    
        function sendAnswer () {
          var signal = self._pc.localDescription || answer
          self._debug('signal')
          self.emit('signal', {
            type: signal.type,
            sdp: signal.sdp
          })
        }
      }, function (err) { self.destroy(err) }, self.answerConstraints)
    }
    
    Peer.prototype._onIceStateChange = function () {
      var self = this
      if (self.destroyed) return
      var iceConnectionState = self._pc.iceConnectionState
      var iceGatheringState = self._pc.iceGatheringState
    
      self._debug(
        'iceStateChange (connection: %s) (gathering: %s)',
        iceConnectionState,
        iceGatheringState
      )
      self.emit('iceStateChange', iceConnectionState, iceGatheringState)
    
      if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
        clearTimeout(self._reconnectTimeout)
        self._pcReady = true
        self._maybeReady()
      }
      if (iceConnectionState === 'disconnected') {
        if (self.reconnectTimer) {
          // If user has set `opt.reconnectTimer`, allow time for ICE to attempt a reconnect
          clearTimeout(self._reconnectTimeout)
          self._reconnectTimeout = setTimeout(function () {
            self.destroy()
          }, self.reconnectTimer)
        } else {
          self.destroy()
        }
      }
      if (iceConnectionState === 'failed') {
        self.destroy(new Error('Ice connection failed.'))
      }
      if (iceConnectionState === 'closed') {
        self.destroy()
      }
    }
    
    Peer.prototype.getStats = function (cb) {
      var self = this
    
      // Promise-based getStats() (standard)
      if (self._pc.getStats.length === 0) {
        self._pc.getStats().then(function (res) {
          var reports = []
          res.forEach(function (report) {
            reports.push(report)
          })
          cb(null, reports)
        }, function (err) { cb(err) })
    
      // Two-parameter callback-based getStats() (deprecated, former standard)
      } else if (self._isReactNativeWebrtc) {
        self._pc.getStats(null, function (res) {
          var reports = []
          res.forEach(function (report) {
            reports.push(report)
          })
          cb(null, reports)
        }, function (err) { cb(err) })
    
      // Single-parameter callback-based getStats() (non-standard)
      } else if (self._pc.getStats.length > 0) {
        self._pc.getStats(function (res) {
          // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
          if (self.destroyed) return
    
          var reports = []
          res.result().forEach(function (result) {
            var report = {}
            result.names().forEach(function (name) {
              report[name] = result.stat(name)
            })
            report.id = result.id
            report.type = result.type
            report.timestamp = result.timestamp
            reports.push(report)
          })
          cb(null, reports)
        }, function (err) { cb(err) })
    
      // Unknown browser, skip getStats() since it's anyone's guess which style of
      // getStats() they implement.
      } else {
        cb(null, [])
      }
    }
    
    Peer.prototype._maybeReady = function () {
      var self = this
      self._debug('maybeReady pc %s channel %s', self._pcReady, self._channelReady)
      if (self.connected || self._connecting || !self._pcReady || !self._channelReady) return
    
      self._connecting = true
    
      // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
      function findCandidatePair () {
        if (self.destroyed) return
    
        self.getStats(function (err, items) {
          if (self.destroyed) return
    
          // Treat getStats error as non-fatal. It's not essential.
          if (err) items = []
    
          var remoteCandidates = {}
          var localCandidates = {}
          var candidatePairs = {}
          var foundSelectedCandidatePair = false
    
          items.forEach(function (item) {
            // TODO: Once all browsers support the hyphenated stats report types, remove
            // the non-hypenated ones
            if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
              remoteCandidates[item.id] = item
            }
            if (item.type === 'localcandidate' || item.type === 'local-candidate') {
              localCandidates[item.id] = item
            }
            if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
              candidatePairs[item.id] = item
            }
          })
    
          items.forEach(function (item) {
            // Spec-compliant
            if (item.type === 'transport') {
              setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId])
            }
    
            // Old implementations
            if (
              (item.type === 'googCandidatePair' && item.googActiveConnection === 'true') ||
              ((item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected)
            ) {
              setSelectedCandidatePair(item)
            }
          })
    
          function setSelectedCandidatePair (selectedCandidatePair) {
            foundSelectedCandidatePair = true
    
            var local = localCandidates[selectedCandidatePair.localCandidateId]
    
            if (local && local.ip) {
              // Spec
              self.localAddress = local.ip
              self.localPort = Number(local.port)
            } else if (local && local.ipAddress) {
              // Firefox
              self.localAddress = local.ipAddress
              self.localPort = Number(local.portNumber)
            } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
              // TODO: remove this once Chrome 58 is released
              local = selectedCandidatePair.googLocalAddress.split(':')
              self.localAddress = local[0]
              self.localPort = Number(local[1])
            }
    
            var remote = remoteCandidates[selectedCandidatePair.remoteCandidateId]
    
            if (remote && remote.ip) {
              // Spec
              self.remoteAddress = remote.ip
              self.remotePort = Number(remote.port)
            } else if (remote && remote.ipAddress) {
              // Firefox
              self.remoteAddress = remote.ipAddress
              self.remotePort = Number(remote.portNumber)
            } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
              // TODO: remove this once Chrome 58 is released
              remote = selectedCandidatePair.googRemoteAddress.split(':')
              self.remoteAddress = remote[0]
              self.remotePort = Number(remote[1])
            }
            self.remoteFamily = 'IPv4'
    
            self._debug(
              'connect local: %s:%s remote: %s:%s',
              self.localAddress, self.localPort, self.remoteAddress, self.remotePort
            )
          }
    
          // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
          // But wait until at least 1 candidate pair is available
          if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
            setTimeout(findCandidatePair, 100)
            return
          } else {
            self._connecting = false
            self.connected = true
          }
    
          if (self._chunk) {
            try {
              self.send(self._chunk)
            } catch (err) {
              return self.destroy(err)
            }
            self._chunk = null
            self._debug('sent chunk from "write before connect"')
    
            var cb = self._cb
            self._cb = null
            cb(null)
          }
    
          // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
          // fallback to using setInterval to implement backpressure.
          if (typeof self._channel.bufferedAmountLowThreshold !== 'number') {
            self._interval = setInterval(function () { self._onInterval() }, 150)
            if (self._interval.unref) self._interval.unref()
          }
    
          self._debug('connect')
          self.emit('connect')
        })
      }
      findCandidatePair()
    }
    
    Peer.prototype._onInterval = function () {
      var self = this
      if (!self._cb || !self._channel || self._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
        return
      }
      self._onChannelBufferedAmountLow()
    }
    
    Peer.prototype._onSignalingStateChange = function () {
      var self = this
      if (self.destroyed) return
      self._debug('signalingStateChange %s', self._pc.signalingState)
      self.emit('signalingStateChange', self._pc.signalingState)
    }
    
    Peer.prototype._onIceCandidate = function (event) {
      var self = this
      if (self.destroyed) return
      if (event.candidate && self.trickle) {
        self.emit('signal', {
          candidate: {
            candidate: event.candidate.candidate,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            sdpMid: event.candidate.sdpMid
          }
        })
      } else if (!event.candidate) {
        self._iceComplete = true
        self.emit('_iceComplete')
      }
    }
    
    Peer.prototype._onChannelMessage = function (event) {
      var self = this
      if (self.destroyed) return
      var data = event.data
      if (data instanceof ArrayBuffer) data = Buffer.from(data)
      self.push(data)
    }
    
    Peer.prototype._onChannelBufferedAmountLow = function () {
      var self = this
      if (self.destroyed || !self._cb) return
      self._debug('ending backpressure: bufferedAmount %d', self._channel.bufferedAmount)
      var cb = self._cb
      self._cb = null
      cb(null)
    }
    
    Peer.prototype._onChannelOpen = function () {
      var self = this
      if (self.connected || self.destroyed) return
      self._debug('on channel open')
      self._channelReady = true
      self._maybeReady()
    }
    
    Peer.prototype._onChannelClose = function () {
      var self = this
      if (self.destroyed) return
      self._debug('on channel close')
      self.destroy()
    }
    
    Peer.prototype._onAddStream = function (event) {
      var self = this
      if (self.destroyed) return
      self._debug('on add stream')
      self.emit('stream', event.stream)
    }
    
    Peer.prototype._onTrack = function (event) {
      var self = this
      if (self.destroyed) return
      self._debug('on track')
      var id = event.streams[0].id
      if (self._previousStreams.indexOf(id) !== -1) return // Only fire one 'stream' event, even though there may be multiple tracks per stream
      self._previousStreams.push(id)
      self.emit('stream', event.streams[0])
    }
    
    Peer.prototype._debug = function () {
      var self = this
      var args = [].slice.call(arguments)
      args[0] = '[' + self._id + '] ' + args[0]
      debug.apply(null, args)
    }
    
    // Transform constraints objects into the new format (unless Chromium)
    // TODO: This can be removed when Chromium supports the new format
    Peer.prototype._transformConstraints = function (constraints) {
      var self = this
    
      if (Object.keys(constraints).length === 0) {
        return constraints
      }
    
      if ((constraints.mandatory || constraints.optional) && !self._isChromium) {
        // convert to new format
    
        // Merge mandatory and optional objects, prioritizing mandatory
        var newConstraints = Object.assign({}, constraints.optional, constraints.mandatory)
    
        // fix casing
        if (newConstraints.OfferToReceiveVideo !== undefined) {
          newConstraints.offerToReceiveVideo = newConstraints.OfferToReceiveVideo
          delete newConstraints['OfferToReceiveVideo']
        }
    
        if (newConstraints.OfferToReceiveAudio !== undefined) {
          newConstraints.offerToReceiveAudio = newConstraints.OfferToReceiveAudio
          delete newConstraints['OfferToReceiveAudio']
        }
    
        return newConstraints
      } else if (!constraints.mandatory && !constraints.optional && self._isChromium) {
        // convert to old format
    
        // fix casing
        if (constraints.offerToReceiveVideo !== undefined) {
          constraints.OfferToReceiveVideo = constraints.offerToReceiveVideo
          delete constraints['offerToReceiveVideo']
        }
    
        if (constraints.offerToReceiveAudio !== undefined) {
          constraints.OfferToReceiveAudio = constraints.offerToReceiveAudio
          delete constraints['offerToReceiveAudio']
        }
    
        return {
          mandatory: constraints // NOTE: All constraints are upgraded to mandatory
        }
      }
    
      return constraints
    }
    
    function noop () {}
    
    }).call(this,require("buffer").Buffer)
    },{"buffer":4,"debug":28,"get-browser-rtc":7,"inherits":10,"randombytes":15,"readable-stream":24}],28:[function(require,module,exports){
    (function (process){
    "use strict";
    
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    /* eslint-env browser */
    
    /**
     * This is the web browser implementation of `debug()`.
     */
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    /**
     * Colors.
     */
    
    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */
    // eslint-disable-next-line complexity
    
    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      } // Internet Explorer and Edge do not support colors.
    
    
      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      } // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    
    
      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */
    
    
    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    
      if (!this.useColors) {
        return;
      }
    
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into
    
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }
    
        index++;
    
        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */
    
    
    function log() {
      var _console;
    
      // This hackery is required for IE8/9, where
      // the `console.log` function doesn't have 'apply'
      return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    
    
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {// Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */
    
    
    function load() {
      var r;
    
      try {
        r = exports.storage.getItem('debug');
      } catch (error) {} // Swallow
      // XXX (@Qix-) should we be logging these?
      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    
    
      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }
    
      return r;
    }
    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */
    
    
    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {// Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    
    module.exports = require('./common')(exports);
    var formatters = module.exports.formatters;
    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */
    
    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
    
    
    }).call(this,require('_process'))
    },{"./common":29,"_process":14}],29:[function(require,module,exports){
    "use strict";
    
    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     */
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require('ms');
      Object.keys(env).forEach(function (key) {
        createDebug[key] = env[key];
      });
      /**
      * Active `debug` instances.
      */
    
      createDebug.instances = [];
      /**
      * The currently active debug mode names, and names to skip.
      */
    
      createDebug.names = [];
      createDebug.skips = [];
      /**
      * Map of special "%n" handling functions, for the debug "format" argument.
      *
      * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
      */
    
      createDebug.formatters = {};
      /**
      * Selects a color for a debug namespace
      * @param {String} namespace The namespace string for the for the debug instance to be colored
      * @return {Number|String} An ANSI color code for the given namespace
      * @api private
      */
    
      function selectColor(namespace) {
        var hash = 0;
    
        for (var i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0; // Convert to 32bit integer
        }
    
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
    
      createDebug.selectColor = selectColor;
      /**
      * Create a debugger with the given `namespace`.
      *
      * @param {String} namespace
      * @return {Function}
      * @api public
      */
    
      function createDebug(namespace) {
        var prevTime;
    
        function debug() {
          // Disabled?
          if (!debug.enabled) {
            return;
          }
    
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
    
          var self = debug; // Set `diff` timestamp
    
          var curr = Number(new Date());
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
    
          if (typeof args[0] !== 'string') {
            // Anything else let's inspect with %O
            args.unshift('%O');
          } // Apply any `formatters` transformations
    
    
          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            // If we encounter an escaped % then don't increase the array index
            if (match === '%%') {
              return match;
            }
    
            index++;
            var formatter = createDebug.formatters[format];
    
            if (typeof formatter === 'function') {
              var val = args[index];
              match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`
    
              args.splice(index, 1);
              index--;
            }
    
            return match;
          }); // Apply env-specific formatting (colors, etc.)
    
          createDebug.formatArgs.call(self, args);
          var logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
    
        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances
    
        if (typeof createDebug.init === 'function') {
          createDebug.init(debug);
        }
    
        createDebug.instances.push(debug);
        return debug;
      }
    
      function destroy() {
        var index = createDebug.instances.indexOf(this);
    
        if (index !== -1) {
          createDebug.instances.splice(index, 1);
          return true;
        }
    
        return false;
      }
    
      function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      }
      /**
      * Enables a debug mode by namespaces. This can include modes
      * separated by a colon and wildcards.
      *
      * @param {String} namespaces
      * @api public
      */
    
    
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;
    
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            // ignore empty strings
            continue;
          }
    
          namespaces = split[i].replace(/\*/g, '.*?');
    
          if (namespaces[0] === '-') {
            createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            createDebug.names.push(new RegExp('^' + namespaces + '$'));
          }
        }
    
        for (i = 0; i < createDebug.instances.length; i++) {
          var instance = createDebug.instances[i];
          instance.enabled = createDebug.enabled(instance.namespace);
        }
      }
      /**
      * Disable debug output.
      *
      * @api public
      */
    
    
      function disable() {
        createDebug.enable('');
      }
      /**
      * Returns true if the given mode name is enabled, false otherwise.
      *
      * @param {String} name
      * @return {Boolean}
      * @api public
      */
    
    
      function enabled(name) {
        if (name[name.length - 1] === '*') {
          return true;
        }
    
        var i;
        var len;
    
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
    
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
    
        return false;
      }
      /**
      * Coerce `val`.
      *
      * @param {Mixed} val
      * @return {Mixed}
      * @api private
      */
    
    
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
    
        return val;
      }
    
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    
    module.exports = setup;
    
    
    },{"ms":30}],30:[function(require,module,exports){
    /**
     * Helpers.
     */
    
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    
    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */
    
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === 'string' && val.length > 0) {
        return parse(val);
      } else if (type === 'number' && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(val)
      );
    };
    
    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */
    
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'weeks':
        case 'week':
        case 'w':
          return n * w;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
      }
    }
    
    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */
    
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + 's';
      }
      return ms + 'ms';
    }
    
    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */
    
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
      }
      return ms + ' ms';
    }
    
    /**
     * Pluralization helper.
     */
    
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    }
    
    },{}],31:[function(require,module,exports){
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    'use strict';
    
    /*<replacement>*/
    
    var Buffer = require('safe-buffer').Buffer;
    /*</replacement>*/
    
    var isEncoding = Buffer.isEncoding || function (encoding) {
      encoding = '' + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
          return true;
        default:
          return false;
      }
    };
    
    function _normalizeEncoding(enc) {
      if (!enc) return 'utf8';
      var retried;
      while (true) {
        switch (enc) {
          case 'utf8':
          case 'utf-8':
            return 'utf8';
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return 'utf16le';
          case 'latin1':
          case 'binary':
            return 'latin1';
          case 'base64':
          case 'ascii':
          case 'hex':
            return enc;
          default:
            if (retried) return; // undefined
            enc = ('' + enc).toLowerCase();
            retried = true;
        }
      }
    };
    
    // Do not cache `Buffer.isEncoding` when checking encoding names as some
    // modules monkey-patch it to support additional encodings
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
      return nenc || enc;
    }
    
    // StringDecoder provides an interface for efficiently splitting a series of
    // buffers into a series of JS strings without breaking apart multi-byte
    // characters.
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case 'utf16le':
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case 'utf8':
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case 'base64':
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer.allocUnsafe(nb);
    }
    
    StringDecoder.prototype.write = function (buf) {
      if (buf.length === 0) return '';
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || '';
    };
    
    StringDecoder.prototype.end = utf8End;
    
    // Returns only complete characters in a Buffer
    StringDecoder.prototype.text = utf8Text;
    
    // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
    StringDecoder.prototype.fillLast = function (buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    
    // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
    // continuation byte. If an invalid byte is detected, -2 is returned.
    function utf8CheckByte(byte) {
      if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
      return byte >> 6 === 0x02 ? -1 : -2;
    }
    
    // Checks at most 3 bytes at the end of a Buffer in order to detect an
    // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
    // needed to complete the UTF-8 character (if applicable) are returned.
    function utf8CheckIncomplete(self, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    
    // Validates as many continuation bytes for a multi-byte UTF-8 character as
    // needed or are available. If we see a non-continuation byte where we expect
    // one, we "replace" the validated continuation bytes we've seen so far with
    // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
    // behavior. The continuation byte check is included three times in the case
    // where all of the continuation bytes for a character exist in the same buffer.
    // It is also done this way as a slight performance increase instead of using a
    // loop.
    function utf8CheckExtraBytes(self, buf, p) {
      if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return '\ufffd';
      }
      if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
          self.lastNeed = 1;
          return '\ufffd';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 0xC0) !== 0x80) {
            self.lastNeed = 2;
            return '\ufffd';
          }
        }
      }
    }
    
    // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== undefined) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    
    // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
    // partial character, the character's bytes are buffered until the required
    // number of bytes are available.
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString('utf8', i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString('utf8', i, end);
    }
    
    // For UTF-8, a replacement character is added when ending on a partial
    // character.
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) return r + '\ufffd';
      return r;
    }
    
    // UTF-16LE typically needs two bytes per character, but even if we have an even
    // number of bytes available, we need to check if we end on a leading/high
    // surrogate. In that case, we need to wait for the next two bytes in order to
    // decode the last character properly.
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 0xD800 && c <= 0xDBFF) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString('utf16le', i, buf.length - 1);
    }
    
    // For UTF-16LE we do not explicitly append special replacement characters if we
    // end on a partial character, we simply let v8 handle that.
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
      }
      return r;
    }
    
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString('base64', i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString('base64', i, buf.length - n);
    }
    
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
      return r;
    }
    
    // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : '';
    }
    },{"safe-buffer":25}],32:[function(require,module,exports){
    (function (setImmediate,clearImmediate){
    var nextTick = require('process/browser.js').nextTick;
    var apply = Function.prototype.apply;
    var slice = Array.prototype.slice;
    var immediateIds = {};
    var nextImmediateId = 0;
    
    // DOM APIs, for completeness
    
    exports.setTimeout = function() {
      return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
    };
    exports.setInterval = function() {
      return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
    };
    exports.clearTimeout =
    exports.clearInterval = function(timeout) { timeout.close(); };
    
    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }
    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
    Timeout.prototype.close = function() {
      this._clearFn.call(window, this._id);
    };
    
    // Does not start the time, just sets up the members needed.
    exports.enroll = function(item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };
    
    exports.unenroll = function(item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };
    
    exports._unrefActive = exports.active = function(item) {
      clearTimeout(item._idleTimeoutId);
    
      var msecs = item._idleTimeout;
      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout)
            item._onTimeout();
        }, msecs);
      }
    };
    
    // That's not how node.js implements it but the exposed api is the same.
    exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
      var id = nextImmediateId++;
      var args = arguments.length < 2 ? false : slice.call(arguments, 1);
    
      immediateIds[id] = true;
    
      nextTick(function onNextTick() {
        if (immediateIds[id]) {
          // fn.call() is faster so we optimize for the common use-case
          // @see http://jsperf.com/call-apply-segu
          if (args) {
            fn.apply(null, args);
          } else {
            fn.call(null);
          }
          // Prevent ids from leaking
          exports.clearImmediate(id);
        }
      });
    
      return id;
    };
    
    exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
      delete immediateIds[id];
    };
    }).call(this,require("timers").setImmediate,require("timers").clearImmediate)
    },{"process/browser.js":14,"timers":32}],33:[function(require,module,exports){
    (function (global){
    
    /**
     * Module exports.
     */
    
    module.exports = deprecate;
    
    /**
     * Mark that a method should not be used.
     * Returns a modified function which warns once by default.
     *
     * If `localStorage.noDeprecation = true` is set, then it is a no-op.
     *
     * If `localStorage.throwDeprecation = true` is set, then deprecated functions
     * will throw an Error when invoked.
     *
     * If `localStorage.traceDeprecation = true` is set, then deprecated functions
     * will invoke `console.trace()` instead of `console.error()`.
     *
     * @param {Function} fn - the function to deprecate
     * @param {String} msg - the string to print to the console when `fn` is invoked
     * @returns {Function} a new "deprecated" version of `fn`
     * @api public
     */
    
    function deprecate (fn, msg) {
      if (config('noDeprecation')) {
        return fn;
      }
    
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config('throwDeprecation')) {
            throw new Error(msg);
          } else if (config('traceDeprecation')) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
    
      return deprecated;
    }
    
    /**
     * Checks `localStorage` for boolean values for the given `name`.
     *
     * @param {String} name
     * @returns {Boolean}
     * @api private
     */
    
    function config (name) {
      // accessing global.localStorage can trigger a DOMException in sandboxed iframes
      try {
        if (!global.localStorage) return false;
      } catch (_) {
        return false;
      }
      var val = global.localStorage[name];
      if (null == val) return false;
      return String(val).toLowerCase() === 'true';
    }
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}],34:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    
    'use strict';
    
    // Shimming starts here.
    (function() {
      // Utils.
      var logging = require('./utils').log;
      var browserDetails = require('./utils').browserDetails;
      // Export to the adapter global object visible in the browser.
      module.exports.browserDetails = browserDetails;
      module.exports.extractVersion = require('./utils').extractVersion;
      module.exports.disableLog = require('./utils').disableLog;
    
      // Uncomment the line below if you want logging to occur, including logging
      // for the switch statement below. Can also be turned on in the browser via
      // adapter.disableLog(false), but then logging from the switch statement below
      // will not appear.
      // require('./utils').disableLog(false);
    
      // Browser shims.
      var chromeShim = require('./chrome/chrome_shim') || null;
      var edgeShim = require('./edge/edge_shim') || null;
      var firefoxShim = require('./firefox/firefox_shim') || null;
      var safariShim = require('./safari/safari_shim') || null;
    
      // Shim browser if found.
      switch (browserDetails.browser) {
        case 'opera': // fallthrough as it uses chrome shims
        case 'chrome':
          if (!chromeShim || !chromeShim.shimPeerConnection) {
            logging('Chrome shim is not included in this adapter release.');
            return;
          }
          logging('adapter.js shimming chrome.');
          // Export to the adapter global object visible in the browser.
          module.exports.browserShim = chromeShim;
    
          chromeShim.shimGetUserMedia();
          chromeShim.shimMediaStream();
          chromeShim.shimSourceObject();
          chromeShim.shimPeerConnection();
          chromeShim.shimOnTrack();
          break;
        case 'firefox':
          if (!firefoxShim || !firefoxShim.shimPeerConnection) {
            logging('Firefox shim is not included in this adapter release.');
            return;
          }
          logging('adapter.js shimming firefox.');
          // Export to the adapter global object visible in the browser.
          module.exports.browserShim = firefoxShim;
    
          firefoxShim.shimGetUserMedia();
          firefoxShim.shimSourceObject();
          firefoxShim.shimPeerConnection();
          firefoxShim.shimOnTrack();
          break;
        case 'edge':
          if (!edgeShim || !edgeShim.shimPeerConnection) {
            logging('MS edge shim is not included in this adapter release.');
            return;
          }
          logging('adapter.js shimming edge.');
          // Export to the adapter global object visible in the browser.
          module.exports.browserShim = edgeShim;
    
          edgeShim.shimGetUserMedia();
          edgeShim.shimPeerConnection();
          break;
        case 'safari':
          if (!safariShim) {
            logging('Safari shim is not included in this adapter release.');
            return;
          }
          logging('adapter.js shimming safari.');
          // Export to the adapter global object visible in the browser.
          module.exports.browserShim = safariShim;
    
          safariShim.shimGetUserMedia();
          break;
        default:
          logging('Unsupported browser!');
      }
    })();
    
    },{"./chrome/chrome_shim":35,"./edge/edge_shim":37,"./firefox/firefox_shim":39,"./safari/safari_shim":41,"./utils":42}],35:[function(require,module,exports){
    
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    var logging = require('../utils.js').log;
    var browserDetails = require('../utils.js').browserDetails;
    
    var chromeShim = {
      shimMediaStream: function() {
        window.MediaStream = window.MediaStream || window.webkitMediaStream;
      },
    
      shimOnTrack: function() {
        if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
            window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get: function() {
              return this._ontrack;
            },
            set: function(f) {
              var self = this;
              if (this._ontrack) {
                this.removeEventListener('track', this._ontrack);
                this.removeEventListener('addstream', this._ontrackpoly);
              }
              this.addEventListener('track', this._ontrack = f);
              this.addEventListener('addstream', this._ontrackpoly = function(e) {
                // onaddstream does not fire when a track is added to an existing
                // stream. But stream.onaddtrack is implemented so we use that.
                e.stream.addEventListener('addtrack', function(te) {
                  var event = new Event('track');
                  event.track = te.track;
                  event.receiver = {track: te.track};
                  event.streams = [e.stream];
                  self.dispatchEvent(event);
                });
                e.stream.getTracks().forEach(function(track) {
                  var event = new Event('track');
                  event.track = track;
                  event.receiver = {track: track};
                  event.streams = [e.stream];
                  this.dispatchEvent(event);
                }.bind(this));
              }.bind(this));
            }
          });
        }
      },
    
      shimSourceObject: function() {
        if (typeof window === 'object') {
          if (window.HTMLMediaElement &&
            !('srcObject' in window.HTMLMediaElement.prototype)) {
            // Shim the srcObject property, once, when HTMLMediaElement is found.
            Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
              get: function() {
                return this._srcObject;
              },
              set: function(stream) {
                var self = this;
                // Use _srcObject as a private property for this shim
                this._srcObject = stream;
                if (this.src) {
                  URL.revokeObjectURL(this.src);
                }
    
                if (!stream) {
                  this.src = '';
                  return;
                }
                this.src = URL.createObjectURL(stream);
                // We need to recreate the blob url when a track is added or
                // removed. Doing it manually since we want to avoid a recursion.
                stream.addEventListener('addtrack', function() {
                  if (self.src) {
                    URL.revokeObjectURL(self.src);
                  }
                  self.src = URL.createObjectURL(stream);
                });
                stream.addEventListener('removetrack', function() {
                  if (self.src) {
                    URL.revokeObjectURL(self.src);
                  }
                  self.src = URL.createObjectURL(stream);
                });
              }
            });
          }
        }
      },
    
      shimPeerConnection: function() {
        // The RTCPeerConnection object.
        window.RTCPeerConnection = function(pcConfig, pcConstraints) {
          // Translate iceTransportPolicy to iceTransports,
          // see https://code.google.com/p/webrtc/issues/detail?id=4869
          logging('PeerConnection');
          if (pcConfig && pcConfig.iceTransportPolicy) {
            pcConfig.iceTransports = pcConfig.iceTransportPolicy;
          }
    
          var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints);
          var origGetStats = pc.getStats.bind(pc);
          pc.getStats = function(selector, successCallback, errorCallback) {
            var self = this;
            var args = arguments;
    
            // If selector is a function then we are in the old style stats so just
            // pass back the original getStats format to avoid breaking old users.
            if (arguments.length > 0 && typeof selector === 'function') {
              return origGetStats(selector, successCallback);
            }
    
            var fixChromeStats_ = function(response) {
              var standardReport = {};
              var reports = response.result();
              reports.forEach(function(report) {
                var standardStats = {
                  id: report.id,
                  timestamp: report.timestamp,
                  type: report.type
                };
                report.names().forEach(function(name) {
                  standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
              });
    
              return standardReport;
            };
    
            // shim getStats with maplike support
            var makeMapStats = function(stats, legacyStats) {
              var map = new Map(Object.keys(stats).map(function(key) {
                return[key, stats[key]];
              }));
              legacyStats = legacyStats || stats;
              Object.keys(legacyStats).forEach(function(key) {
                map[key] = legacyStats[key];
              });
              return map;
            };
    
            if (arguments.length >= 2) {
              var successCallbackWrapper_ = function(response) {
                args[1](makeMapStats(fixChromeStats_(response)));
              };
    
              return origGetStats.apply(this, [successCallbackWrapper_,
                  arguments[0]]);
            }
    
            // promise-support
            return new Promise(function(resolve, reject) {
              if (args.length === 1 && typeof selector === 'object') {
                origGetStats.apply(self, [
                  function(response) {
                    resolve(makeMapStats(fixChromeStats_(response)));
                  }, reject]);
              } else {
                // Preserve legacy chrome stats only on legacy access of stats obj
                origGetStats.apply(self, [
                  function(response) {
                    resolve(makeMapStats(fixChromeStats_(response),
                        response.result()));
                  }, reject]);
              }
            }).then(successCallback, errorCallback);
          };
    
          return pc;
        };
        window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;
    
        // wrap static methods. Currently just generateCertificate.
        if (webkitRTCPeerConnection.generateCertificate) {
          Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
            get: function() {
              return webkitRTCPeerConnection.generateCertificate;
            }
          });
        }
    
        ['createOffer', 'createAnswer'].forEach(function(method) {
          var nativeMethod = webkitRTCPeerConnection.prototype[method];
          webkitRTCPeerConnection.prototype[method] = function() {
            var self = this;
            if (arguments.length < 1 || (arguments.length === 1 &&
                typeof arguments[0] === 'object')) {
              var opts = arguments.length === 1 ? arguments[0] : undefined;
              return new Promise(function(resolve, reject) {
                nativeMethod.apply(self, [resolve, reject, opts]);
              });
            }
            return nativeMethod.apply(this, arguments);
          };
        });
    
        // add promise support -- natively available in Chrome 51
        if (browserDetails.version < 51) {
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
              .forEach(function(method) {
                var nativeMethod = webkitRTCPeerConnection.prototype[method];
                webkitRTCPeerConnection.prototype[method] = function() {
                  var args = arguments;
                  var self = this;
                  var promise = new Promise(function(resolve, reject) {
                    nativeMethod.apply(self, [args[0], resolve, reject]);
                  });
                  if (args.length < 2) {
                    return promise;
                  }
                  return promise.then(function() {
                    args[1].apply(null, []);
                  },
                  function(err) {
                    if (args.length >= 3) {
                      args[2].apply(null, [err]);
                    }
                  });
                };
              });
        }
    
        // shim implicit creation of RTCSessionDescription/RTCIceCandidate
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
            .forEach(function(method) {
              var nativeMethod = webkitRTCPeerConnection.prototype[method];
              webkitRTCPeerConnection.prototype[method] = function() {
                arguments[0] = new ((method === 'addIceCandidate') ?
                    RTCIceCandidate : RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
              };
            });
    
        // support for addIceCandidate(null or undefined)
        var nativeAddIceCandidate =
            RTCPeerConnection.prototype.addIceCandidate;
        RTCPeerConnection.prototype.addIceCandidate = function() {
          if (!arguments[0]) {
            if (arguments[1]) {
              arguments[1].apply(null);
            }
            return Promise.resolve();
          }
          return nativeAddIceCandidate.apply(this, arguments);
        };
      }
    };
    
    
    // Expose public methods.
    module.exports = {
      shimMediaStream: chromeShim.shimMediaStream,
      shimOnTrack: chromeShim.shimOnTrack,
      shimSourceObject: chromeShim.shimSourceObject,
      shimPeerConnection: chromeShim.shimPeerConnection,
      shimGetUserMedia: require('./getusermedia')
    };
    
    },{"../utils.js":42,"./getusermedia":36}],36:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    var logging = require('../utils.js').log;
    
    // Expose public methods.
    module.exports = function() {
      var constraintsToChrome_ = function(c) {
        if (typeof c !== 'object' || c.mandatory || c.optional) {
          return c;
        }
        var cc = {};
        Object.keys(c).forEach(function(key) {
          if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
            return;
          }
          var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
          if (r.exact !== undefined && typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          }
          var oldname_ = function(prefix, name) {
            if (prefix) {
              return prefix + name.charAt(0).toUpperCase() + name.slice(1);
            }
            return (name === 'deviceId') ? 'sourceId' : name;
          };
          if (r.ideal !== undefined) {
            cc.optional = cc.optional || [];
            var oc = {};
            if (typeof r.ideal === 'number') {
              oc[oldname_('min', key)] = r.ideal;
              cc.optional.push(oc);
              oc = {};
              oc[oldname_('max', key)] = r.ideal;
              cc.optional.push(oc);
            } else {
              oc[oldname_('', key)] = r.ideal;
              cc.optional.push(oc);
            }
          }
          if (r.exact !== undefined && typeof r.exact !== 'number') {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_('', key)] = r.exact;
          } else {
            ['min', 'max'].forEach(function(mix) {
              if (r[mix] !== undefined) {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_(mix, key)] = r[mix];
              }
            });
          }
        });
        if (c.advanced) {
          cc.optional = (cc.optional || []).concat(c.advanced);
        }
        return cc;
      };
    
      var shimConstraints_ = function(constraints, func) {
        constraints = JSON.parse(JSON.stringify(constraints));
        if (constraints && constraints.audio) {
          constraints.audio = constraintsToChrome_(constraints.audio);
        }
        if (constraints && typeof constraints.video === 'object') {
          // Shim facingMode for mobile, where it defaults to "user".
          var face = constraints.video.facingMode;
          face = face && ((typeof face === 'object') ? face : {ideal: face});
    
          if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                        face.ideal === 'user' || face.ideal === 'environment')) &&
              !(navigator.mediaDevices.getSupportedConstraints &&
                navigator.mediaDevices.getSupportedConstraints().facingMode)) {
            delete constraints.video.facingMode;
            if (face.exact === 'environment' || face.ideal === 'environment') {
              // Look for "back" in label, or use last cam (typically back cam).
              return navigator.mediaDevices.enumerateDevices()
              .then(function(devices) {
                devices = devices.filter(function(d) {
                  return d.kind === 'videoinput';
                });
                var back = devices.find(function(d) {
                  return d.label.toLowerCase().indexOf('back') !== -1;
                }) || (devices.length && devices[devices.length - 1]);
                if (back) {
                  constraints.video.deviceId = face.exact ? {exact: back.deviceId} :
                                                            {ideal: back.deviceId};
                }
                constraints.video = constraintsToChrome_(constraints.video);
                logging('chrome: ' + JSON.stringify(constraints));
                return func(constraints);
              });
            }
          }
          constraints.video = constraintsToChrome_(constraints.video);
        }
        logging('chrome: ' + JSON.stringify(constraints));
        return func(constraints);
      };
    
      var shimError_ = function(e) {
        return {
          name: {
            PermissionDeniedError: 'NotAllowedError',
            ConstraintNotSatisfiedError: 'OverconstrainedError'
          }[e.name] || e.name,
          message: e.message,
          constraint: e.constraintName,
          toString: function() {
            return this.name + (this.message && ': ') + this.message;
          }
        };
      };
    
      var getUserMedia_ = function(constraints, onSuccess, onError) {
        shimConstraints_(constraints, function(c) {
          navigator.webkitGetUserMedia(c, onSuccess, function(e) {
            onError(shimError_(e));
          });
        });
      };
    
      navigator.getUserMedia = getUserMedia_;
    
      // Returns the result of getUserMedia as a Promise.
      var getUserMediaPromise_ = function(constraints) {
        return new Promise(function(resolve, reject) {
          navigator.getUserMedia(constraints, resolve, reject);
        });
      };
    
      if (!navigator.mediaDevices) {
        navigator.mediaDevices = {
          getUserMedia: getUserMediaPromise_,
          enumerateDevices: function() {
            return new Promise(function(resolve) {
              var kinds = {audio: 'audioinput', video: 'videoinput'};
              return MediaStreamTrack.getSources(function(devices) {
                resolve(devices.map(function(device) {
                  return {label: device.label,
                          kind: kinds[device.kind],
                          deviceId: device.id,
                          groupId: ''};
                }));
              });
            });
          }
        };
      }
    
      // A shim for getUserMedia method on the mediaDevices object.
      // TODO(KaptenJansson) remove once implemented in Chrome stable.
      if (!navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          return getUserMediaPromise_(constraints);
        };
      } else {
        // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
        // function which returns a Promise, it does not accept spec-style
        // constraints.
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.
            bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(cs) {
          return shimConstraints_(cs, function(c) {
            return origGetUserMedia(c).then(function(stream) {
              if (c.audio && !stream.getAudioTracks().length ||
                  c.video && !stream.getVideoTracks().length) {
                stream.getTracks().forEach(function(track) {
                  track.stop();
                });
                throw new DOMException('', 'NotFoundError');
              }
              return stream;
            }, function(e) {
              return Promise.reject(shimError_(e));
            });
          });
        };
      }
    
      // Dummy devicechange event methods.
      // TODO(KaptenJansson) remove once implemented in Chrome stable.
      if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
        navigator.mediaDevices.addEventListener = function() {
          logging('Dummy mediaDevices.addEventListener called.');
        };
      }
      if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
        navigator.mediaDevices.removeEventListener = function() {
          logging('Dummy mediaDevices.removeEventListener called.');
        };
      }
    };
    
    },{"../utils.js":42}],37:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var SDPUtils = require('sdp');
    var browserDetails = require('../utils').browserDetails;
    
    var edgeShim = {
      shimPeerConnection: function() {
        if (window.RTCIceGatherer) {
          // ORTC defines an RTCIceCandidate object but no constructor.
          // Not implemented in Edge.
          if (!window.RTCIceCandidate) {
            window.RTCIceCandidate = function(args) {
              return args;
            };
          }
          // ORTC does not have a session description object but
          // other browsers (i.e. Chrome) that will support both PC and ORTC
          // in the future might have this defined already.
          if (!window.RTCSessionDescription) {
            window.RTCSessionDescription = function(args) {
              return args;
            };
          }
          // this adds an additional event listener to MediaStrackTrack that signals
          // when a tracks enabled property was changed.
          var origMSTEnabled = Object.getOwnPropertyDescriptor(
              MediaStreamTrack.prototype, 'enabled');
          Object.defineProperty(MediaStreamTrack.prototype, 'enabled', {
            set: function(value) {
              origMSTEnabled.set.call(this, value);
              var ev = new Event('enabled');
              ev.enabled = value;
              this.dispatchEvent(ev);
            }
          });
        }
    
        window.RTCPeerConnection = function(config) {
          var self = this;
    
          var _eventTarget = document.createDocumentFragment();
          ['addEventListener', 'removeEventListener', 'dispatchEvent']
              .forEach(function(method) {
                self[method] = _eventTarget[method].bind(_eventTarget);
              });
    
          this.onicecandidate = null;
          this.onaddstream = null;
          this.ontrack = null;
          this.onremovestream = null;
          this.onsignalingstatechange = null;
          this.oniceconnectionstatechange = null;
          this.onnegotiationneeded = null;
          this.ondatachannel = null;
    
          this.localStreams = [];
          this.remoteStreams = [];
          this.getLocalStreams = function() {
            return self.localStreams;
          };
          this.getRemoteStreams = function() {
            return self.remoteStreams;
          };
    
          this.localDescription = new RTCSessionDescription({
            type: '',
            sdp: ''
          });
          this.remoteDescription = new RTCSessionDescription({
            type: '',
            sdp: ''
          });
          this.signalingState = 'stable';
          this.iceConnectionState = 'new';
          this.iceGatheringState = 'new';
    
          this.iceOptions = {
            gatherPolicy: 'all',
            iceServers: []
          };
          if (config && config.iceTransportPolicy) {
            switch (config.iceTransportPolicy) {
              case 'all':
              case 'relay':
                this.iceOptions.gatherPolicy = config.iceTransportPolicy;
                break;
              case 'none':
                // FIXME: remove once implementation and spec have added this.
                throw new TypeError('iceTransportPolicy "none" not supported');
              default:
                // don't set iceTransportPolicy.
                break;
            }
          }
          this.usingBundle = config && config.bundlePolicy === 'max-bundle';
    
          if (config && config.iceServers) {
            // Edge does not like
            // 1) stun:
            // 2) turn: that does not have all of turn:host:port?transport=udp
            // 3) turn: with ipv6 addresses
            var iceServers = JSON.parse(JSON.stringify(config.iceServers));
            this.iceOptions.iceServers = iceServers.filter(function(server) {
              if (server && server.urls) {
                var urls = server.urls;
                if (typeof urls === 'string') {
                  urls = [urls];
                }
                urls = urls.filter(function(url) {
                  return (url.indexOf('turn:') === 0 &&
                      url.indexOf('transport=udp') !== -1 &&
                      url.indexOf('turn:[') === -1) ||
                      (url.indexOf('stun:') === 0 &&
                        browserDetails.version >= 14393);
                })[0];
                return !!urls;
              }
              return false;
            });
          }
          this._config = config;
    
          // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
          // everything that is needed to describe a SDP m-line.
          this.transceivers = [];
    
          // since the iceGatherer is currently created in createOffer but we
          // must not emit candidates until after setLocalDescription we buffer
          // them in this array.
          this._localIceCandidatesBuffer = [];
        };
    
        window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
          var self = this;
          var sections = SDPUtils.splitSections(self.localDescription.sdp);
          // FIXME: need to apply ice candidates in a way which is async but
          // in-order
          this._localIceCandidatesBuffer.forEach(function(event) {
            var end = !event.candidate || Object.keys(event.candidate).length === 0;
            if (end) {
              for (var j = 1; j < sections.length; j++) {
                if (sections[j].indexOf('\r\na=end-of-candidates\r\n') === -1) {
                  sections[j] += 'a=end-of-candidates\r\n';
                }
              }
            } else if (event.candidate.candidate.indexOf('typ endOfCandidates')
                === -1) {
              sections[event.candidate.sdpMLineIndex + 1] +=
                  'a=' + event.candidate.candidate + '\r\n';
            }
            self.localDescription.sdp = sections.join('');
            self.dispatchEvent(event);
            if (self.onicecandidate !== null) {
              self.onicecandidate(event);
            }
            if (!event.candidate && self.iceGatheringState !== 'complete') {
              var complete = self.transceivers.every(function(transceiver) {
                return transceiver.iceGatherer &&
                    transceiver.iceGatherer.state === 'completed';
              });
              if (complete) {
                self.iceGatheringState = 'complete';
              }
            }
          });
          this._localIceCandidatesBuffer = [];
        };
    
        window.RTCPeerConnection.prototype.getConfiguration = function() {
          return this._config;
        };
    
        window.RTCPeerConnection.prototype.addStream = function(stream) {
          // Clone is necessary for local demos mostly, attaching directly
          // to two different senders does not work (build 10547).
          var clonedStream = stream.clone();
          stream.getTracks().forEach(function(track, idx) {
            var clonedTrack = clonedStream.getTracks()[idx];
            track.addEventListener('enabled', function(event) {
              clonedTrack.enabled = event.enabled;
            });
          });
          this.localStreams.push(clonedStream);
          this._maybeFireNegotiationNeeded();
        };
    
        window.RTCPeerConnection.prototype.removeStream = function(stream) {
          var idx = this.localStreams.indexOf(stream);
          if (idx > -1) {
            this.localStreams.splice(idx, 1);
            this._maybeFireNegotiationNeeded();
          }
        };
    
        window.RTCPeerConnection.prototype.getSenders = function() {
          return this.transceivers.filter(function(transceiver) {
            return !!transceiver.rtpSender;
          })
          .map(function(transceiver) {
            return transceiver.rtpSender;
          });
        };
    
        window.RTCPeerConnection.prototype.getReceivers = function() {
          return this.transceivers.filter(function(transceiver) {
            return !!transceiver.rtpReceiver;
          })
          .map(function(transceiver) {
            return transceiver.rtpReceiver;
          });
        };
    
        // Determines the intersection of local and remote capabilities.
        window.RTCPeerConnection.prototype._getCommonCapabilities =
            function(localCapabilities, remoteCapabilities) {
              var commonCapabilities = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
              };
              localCapabilities.codecs.forEach(function(lCodec) {
                for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
                  var rCodec = remoteCapabilities.codecs[i];
                  if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
                      lCodec.clockRate === rCodec.clockRate) {
                    // number of channels is the highest common number of channels
                    rCodec.numChannels = Math.min(lCodec.numChannels,
                        rCodec.numChannels);
                    // push rCodec so we reply with offerer payload type
                    commonCapabilities.codecs.push(rCodec);
    
                    // determine common feedback mechanisms
                    rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
                      for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                        if (lCodec.rtcpFeedback[j].type === fb.type &&
                            lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                          return true;
                        }
                      }
                      return false;
                    });
                    // FIXME: also need to determine .parameters
                    //  see https://github.com/openpeer/ortc/issues/569
                    break;
                  }
                }
              });
    
              localCapabilities.headerExtensions
                  .forEach(function(lHeaderExtension) {
                    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
                         i++) {
                      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
                      if (lHeaderExtension.uri === rHeaderExtension.uri) {
                        commonCapabilities.headerExtensions.push(rHeaderExtension);
                        break;
                      }
                    }
                  });
    
              // FIXME: fecMechanisms
              return commonCapabilities;
            };
    
        // Create ICE gatherer, ICE transport and DTLS transport.
        window.RTCPeerConnection.prototype._createIceAndDtlsTransports =
            function(mid, sdpMLineIndex) {
              var self = this;
              var iceGatherer = new RTCIceGatherer(self.iceOptions);
              var iceTransport = new RTCIceTransport(iceGatherer);
              iceGatherer.onlocalcandidate = function(evt) {
                var event = new Event('icecandidate');
                event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};
    
                var cand = evt.candidate;
                var end = !cand || Object.keys(cand).length === 0;
                // Edge emits an empty object for RTCIceCandidateComplete‥
                if (end) {
                  // polyfill since RTCIceGatherer.state is not implemented in
                  // Edge 10547 yet.
                  if (iceGatherer.state === undefined) {
                    iceGatherer.state = 'completed';
                  }
    
                  // Emit a candidate with type endOfCandidates to make the samples
                  // work. Edge requires addIceCandidate with this empty candidate
                  // to start checking. The real solution is to signal
                  // end-of-candidates to the other side when getting the null
                  // candidate but some apps (like the samples) don't do that.
                  event.candidate.candidate =
                      'candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates';
                } else {
                  // RTCIceCandidate doesn't have a component, needs to be added
                  cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
                  event.candidate.candidate = SDPUtils.writeCandidate(cand);
                }
    
                // update local description.
                var sections = SDPUtils.splitSections(self.localDescription.sdp);
                if (event.candidate.candidate.indexOf('typ endOfCandidates')
                    === -1) {
                  sections[event.candidate.sdpMLineIndex + 1] +=
                      'a=' + event.candidate.candidate + '\r\n';
                } else {
                  sections[event.candidate.sdpMLineIndex + 1] +=
                      'a=end-of-candidates\r\n';
                }
                self.localDescription.sdp = sections.join('');
    
                var complete = self.transceivers.every(function(transceiver) {
                  return transceiver.iceGatherer &&
                      transceiver.iceGatherer.state === 'completed';
                });
    
                // Emit candidate if localDescription is set.
                // Also emits null candidate when all gatherers are complete.
                switch (self.iceGatheringState) {
                  case 'new':
                    self._localIceCandidatesBuffer.push(event);
                    if (end && complete) {
                      self._localIceCandidatesBuffer.push(
                          new Event('icecandidate'));
                    }
                    break;
                  case 'gathering':
                    self._emitBufferedCandidates();
                    self.dispatchEvent(event);
                    if (self.onicecandidate !== null) {
                      self.onicecandidate(event);
                    }
                    if (complete) {
                      self.dispatchEvent(new Event('icecandidate'));
                      if (self.onicecandidate !== null) {
                        self.onicecandidate(new Event('icecandidate'));
                      }
                      self.iceGatheringState = 'complete';
                    }
                    break;
                  case 'complete':
                    // should not happen... currently!
                    break;
                  default: // no-op.
                    break;
                }
              };
              iceTransport.onicestatechange = function() {
                self._updateConnectionState();
              };
    
              var dtlsTransport = new RTCDtlsTransport(iceTransport);
              dtlsTransport.ondtlsstatechange = function() {
                self._updateConnectionState();
              };
              dtlsTransport.onerror = function() {
                // onerror does not set state to failed by itself.
                dtlsTransport.state = 'failed';
                self._updateConnectionState();
              };
    
              return {
                iceGatherer: iceGatherer,
                iceTransport: iceTransport,
                dtlsTransport: dtlsTransport
              };
            };
    
        // Start the RTP Sender and Receiver for a transceiver.
        window.RTCPeerConnection.prototype._transceive = function(transceiver,
            send, recv) {
          var params = this._getCommonCapabilities(transceiver.localCapabilities,
              transceiver.remoteCapabilities);
          if (send && transceiver.rtpSender) {
            params.encodings = transceiver.sendEncodingParameters;
            params.rtcp = {
              cname: SDPUtils.localCName
            };
            if (transceiver.recvEncodingParameters.length) {
              params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
            }
            transceiver.rtpSender.send(params);
          }
          if (recv && transceiver.rtpReceiver) {
            // remove RTX field in Edge 14942
            if (transceiver.kind === 'video'
                && transceiver.recvEncodingParameters) {
              transceiver.recvEncodingParameters.forEach(function(p) {
                delete p.rtx;
              });
            }
            params.encodings = transceiver.recvEncodingParameters;
            params.rtcp = {
              cname: transceiver.cname
            };
            if (transceiver.sendEncodingParameters.length) {
              params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
            }
            transceiver.rtpReceiver.receive(params);
          }
        };
    
        window.RTCPeerConnection.prototype.setLocalDescription =
            function(description) {
              var self = this;
              var sections;
              var sessionpart;
              if (description.type === 'offer') {
                // FIXME: What was the purpose of this empty if statement?
                // if (!this._pendingOffer) {
                // } else {
                if (this._pendingOffer) {
                  // VERY limited support for SDP munging. Limited to:
                  // * changing the order of codecs
                  sections = SDPUtils.splitSections(description.sdp);
                  sessionpart = sections.shift();
                  sections.forEach(function(mediaSection, sdpMLineIndex) {
                    var caps = SDPUtils.parseRtpParameters(mediaSection);
                    self._pendingOffer[sdpMLineIndex].localCapabilities = caps;
                  });
                  this.transceivers = this._pendingOffer;
                  delete this._pendingOffer;
                }
              } else if (description.type === 'answer') {
                sections = SDPUtils.splitSections(self.remoteDescription.sdp);
                sessionpart = sections.shift();
                var isIceLite = SDPUtils.matchPrefix(sessionpart,
                    'a=ice-lite').length > 0;
                sections.forEach(function(mediaSection, sdpMLineIndex) {
                  var transceiver = self.transceivers[sdpMLineIndex];
                  var iceGatherer = transceiver.iceGatherer;
                  var iceTransport = transceiver.iceTransport;
                  var dtlsTransport = transceiver.dtlsTransport;
                  var localCapabilities = transceiver.localCapabilities;
                  var remoteCapabilities = transceiver.remoteCapabilities;
    
                  var rejected = mediaSection.split('\n', 1)[0]
                      .split(' ', 2)[1] === '0';
    
                  if (!rejected && !transceiver.isDatachannel) {
                    var remoteIceParameters = SDPUtils.getIceParameters(
                        mediaSection, sessionpart);
                    if (isIceLite) {
                      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
                      .map(function(cand) {
                        return SDPUtils.parseCandidate(cand);
                      })
                      .filter(function(cand) {
                        return cand.component === '1';
                      });
                      // ice-lite only includes host candidates in the SDP so we can
                      // use setRemoteCandidates (which implies an
                      // RTCIceCandidateComplete)
                      if (cands.length) {
                        iceTransport.setRemoteCandidates(cands);
                      }
                    }
                    var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                        mediaSection, sessionpart);
                    if (isIceLite) {
                      remoteDtlsParameters.role = 'server';
                    }
    
                    if (!self.usingBundle || sdpMLineIndex === 0) {
                      iceTransport.start(iceGatherer, remoteIceParameters,
                          isIceLite ? 'controlling' : 'controlled');
                      dtlsTransport.start(remoteDtlsParameters);
                    }
    
                    // Calculate intersection of capabilities.
                    var params = self._getCommonCapabilities(localCapabilities,
                        remoteCapabilities);
    
                    // Start the RTCRtpSender. The RTCRtpReceiver for this
                    // transceiver has already been started in setRemoteDescription.
                    self._transceive(transceiver,
                        params.codecs.length > 0,
                        false);
                  }
                });
              }
    
              this.localDescription = {
                type: description.type,
                sdp: description.sdp
              };
              switch (description.type) {
                case 'offer':
                  this._updateSignalingState('have-local-offer');
                  break;
                case 'answer':
                  this._updateSignalingState('stable');
                  break;
                default:
                  throw new TypeError('unsupported type "' + description.type +
                      '"');
              }
    
              // If a success callback was provided, emit ICE candidates after it
              // has been executed. Otherwise, emit callback after the Promise is
              // resolved.
              var hasCallback = arguments.length > 1 &&
                typeof arguments[1] === 'function';
              if (hasCallback) {
                var cb = arguments[1];
                window.setTimeout(function() {
                  cb();
                  if (self.iceGatheringState === 'new') {
                    self.iceGatheringState = 'gathering';
                  }
                  self._emitBufferedCandidates();
                }, 0);
              }
              var p = Promise.resolve();
              p.then(function() {
                if (!hasCallback) {
                  if (self.iceGatheringState === 'new') {
                    self.iceGatheringState = 'gathering';
                  }
                  // Usually candidates will be emitted earlier.
                  window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
                }
              });
              return p;
            };
    
        window.RTCPeerConnection.prototype.setRemoteDescription =
            function(description) {
              var self = this;
              var stream = new MediaStream();
              var receiverList = [];
              var sections = SDPUtils.splitSections(description.sdp);
              var sessionpart = sections.shift();
              var isIceLite = SDPUtils.matchPrefix(sessionpart,
                  'a=ice-lite').length > 0;
              this.usingBundle = SDPUtils.matchPrefix(sessionpart,
                  'a=group:BUNDLE ').length > 0;
              sections.forEach(function(mediaSection, sdpMLineIndex) {
                var lines = SDPUtils.splitLines(mediaSection);
                var mline = lines[0].substr(2).split(' ');
                var kind = mline[0];
                var rejected = mline[1] === '0';
                var direction = SDPUtils.getDirection(mediaSection, sessionpart);
    
                var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:');
                if (mid.length) {
                  mid = mid[0].substr(6);
                } else {
                  mid = SDPUtils.generateIdentifier();
                }
    
                // Reject datachannels which are not implemented yet.
                if (kind === 'application' && mline[2] === 'DTLS/SCTP') {
                  self.transceivers[sdpMLineIndex] = {
                    mid: mid,
                    isDatachannel: true
                  };
                  return;
                }
    
                var transceiver;
                var iceGatherer;
                var iceTransport;
                var dtlsTransport;
                var rtpSender;
                var rtpReceiver;
                var sendEncodingParameters;
                var recvEncodingParameters;
                var localCapabilities;
    
                var track;
                // FIXME: ensure the mediaSection has rtcp-mux set.
                var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
                var remoteIceParameters;
                var remoteDtlsParameters;
                if (!rejected) {
                  remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                      sessionpart);
                  remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
                      sessionpart);
                  remoteDtlsParameters.role = 'client';
                }
                recvEncodingParameters =
                    SDPUtils.parseRtpEncodingParameters(mediaSection);
    
                var cname;
                // Gets the first SSRC. Note that with RTX there might be multiple
                // SSRCs.
                var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
                    .map(function(line) {
                      return SDPUtils.parseSsrcMedia(line);
                    })
                    .filter(function(obj) {
                      return obj.attribute === 'cname';
                    })[0];
                if (remoteSsrc) {
                  cname = remoteSsrc.value;
                }
    
                var isComplete = SDPUtils.matchPrefix(mediaSection,
                    'a=end-of-candidates', sessionpart).length > 0;
                var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
                    .map(function(cand) {
                      return SDPUtils.parseCandidate(cand);
                    })
                    .filter(function(cand) {
                      return cand.component === '1';
                    });
                if (description.type === 'offer' && !rejected) {
                  var transports = self.usingBundle && sdpMLineIndex > 0 ? {
                    iceGatherer: self.transceivers[0].iceGatherer,
                    iceTransport: self.transceivers[0].iceTransport,
                    dtlsTransport: self.transceivers[0].dtlsTransport
                  } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);
    
                  if (isComplete) {
                    transports.iceTransport.setRemoteCandidates(cands);
                  }
    
                  localCapabilities = RTCRtpReceiver.getCapabilities(kind);
    
                  // filter RTX until additional stuff needed for RTX is implemented
                  // in adapter.js
                  localCapabilities.codecs = localCapabilities.codecs.filter(
                      function(codec) {
                        return codec.name !== 'rtx';
                      });
    
                  sendEncodingParameters = [{
                    ssrc: (2 * sdpMLineIndex + 2) * 1001
                  }];
    
                  rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
    
                  track = rtpReceiver.track;
                  receiverList.push([track, rtpReceiver]);
                  // FIXME: not correct when there are multiple streams but that is
                  // not currently supported in this shim.
                  stream.addTrack(track);
    
                  // FIXME: look at direction.
                  if (self.localStreams.length > 0 &&
                      self.localStreams[0].getTracks().length >= sdpMLineIndex) {
                    var localTrack;
                    if (kind === 'audio') {
                      localTrack = self.localStreams[0].getAudioTracks()[0];
                    } else if (kind === 'video') {
                      localTrack = self.localStreams[0].getVideoTracks()[0];
                    }
                    if (localTrack) {
                      rtpSender = new RTCRtpSender(localTrack,
                          transports.dtlsTransport);
                    }
                  }
    
                  self.transceivers[sdpMLineIndex] = {
                    iceGatherer: transports.iceGatherer,
                    iceTransport: transports.iceTransport,
                    dtlsTransport: transports.dtlsTransport,
                    localCapabilities: localCapabilities,
                    remoteCapabilities: remoteCapabilities,
                    rtpSender: rtpSender,
                    rtpReceiver: rtpReceiver,
                    kind: kind,
                    mid: mid,
                    cname: cname,
                    sendEncodingParameters: sendEncodingParameters,
                    recvEncodingParameters: recvEncodingParameters
                  };
                  // Start the RTCRtpReceiver now. The RTPSender is started in
                  // setLocalDescription.
                  self._transceive(self.transceivers[sdpMLineIndex],
                      false,
                      direction === 'sendrecv' || direction === 'sendonly');
                } else if (description.type === 'answer' && !rejected) {
                  transceiver = self.transceivers[sdpMLineIndex];
                  iceGatherer = transceiver.iceGatherer;
                  iceTransport = transceiver.iceTransport;
                  dtlsTransport = transceiver.dtlsTransport;
                  rtpSender = transceiver.rtpSender;
                  rtpReceiver = transceiver.rtpReceiver;
                  sendEncodingParameters = transceiver.sendEncodingParameters;
                  localCapabilities = transceiver.localCapabilities;
    
                  self.transceivers[sdpMLineIndex].recvEncodingParameters =
                      recvEncodingParameters;
                  self.transceivers[sdpMLineIndex].remoteCapabilities =
                      remoteCapabilities;
                  self.transceivers[sdpMLineIndex].cname = cname;
    
                  if ((isIceLite || isComplete) && cands.length) {
                    iceTransport.setRemoteCandidates(cands);
                  }
                  if (!self.usingBundle || sdpMLineIndex === 0) {
                    iceTransport.start(iceGatherer, remoteIceParameters,
                        'controlling');
                    dtlsTransport.start(remoteDtlsParameters);
                  }
    
                  self._transceive(transceiver,
                      direction === 'sendrecv' || direction === 'recvonly',
                      direction === 'sendrecv' || direction === 'sendonly');
    
                  if (rtpReceiver &&
                      (direction === 'sendrecv' || direction === 'sendonly')) {
                    track = rtpReceiver.track;
                    receiverList.push([track, rtpReceiver]);
                    stream.addTrack(track);
                  } else {
                    // FIXME: actually the receiver should be created later.
                    delete transceiver.rtpReceiver;
                  }
                }
              });
    
              this.remoteDescription = {
                type: description.type,
                sdp: description.sdp
              };
              switch (description.type) {
                case 'offer':
                  this._updateSignalingState('have-remote-offer');
                  break;
                case 'answer':
                  this._updateSignalingState('stable');
                  break;
                default:
                  throw new TypeError('unsupported type "' + description.type +
                      '"');
              }
              if (stream.getTracks().length) {
                self.remoteStreams.push(stream);
                window.setTimeout(function() {
                  var event = new Event('addstream');
                  event.stream = stream;
                  self.dispatchEvent(event);
                  if (self.onaddstream !== null) {
                    window.setTimeout(function() {
                      self.onaddstream(event);
                    }, 0);
                  }
    
                  receiverList.forEach(function(item) {
                    var track = item[0];
                    var receiver = item[1];
                    var trackEvent = new Event('track');
                    trackEvent.track = track;
                    trackEvent.receiver = receiver;
                    trackEvent.streams = [stream];
                    self.dispatchEvent(event);
                    if (self.ontrack !== null) {
                      window.setTimeout(function() {
                        self.ontrack(trackEvent);
                      }, 0);
                    }
                  });
                }, 0);
              }
              if (arguments.length > 1 && typeof arguments[1] === 'function') {
                window.setTimeout(arguments[1], 0);
              }
              return Promise.resolve();
            };
    
        window.RTCPeerConnection.prototype.close = function() {
          this.transceivers.forEach(function(transceiver) {
            /* not yet
            if (transceiver.iceGatherer) {
              transceiver.iceGatherer.close();
            }
            */
            if (transceiver.iceTransport) {
              transceiver.iceTransport.stop();
            }
            if (transceiver.dtlsTransport) {
              transceiver.dtlsTransport.stop();
            }
            if (transceiver.rtpSender) {
              transceiver.rtpSender.stop();
            }
            if (transceiver.rtpReceiver) {
              transceiver.rtpReceiver.stop();
            }
          });
          // FIXME: clean up tracks, local streams, remote streams, etc
          this._updateSignalingState('closed');
        };
    
        // Update the signaling state.
        window.RTCPeerConnection.prototype._updateSignalingState =
            function(newState) {
              this.signalingState = newState;
              var event = new Event('signalingstatechange');
              this.dispatchEvent(event);
              if (this.onsignalingstatechange !== null) {
                this.onsignalingstatechange(event);
              }
            };
    
        // Determine whether to fire the negotiationneeded event.
        window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
            function() {
              // Fire away (for now).
              var event = new Event('negotiationneeded');
              this.dispatchEvent(event);
              if (this.onnegotiationneeded !== null) {
                this.onnegotiationneeded(event);
              }
            };
    
        // Update the connection state.
        window.RTCPeerConnection.prototype._updateConnectionState = function() {
          var self = this;
          var newState;
          var states = {
            'new': 0,
            closed: 0,
            connecting: 0,
            checking: 0,
            connected: 0,
            completed: 0,
            failed: 0
          };
          this.transceivers.forEach(function(transceiver) {
            states[transceiver.iceTransport.state]++;
            states[transceiver.dtlsTransport.state]++;
          });
          // ICETransport.completed and connected are the same for this purpose.
          states.connected += states.completed;
    
          newState = 'new';
          if (states.failed > 0) {
            newState = 'failed';
          } else if (states.connecting > 0 || states.checking > 0) {
            newState = 'connecting';
          } else if (states.disconnected > 0) {
            newState = 'disconnected';
          } else if (states.new > 0) {
            newState = 'new';
          } else if (states.connected > 0 || states.completed > 0) {
            newState = 'connected';
          }
    
          if (newState !== self.iceConnectionState) {
            self.iceConnectionState = newState;
            var event = new Event('iceconnectionstatechange');
            this.dispatchEvent(event);
            if (this.oniceconnectionstatechange !== null) {
              this.oniceconnectionstatechange(event);
            }
          }
        };
    
        window.RTCPeerConnection.prototype.createOffer = function() {
          var self = this;
          if (this._pendingOffer) {
            throw new Error('createOffer called while there is a pending offer.');
          }
          var offerOptions;
          if (arguments.length === 1 && typeof arguments[0] !== 'function') {
            offerOptions = arguments[0];
          } else if (arguments.length === 3) {
            offerOptions = arguments[2];
          }
    
          var tracks = [];
          var numAudioTracks = 0;
          var numVideoTracks = 0;
          // Default to sendrecv.
          if (this.localStreams.length) {
            numAudioTracks = this.localStreams[0].getAudioTracks().length;
            numVideoTracks = this.localStreams[0].getVideoTracks().length;
          }
          // Determine number of audio and video tracks we need to send/recv.
          if (offerOptions) {
            // Reject Chrome legacy constraints.
            if (offerOptions.mandatory || offerOptions.optional) {
              throw new TypeError(
                  'Legacy mandatory/optional constraints not supported.');
            }
            if (offerOptions.offerToReceiveAudio !== undefined) {
              numAudioTracks = offerOptions.offerToReceiveAudio;
            }
            if (offerOptions.offerToReceiveVideo !== undefined) {
              numVideoTracks = offerOptions.offerToReceiveVideo;
            }
          }
          if (this.localStreams.length) {
            // Push local streams.
            this.localStreams[0].getTracks().forEach(function(track) {
              tracks.push({
                kind: track.kind,
                track: track,
                wantReceive: track.kind === 'audio' ?
                    numAudioTracks > 0 : numVideoTracks > 0
              });
              if (track.kind === 'audio') {
                numAudioTracks--;
              } else if (track.kind === 'video') {
                numVideoTracks--;
              }
            });
          }
          // Create M-lines for recvonly streams.
          while (numAudioTracks > 0 || numVideoTracks > 0) {
            if (numAudioTracks > 0) {
              tracks.push({
                kind: 'audio',
                wantReceive: true
              });
              numAudioTracks--;
            }
            if (numVideoTracks > 0) {
              tracks.push({
                kind: 'video',
                wantReceive: true
              });
              numVideoTracks--;
            }
          }
    
          var sdp = SDPUtils.writeSessionBoilerplate();
          var transceivers = [];
          tracks.forEach(function(mline, sdpMLineIndex) {
            // For each track, create an ice gatherer, ice transport,
            // dtls transport, potentially rtpsender and rtpreceiver.
            var track = mline.track;
            var kind = mline.kind;
            var mid = SDPUtils.generateIdentifier();
    
            var transports = self.usingBundle && sdpMLineIndex > 0 ? {
              iceGatherer: transceivers[0].iceGatherer,
              iceTransport: transceivers[0].iceTransport,
              dtlsTransport: transceivers[0].dtlsTransport
            } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);
    
            var localCapabilities = RTCRtpSender.getCapabilities(kind);
            // filter RTX until additional stuff needed for RTX is implemented
            // in adapter.js
            localCapabilities.codecs = localCapabilities.codecs.filter(
                function(codec) {
                  return codec.name !== 'rtx';
                });
            localCapabilities.codecs.forEach(function(codec) {
              // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
              // by adding level-asymmetry-allowed=1
              if (codec.name === 'H264' &&
                  codec.parameters['level-asymmetry-allowed'] === undefined) {
                codec.parameters['level-asymmetry-allowed'] = '1';
              }
            });
    
            var rtpSender;
            var rtpReceiver;
    
            // generate an ssrc now, to be used later in rtpSender.send
            var sendEncodingParameters = [{
              ssrc: (2 * sdpMLineIndex + 1) * 1001
            }];
            if (track) {
              rtpSender = new RTCRtpSender(track, transports.dtlsTransport);
            }
    
            if (mline.wantReceive) {
              rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
            }
    
            transceivers[sdpMLineIndex] = {
              iceGatherer: transports.iceGatherer,
              iceTransport: transports.iceTransport,
              dtlsTransport: transports.dtlsTransport,
              localCapabilities: localCapabilities,
              remoteCapabilities: null,
              rtpSender: rtpSender,
              rtpReceiver: rtpReceiver,
              kind: kind,
              mid: mid,
              sendEncodingParameters: sendEncodingParameters,
              recvEncodingParameters: null
            };
          });
          if (this.usingBundle) {
            sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
              return t.mid;
            }).join(' ') + '\r\n';
          }
          tracks.forEach(function(mline, sdpMLineIndex) {
            var transceiver = transceivers[sdpMLineIndex];
            sdp += SDPUtils.writeMediaSection(transceiver,
                transceiver.localCapabilities, 'offer', self.localStreams[0]);
          });
    
          this._pendingOffer = transceivers;
          var desc = new RTCSessionDescription({
            type: 'offer',
            sdp: sdp
          });
          if (arguments.length && typeof arguments[0] === 'function') {
            window.setTimeout(arguments[0], 0, desc);
          }
          return Promise.resolve(desc);
        };
    
        window.RTCPeerConnection.prototype.createAnswer = function() {
          var self = this;
    
          var sdp = SDPUtils.writeSessionBoilerplate();
          if (this.usingBundle) {
            sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
              return t.mid;
            }).join(' ') + '\r\n';
          }
          this.transceivers.forEach(function(transceiver) {
            if (transceiver.isDatachannel) {
              sdp += 'm=application 0 DTLS/SCTP 5000\r\n' +
                  'c=IN IP4 0.0.0.0\r\n' +
                  'a=mid:' + transceiver.mid + '\r\n';
              return;
            }
            // Calculate intersection of capabilities.
            var commonCapabilities = self._getCommonCapabilities(
                transceiver.localCapabilities,
                transceiver.remoteCapabilities);
    
            sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
                'answer', self.localStreams[0]);
          });
    
          var desc = new RTCSessionDescription({
            type: 'answer',
            sdp: sdp
          });
          if (arguments.length && typeof arguments[0] === 'function') {
            window.setTimeout(arguments[0], 0, desc);
          }
          return Promise.resolve(desc);
        };
    
        window.RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
          if (!candidate) {
            this.transceivers.forEach(function(transceiver) {
              transceiver.iceTransport.addRemoteCandidate({});
            });
          } else {
            var mLineIndex = candidate.sdpMLineIndex;
            if (candidate.sdpMid) {
              for (var i = 0; i < this.transceivers.length; i++) {
                if (this.transceivers[i].mid === candidate.sdpMid) {
                  mLineIndex = i;
                  break;
                }
              }
            }
            var transceiver = this.transceivers[mLineIndex];
            if (transceiver) {
              var cand = Object.keys(candidate.candidate).length > 0 ?
                  SDPUtils.parseCandidate(candidate.candidate) : {};
              // Ignore Chrome's invalid candidates since Edge does not like them.
              if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
                return;
              }
              // Ignore RTCP candidates, we assume RTCP-MUX.
              if (cand.component !== '1') {
                return;
              }
              // A dirty hack to make samples work.
              if (cand.type === 'endOfCandidates') {
                cand = {};
              }
              transceiver.iceTransport.addRemoteCandidate(cand);
    
              // update the remoteDescription.
              var sections = SDPUtils.splitSections(this.remoteDescription.sdp);
              sections[mLineIndex + 1] += (cand.type ? candidate.candidate.trim()
                  : 'a=end-of-candidates') + '\r\n';
              this.remoteDescription.sdp = sections.join('');
            }
          }
          if (arguments.length > 1 && typeof arguments[1] === 'function') {
            window.setTimeout(arguments[1], 0);
          }
          return Promise.resolve();
        };
    
        window.RTCPeerConnection.prototype.getStats = function() {
          var promises = [];
          this.transceivers.forEach(function(transceiver) {
            ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
                'dtlsTransport'].forEach(function(method) {
                  if (transceiver[method]) {
                    promises.push(transceiver[method].getStats());
                  }
                });
          });
          var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
              arguments[1];
          return new Promise(function(resolve) {
            // shim getStats with maplike support
            var results = new Map();
            Promise.all(promises).then(function(res) {
              res.forEach(function(result) {
                Object.keys(result).forEach(function(id) {
                  results.set(id, result[id]);
                  results[id] = result[id];
                });
              });
              if (cb) {
                window.setTimeout(cb, 0, results);
              }
              resolve(results);
            });
          });
        };
      }
    };
    
    // Expose public methods.
    module.exports = {
      shimPeerConnection: edgeShim.shimPeerConnection,
      shimGetUserMedia: require('./getusermedia')
    };
    
    },{"../utils":42,"./getusermedia":38,"sdp":26}],38:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    // Expose public methods.
    module.exports = function() {
      var shimError_ = function(e) {
        return {
          name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
          message: e.message,
          constraint: e.constraint,
          toString: function() {
            return this.name;
          }
        };
      };
    
      // getUserMedia error shim.
      var origGetUserMedia = navigator.mediaDevices.getUserMedia.
          bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function(c) {
        return origGetUserMedia(c).catch(function(e) {
          return Promise.reject(shimError_(e));
        });
      };
    };
    
    },{}],39:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var browserDetails = require('../utils').browserDetails;
    
    var firefoxShim = {
      shimOnTrack: function() {
        if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
            window.RTCPeerConnection.prototype)) {
          Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
            get: function() {
              return this._ontrack;
            },
            set: function(f) {
              if (this._ontrack) {
                this.removeEventListener('track', this._ontrack);
                this.removeEventListener('addstream', this._ontrackpoly);
              }
              this.addEventListener('track', this._ontrack = f);
              this.addEventListener('addstream', this._ontrackpoly = function(e) {
                e.stream.getTracks().forEach(function(track) {
                  var event = new Event('track');
                  event.track = track;
                  event.receiver = {track: track};
                  event.streams = [e.stream];
                  this.dispatchEvent(event);
                }.bind(this));
              }.bind(this));
            }
          });
        }
      },
    
      shimSourceObject: function() {
        // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
        if (typeof window === 'object') {
          if (window.HTMLMediaElement &&
            !('srcObject' in window.HTMLMediaElement.prototype)) {
            // Shim the srcObject property, once, when HTMLMediaElement is found.
            Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
              get: function() {
                return this.mozSrcObject;
              },
              set: function(stream) {
                this.mozSrcObject = stream;
              }
            });
          }
        }
      },
    
      shimPeerConnection: function() {
        if (typeof window !== 'object' || !(window.RTCPeerConnection ||
            window.mozRTCPeerConnection)) {
          return; // probably media.peerconnection.enabled=false in about:config
        }
        // The RTCPeerConnection object.
        if (!window.RTCPeerConnection) {
          window.RTCPeerConnection = function(pcConfig, pcConstraints) {
            if (browserDetails.version < 38) {
              // .urls is not supported in FF < 38.
              // create RTCIceServers with a single url.
              if (pcConfig && pcConfig.iceServers) {
                var newIceServers = [];
                for (var i = 0; i < pcConfig.iceServers.length; i++) {
                  var server = pcConfig.iceServers[i];
                  if (server.hasOwnProperty('urls')) {
                    for (var j = 0; j < server.urls.length; j++) {
                      var newServer = {
                        url: server.urls[j]
                      };
                      if (server.urls[j].indexOf('turn') === 0) {
                        newServer.username = server.username;
                        newServer.credential = server.credential;
                      }
                      newIceServers.push(newServer);
                    }
                  } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                  }
                }
                pcConfig.iceServers = newIceServers;
              }
            }
            return new mozRTCPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;
    
          // wrap static methods. Currently just generateCertificate.
          if (mozRTCPeerConnection.generateCertificate) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function() {
                return mozRTCPeerConnection.generateCertificate;
              }
            });
          }
    
          window.RTCSessionDescription = mozRTCSessionDescription;
          window.RTCIceCandidate = mozRTCIceCandidate;
        }
    
        // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
            .forEach(function(method) {
              var nativeMethod = RTCPeerConnection.prototype[method];
              RTCPeerConnection.prototype[method] = function() {
                arguments[0] = new ((method === 'addIceCandidate') ?
                    RTCIceCandidate : RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
              };
            });
    
        // support for addIceCandidate(null or undefined)
        var nativeAddIceCandidate =
            RTCPeerConnection.prototype.addIceCandidate;
        RTCPeerConnection.prototype.addIceCandidate = function() {
          if (!arguments[0]) {
            if (arguments[1]) {
              arguments[1].apply(null);
            }
            return Promise.resolve();
          }
          return nativeAddIceCandidate.apply(this, arguments);
        };
    
        if (browserDetails.version < 48) {
          // shim getStats with maplike support
          var makeMapStats = function(stats) {
            var map = new Map();
            Object.keys(stats).forEach(function(key) {
              map.set(key, stats[key]);
              map[key] = stats[key];
            });
            return map;
          };
    
          var nativeGetStats = RTCPeerConnection.prototype.getStats;
          RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
            return nativeGetStats.apply(this, [selector || null])
              .then(function(stats) {
                return makeMapStats(stats);
              })
              .then(onSucc, onErr);
          };
        }
      }
    };
    
    // Expose public methods.
    module.exports = {
      shimOnTrack: firefoxShim.shimOnTrack,
      shimSourceObject: firefoxShim.shimSourceObject,
      shimPeerConnection: firefoxShim.shimPeerConnection,
      shimGetUserMedia: require('./getusermedia')
    };
    
    },{"../utils":42,"./getusermedia":40}],40:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var logging = require('../utils').log;
    var browserDetails = require('../utils').browserDetails;
    
    // Expose public methods.
    module.exports = function() {
      var shimError_ = function(e) {
        return {
          name: {
            SecurityError: 'NotAllowedError',
            PermissionDeniedError: 'NotAllowedError'
          }[e.name] || e.name,
          message: {
            'The operation is insecure.': 'The request is not allowed by the ' +
            'user agent or the platform in the current context.'
          }[e.message] || e.message,
          constraint: e.constraint,
          toString: function() {
            return this.name + (this.message && ': ') + this.message;
          }
        };
      };
    
      // getUserMedia constraints shim.
      var getUserMedia_ = function(constraints, onSuccess, onError) {
        var constraintsToFF37_ = function(c) {
          if (typeof c !== 'object' || c.require) {
            return c;
          }
          var require = [];
          Object.keys(c).forEach(function(key) {
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
              return;
            }
            var r = c[key] = (typeof c[key] === 'object') ?
                c[key] : {ideal: c[key]};
            if (r.min !== undefined ||
                r.max !== undefined || r.exact !== undefined) {
              require.push(key);
            }
            if (r.exact !== undefined) {
              if (typeof r.exact === 'number') {
                r. min = r.max = r.exact;
              } else {
                c[key] = r.exact;
              }
              delete r.exact;
            }
            if (r.ideal !== undefined) {
              c.advanced = c.advanced || [];
              var oc = {};
              if (typeof r.ideal === 'number') {
                oc[key] = {min: r.ideal, max: r.ideal};
              } else {
                oc[key] = r.ideal;
              }
              c.advanced.push(oc);
              delete r.ideal;
              if (!Object.keys(r).length) {
                delete c[key];
              }
            }
          });
          if (require.length) {
            c.require = require;
          }
          return c;
        };
        constraints = JSON.parse(JSON.stringify(constraints));
        if (browserDetails.version < 38) {
          logging('spec: ' + JSON.stringify(constraints));
          if (constraints.audio) {
            constraints.audio = constraintsToFF37_(constraints.audio);
          }
          if (constraints.video) {
            constraints.video = constraintsToFF37_(constraints.video);
          }
          logging('ff37: ' + JSON.stringify(constraints));
        }
        return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
          onError(shimError_(e));
        });
      };
    
      // Returns the result of getUserMedia as a Promise.
      var getUserMediaPromise_ = function(constraints) {
        return new Promise(function(resolve, reject) {
          getUserMedia_(constraints, resolve, reject);
        });
      };
    
      // Shim for mediaDevices on older versions.
      if (!navigator.mediaDevices) {
        navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
          addEventListener: function() { },
          removeEventListener: function() { }
        };
      }
      navigator.mediaDevices.enumerateDevices =
          navigator.mediaDevices.enumerateDevices || function() {
            return new Promise(function(resolve) {
              var infos = [
                {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
                {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
              ];
              resolve(infos);
            });
          };
    
      if (browserDetails.version < 41) {
        // Work around http://bugzil.la/1169665
        var orgEnumerateDevices =
            navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
        navigator.mediaDevices.enumerateDevices = function() {
          return orgEnumerateDevices().then(undefined, function(e) {
            if (e.name === 'NotFoundError') {
              return [];
            }
            throw e;
          });
        };
      }
      if (browserDetails.version < 49) {
        var origGetUserMedia = navigator.mediaDevices.getUserMedia.
            bind(navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia = function(c) {
          return origGetUserMedia(c).then(function(stream) {
            // Work around https://bugzil.la/802326
            if (c.audio && !stream.getAudioTracks().length ||
                c.video && !stream.getVideoTracks().length) {
              stream.getTracks().forEach(function(track) {
                track.stop();
              });
              throw new DOMException('The object can not be found here.',
                                     'NotFoundError');
            }
            return stream;
          }, function(e) {
            return Promise.reject(shimError_(e));
          });
        };
      }
      navigator.getUserMedia = function(constraints, onSuccess, onError) {
        if (browserDetails.version < 44) {
          return getUserMedia_(constraints, onSuccess, onError);
        }
        // Replace Firefox 44+'s deprecation warning with unprefixed version.
        console.warn('navigator.getUserMedia has been replaced by ' +
                     'navigator.mediaDevices.getUserMedia');
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
      };
    };
    
    },{"../utils":42}],41:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
    'use strict';
    var safariShim = {
      // TODO: DrAlex, should be here, double check against LayoutTests
      // shimOnTrack: function() { },
    
      // TODO: once the back-end for the mac port is done, add.
      // TODO: check for webkitGTK+
      // shimPeerConnection: function() { },
    
      shimGetUserMedia: function() {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
      }
    };
    
    // Expose public methods.
    module.exports = {
      shimGetUserMedia: safariShim.shimGetUserMedia
      // TODO
      // shimOnTrack: safariShim.shimOnTrack,
      // shimPeerConnection: safariShim.shimPeerConnection
    };
    
    },{}],42:[function(require,module,exports){
    /*
     *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
     *
     *  Use of this source code is governed by a BSD-style license
     *  that can be found in the LICENSE file in the root of the source
     *  tree.
     */
     /* eslint-env node */
    'use strict';
    
    var logDisabled_ = true;
    
    // Utility methods.
    var utils = {
      disableLog: function(bool) {
        if (typeof bool !== 'boolean') {
          return new Error('Argument type: ' + typeof bool +
              '. Please use a boolean.');
        }
        logDisabled_ = bool;
        return (bool) ? 'adapter.js logging disabled' :
            'adapter.js logging enabled';
      },
    
      log: function() {
        if (typeof window === 'object') {
          if (logDisabled_) {
            return;
          }
          if (typeof console !== 'undefined' && typeof console.log === 'function') {
            console.log.apply(console, arguments);
          }
        }
      },
    
      /**
       * Extract browser version out of the provided user agent string.
       *
       * @param {!string} uastring userAgent string.
       * @param {!string} expr Regular expression used as match criteria.
       * @param {!number} pos position in the version string to be returned.
       * @return {!number} browser version.
       */
      extractVersion: function(uastring, expr, pos) {
        var match = uastring.match(expr);
        return match && match.length >= pos && parseInt(match[pos], 10);
      },
    
      /**
       * Browser detector.
       *
       * @return {object} result containing browser and version
       *     properties.
       */
      detectBrowser: function() {
        // Returned result object.
        var result = {};
        result.browser = null;
        result.version = null;
    
        // Fail early if it's not a browser
        if (typeof window === 'undefined' || !window.navigator) {
          result.browser = 'Not a browser.';
          return result;
        }
    
        // Firefox.
        if (navigator.mozGetUserMedia) {
          result.browser = 'firefox';
          result.version = this.extractVersion(navigator.userAgent,
              /Firefox\/([0-9]+)\./, 1);
    
        // all webkit-based browsers
        } else if (navigator.webkitGetUserMedia) {
          // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
          if (window.webkitRTCPeerConnection) {
            result.browser = 'chrome';
            result.version = this.extractVersion(navigator.userAgent,
              /Chrom(e|ium)\/([0-9]+)\./, 2);
    
          // Safari or unknown webkit-based
          // for the time being Safari has support for MediaStreams but not webRTC
          } else {
            // Safari UA substrings of interest for reference:
            // - webkit version:           AppleWebKit/602.1.25 (also used in Op,Cr)
            // - safari UI version:        Version/9.0.3 (unique to Safari)
            // - safari UI webkit version: Safari/601.4.4 (also used in Op,Cr)
            //
            // if the webkit version and safari UI webkit versions are equals,
            // ... this is a stable version.
            //
            // only the internal webkit version is important today to know if
            // media streams are supported
            //
            if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
              result.browser = 'safari';
              result.version = this.extractVersion(navigator.userAgent,
                /AppleWebKit\/([0-9]+)\./, 1);
    
            // unknown webkit-based browser
            } else {
              result.browser = 'Unsupported webkit-based browser ' +
                  'with GUM support but no WebRTC support.';
              return result;
            }
          }
    
        // Edge.
        } else if (navigator.mediaDevices &&
            navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
          result.browser = 'edge';
          result.version = this.extractVersion(navigator.userAgent,
              /Edge\/(\d+).(\d+)$/, 2);
    
        // Default fallthrough: not supported.
        } else {
          result.browser = 'Not a supported browser.';
          return result;
        }
    
        return result;
      }
    };
    
    // Export.
    module.exports = {
      log: utils.log,
      disableLog: utils.disableLog,
      browserDetails: utils.detectBrowser(),
      extractVersion: utils.extractVersion
    };
    
    },{}]},{},[1]);
    
}})