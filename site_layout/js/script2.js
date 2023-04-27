$(document).ready(function() {
    $('.my-button').click(function() {
      $('html, body').animate({
        scrollTop: $('.section-reg').offset().top
      }, 1000);
    });
  });
  