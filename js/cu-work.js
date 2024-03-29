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

var loaderBar = document.getElementById('loader_bar');
var loaderWidth = 0;

function updateLoaderWidth() {
  var increase = Math.random() * 5;
  loaderWidth += increase;

  if (loaderWidth >= 87) {
    loaderWidth = 87;
    clearInterval(interval);
  }

  loaderBar.style.setProperty('--loader-width', loaderWidth + '%');
}

var interval = setInterval(updateLoaderWidth, 200);

window.onload = function () {
  clearInterval(interval);
  loaderBar.style.setProperty('--loader-width', '100%');
};


