$(document).ready(function(){
  $('.contenido').hide();
  $('#cero').show();
  $('.st-clr').on('click', function(evt){
    $('.st-clr').removeClass('slct-opt');
    $('#linea-grande').css('visibility','hidden');
    $(this).addClass('slct-opt');
    evt.preventDefault();
    $('.contenido').hide();
    var id = '#'+ $(this).data('opt');
    $(id).show();
  })
  $('#subtitle').on('click', function  (evt) {
    evt.preventDefault();
    $('.contenido').hide();
    $('#cero').show();
    $('.st-clr').removeClass('slct-opt');
    $('#linea-grande').css('visibility','visible');
  })
});
