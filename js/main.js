$(document).on('ready', function(){
  "use strict";

  //cacheando objetos DOM
  var $cabecera = $('.cabecera');
  var $covervid = $('.covervid-video');
  var altoVentana = $(window).height();

  $covervid.height(altoVentana);

  //seteando el alto de la cabecera de acuerdo al alto de la ventana
  $cabecera.height(altoVentana);

  //inicializando plugin covervid (video como background)
  $('.covervid-video').coverVid(1920, 1080);
});
