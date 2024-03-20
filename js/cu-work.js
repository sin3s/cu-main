window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var cards = document.querySelectorAll('.cu-work-card');

  for (var i = 0; i < cards.length; i++) {
      var cardPosition = cards[i].getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 2;

      if(cardPosition < screenPosition) {
          cards[i].classList.add('cu-work-card-appear');
      } else {
          cards[i].classList.remove('cu-work-card-appear');
      }
  }
});
  
$(document).ready(function() {
    $('.cu-work-card').hover(
      function() { // mouseenter
        $(this).find('.cu-card-details').stop(true, true).fadeIn(1200);
        $(this).animate({'max-height': '1000px'}, 1000); // Set a large max-height
      },
      function() { // mouseleave
        $(this).find('.cu-card-details').stop(true, true).fadeOut();
        $(this).animate({'max-height': '800px'}, 1000); // Remove the max-height
      }
    );
});

  
