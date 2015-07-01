$(document).on('ready', function(){
    "use strict";

    // Cacheando objetos DOM
    var $cabecera   = $('.cabecera');
    var $covervid   = $('.covervid-video');
    var altoVentana = $(window).height();
    var $tarjetas    = $('.tarjeta');
    var $irArriba   = $('#irArriba');

    // Oculta el boton 'ir arriba' si no hay scroll
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

    // Anima el scroll hasta el comienzo de la pagina
     $irArriba.on('click', function(){
         $("html, body").animate({scrollTop: 0}, 1000);
     });

    /* Suscribo a la coleccion de tarjetas al evento hover */
    $tarjetas.hover(function(){
        // Escalo al 200% y roto 20 grados en sentido contrario la imagen
         $(this).find('.tarjeta-imagen-contenedor').css({ "transform": "scale(2.5) rotate(-20deg)"});
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
