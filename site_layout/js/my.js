<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            // Activate the carousel
$('.carousel').carousel({
  interval: false
});

// Enable carousel control buttons
$('#carouselExampleControls').on('slide.bs.carousel', function () {
  $('.carousel-control-prev, .carousel-control-next').removeClass('disabled');
});

// Disable carousel control buttons at the ends
$('#carouselExampleControls').on('slid.bs.carousel', function () {
  var $carousel = $(this);
  if ($('.carousel-item:first', $carousel).hasClass('active')) {
    $('.carousel-control-prev', $carousel).addClass('disabled');
  } else if ($('.carousel-item:last', $carousel).hasClass('active')) {
    $('.carousel-control-next', $carousel).addClass('disabled');
  }
});




  $(document).ready(function() {
  $('.my-button').click(function() {
    $('html, body').animate({
      scrollTop: $('.section-reg').offset().top
    }, 1000);
  });
});
