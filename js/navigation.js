$(document).scroll(function() {
  var topmenu = $(this).scrollTop();
  if (topmenu > 400) {
	$('.navbar').fadeIn();
  } else {
	$('.navbar').fadeOut();
  }
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
