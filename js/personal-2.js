$(document).ready(function(){
  $('.contenido').hide();
  $('#index').show();
  $('.st-clr').on('click', function(evt){
    evt.preventDefault();
    $('.contenido').hide();
    var id = '#'+ $(this).data('opt');
    $(id).show();
  })
});
