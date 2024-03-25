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

// Get the loader bar element
var loaderBar = document.getElementById('loader_bar');

// Initialize the loader bar width
var loaderWidth = 0;

// Function to update the loader bar width
function updateLoaderWidth() {
  // Calculate a random increase in width
  var increase = Math.random() * 5;

  // Calculate the new width
  loaderWidth += increase;

  // If the new width is greater than 87%, stop the interval
  if (loaderWidth >= 87) {
    loaderWidth = 87;
    clearInterval(interval);
  }

  // Update the width of the loader bar
  loaderBar.style.setProperty('--loader-width', loaderWidth + '%');
}

// Start an interval to increase the loader bar width
var interval = setInterval(updateLoaderWidth, 200);

// When the window is fully loaded, immediately set the width to 100%
window.onload = function () {
  clearInterval(interval);
  loaderBar.style.setProperty('--loader-width', '100%');
};


