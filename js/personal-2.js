$(document).ready(function(){
  $('.contenido').hide();
  $('#index').show();
  $('.st-clr').on('click', function(evt){
    $('.st-clr').removeClass('slct-opt');
    $('#linea-grande').css('visibility','hidden');
    $(this).addClass('slct-opt');
    evt.preventDefault();
    $('.contenido').hide();
    var id = '#'+ $(this).data('opt');
    $(id).show();
  })
});
