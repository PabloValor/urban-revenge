$(document).on('ready', function(){
    "use strict";

    // Cacheando objetos DOM
    var $cabecera       = $('.cabecera');
    var $covervid       = $('.covervid-video');
    var altoVentana     = $(window).height();
    var $tarjetas       = $('.tarjeta');
    var $irArriba       = $('#irArriba');
    var $botones        = $('.tarjeta-detalle-producto-contenedor .btn');
    var $colores        = $('.tarjeta-detalle-producto-contenedor .colores i');

    //menu items
    var $itemsMenu      = $("li[id*='-menu']");

    // Campos de formulario (Usando solo vainilla js como lo pidio la docente)
    var formulario     = document.getElementById('formularioContacto');
    var usuario        = document.getElementById('usuario');
    var email          = document.getElementById('mail');
    var password       = document.getElementById('password');
    var confirmaPsw    = document.getElementById('confirmaPsw');
    var producto       = document.getElementById('producto');
    var cantidad       = document.getElementById('cantiadad');

    // Oculta el boton 'ir arriba' si no hay scroll
    $irArriba.hide();
    $(window).on('scroll', function(){
        if($(this).scrollTop()) {
            $irArriba.fadeIn();
        } else {
            $irArriba.fadeOut();
        }
    });

    // funcionalidad de menu
    $itemsMenu.on('click', function(){
        $(this).css({"color": "inherit", "background": "inherit"});
        var nombreDeClase = $(this).attr('id').replace('menu', 'contenido-menu'); // construccion del nombre de la clase a mostrar
        $(this).css({"color": "white", "background": "gray"});
        $(this).siblings("." + nombreDeClase).slideToggle(); // animacion del menu
    });

    // Inicializando Carrusel
    $('.bxslider').bxSlider({
        auto: true,
        autoHover: true,
        mode: 'horizontal',
        infiniteLoop: true,
        tickerHover: true,
        pager: false
    });

    // Inicializando WOW plugin
    new WOW().init();

    // Anima el scroll hasta el comienzo de la pagina
     $irArriba.on('click', function(){
         $("html, body").animate({scrollTop: 0}, 1000);
     });

     /* Animo el signo del boton "ver mas" en el hover */
     $botones.hover(function(){
         $(this).find('i').css({"transform" : "rotate(90deg)"});
     },
        function(){
            $(this).find('i').css({"transform" : "rotate(0)"});
        }
    );

    /* Animo colores del producto en el hover */
    $colores.hover(function(){
        $(this).css({"transform" : "scale(2)"});
    },
       function(){
           $(this).css({"transform" : "scale(1)"});
       }
   );

    /* Suscribo a la coleccion de tarjetas al evento hover */
    $tarjetas.hover(function(){
        // Escalo al 200% y roto 20 grados en sentido contrario la imagen
         $(this).find('.tarjeta-imagen-contenedor').css({ "transform": "scale(3) rotate(-20deg)"});
         // La capa de detalle se hace visible
         $(this).find('.tarjeta-detalle-producto-contenedor').css({"left": "0"});
        },
        function(){
        // La imagen vuelve a su a su estado inicial en el evento mouseleave
         $(this).find('.tarjeta-imagen-contenedor').css({"transform": "scale(1) rotate(0)"});
          // La capa de detalle se oculta en el mouseleave
         $(this).find('.tarjeta-detalle-producto-contenedor').css({"left": "-100%"});
        }
    );

    // Seteando el alto de la cabecera de acuerdo al alto de la ventana
    $covervid.height(altoVentana);
    $cabecera.height(altoVentana);

    // Inicializando plugin covervid (video como background)
    $('.covervid-video').coverVid(1920, 1080);

    /* Validacion de formulario con solo Javascript puro */
    formulario.addEventListener('submit', function(e){

        var regExpEmail = /\S+@\S+\.\S+/; // algo@algo.algo => OK
        var regExpNumeros = /[1-9]|\./;  // solo numeros del 1 al 9

        // Validacion campo usuario
        if(usuario.value.length < 6) {
            alert("El Usuario debe tener mas de  6 caracteres");
            e.preventDefault();
        }

        // Validacion campo email
        if(regExpEmail.test(email.value) === false) {
            alert("El E-mail debe ser de la forma: aquello@esto.algo");
            e.preventDefault();
        }

        // Validacion de confirmacion de password
        if(password.value.length < 6 && password.value != confirmaPsw.value) {
            alert("El password debe ser mayor a 6 caracteres y debe coincidir");
            e.preventDefault();
        }

        if(regExpNumeros.test(cantidad.value) === false) {
            alert("La cantidad debe ser solo numeros mayores a 0");
            e.preventDefault();
        }

        limpiarCampos(); // luego del submit del form, limpio todos los campos
    });

    function limpiarCampos() {
        usuario.value       = '';
        email.value         = '';
        producto.value      = '';
        cantidad.value      = '';
        password.value      = '';
        confirmaPsw.value   = '';
        usuario.focus();
    }
});
