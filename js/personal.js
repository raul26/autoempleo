$(document).ready(function(){
  $('.contenido').hide();
  var opt = document.URL.split('?')[1].split('=')[1];
  $('#'+opt).show();
  $('.m-'+opt).addClass('slct-opt');
  $('.st-clr').on('click', function(evt){
    $('.st-clr').removeClass('slct-opt');
    $(this).addClass('slct-opt');
    evt.preventDefault();
    $('.contenido').hide();
    var id = '#'+ $(this).data('opt');
    $(id).show();
  })
});
