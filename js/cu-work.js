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

var checkPageLoad = setInterval(function() {
  if (document.readyState === 'complete') {
    clearInterval(checkPageLoad);
  } else {
    var loaderBar = document.querySelector('.loader .loader_bar:before');
    var currentDuration = parseFloat(window.getComputedStyle(loaderBar)['animation-duration']);
    loaderBar.style.animationDuration = (currentDuration + 1) + 's';
  }
}, 1000);


$(window).on('load', function() {
    $('#preloader').css({
      "transform": "translateY(-100%)",
      "transition-delay": "0.6s"
    });
    $('.loader').css({
      "opacity": "0",
      "transform": "translate(-50%,-100%)",
      "transition-delay": "0.3s"
    });
  });

  


  
