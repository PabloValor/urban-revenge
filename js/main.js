$(document).on('ready', function(){
    "use strict";

    // Cacheando objetos DOM
    var $cabecera   = $('.cabecera');
    var $covervid   = $('.covervid-video');
    var altoVentana = $(window).height();
    var $tarjetas   = $('.tarjeta');
    var $irArriba   = $('#irArriba');
    var $botones    = $('.tarjeta-detalle-producto-contenedor .btn');
    var $colores    = $('.tarjeta-detalle-producto-contenedor .colores i');

    // Oculta el boton 'ir arriba' si no hay scroll
    $irArriba.hide();
    $(window).on('scroll', function(){
        if($(this).scrollTop()) {
            $irArriba.fadeIn();
        } else {
            $irArriba.fadeOut();
        }
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

    $covervid.height(altoVentana);

    // Seteando el alto de la cabecera de acuerdo al alto de la ventana
    $cabecera.height(altoVentana);

    // Inicializando plugin covervid (video como background)
    $('.covervid-video').coverVid(1920, 1080);
});
