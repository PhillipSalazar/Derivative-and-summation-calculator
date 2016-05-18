var is_keyboard = false;
var is_landscape = false;
var initial_screen_size = window.innerHeight;

$(document).ready(function(){
$('.nav, .navTits').mouseover(function(){
  $(this).css('background-color', 'white');
  $(this).find('.navTit').css('color', '#b300b3');
});



$('.nav, .navTits').mouseleave(function(){
  $(this).css('background-color', '#b300b3');
  $('.navTit').css('color', 'white');
});

$( window ).resize(function() {
  $( "body" ).css("height", 200%);
});


});
