$(document).ready(function() {

  // CAROUSEL
  $('.carousel').carousel({
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 200,
  });

  autoplay()

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 8000);
  }

  $('.parallax').parallax();

  $('.sidenav').sidenav();

});
