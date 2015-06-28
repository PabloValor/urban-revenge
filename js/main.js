$(document).on('ready', function(){
  "use strict";

  //cacheando objetos DOM
  var $cabecera   = $('.cabecera');
  var $covervid   = $('.covervid-video');
  var altoVentana = $(window).height();
  var $tarjetas    = $('.tarjeta');

  $tarjetas.hover(function(){
     $(this).find('.tarjeta-imagen-contenedor').css({
        "transform": "scale(2) rotate(20deg)"
     });
     $(this).find('.tarjeta-detalle-producto-contenedor').css({
        "left": "0"
     });
  },
  function(){
     $(this).find('.tarjeta-imagen-contenedor').css({
       "transform": "scale(1) rotate(0)"
     });
     $(this).find('.tarjeta-detalle-producto-contenedor').css({
       "left": "-100%"
     });
  }
 );

  $covervid.height(altoVentana);

  //seteando el alto de la cabecera de acuerdo al alto de la ventana
  $cabecera.height(altoVentana);

  //inicializando plugin covervid (video como background)
  $('.covervid-video').coverVid(1920, 1080);
});
