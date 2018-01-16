$(document).ready(function(){
  $('.fa-times').click(function(){
    $('.popup').hide();
  });

  $('#form').submit(function(e) {
    e.preventDefault();
    $('.popup').show();
  });
});;
