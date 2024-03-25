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

$(window).on('load', function() {
  $('#preloader').css({
    "transform": "translateY(-100%)",
    "transition-delay": "0.6s"
  });
  $('.loader').css({
    "opacity": "0",
    "transform": "translate(-50%,-100%)",
    "transition-delay": "0.9s"
  });
});

window.addEventListener('load', function() {
  var loaderBar = document.getElementById('loader_bar');
  loaderBar.style.setProperty('--loader-width', '0%'); /* Change this line */

  var interval = setInterval(function() {
    var loadPercentage = document.readyState === 'complete' ? 100 : 0;
    loaderBar.style.setProperty('--loader-width', loadPercentage + '%'); /* Change this line */
    if (loadPercentage === 100) {
      clearInterval(interval);
    }
  }, 100);
});

