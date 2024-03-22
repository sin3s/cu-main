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

document.addEventListener("DOMContentLoaded", function() {
  // Calculate total resources
  var totalResources = document.images.length + document.scripts.length;

  // Keep track of resources loaded
  var resourcesLoaded = 0;

  // Update the loader bar
  function updateLoaderBar() {
    resourcesLoaded++;
    var percentageLoaded = (resourcesLoaded / totalResources) * 100;
    $('.loader .loader_bar').css('width', percentageLoaded + '%');
  }

  // Attach onload event to images and scripts
  for (var i = 0; i < document.images.length; i++) {
    document.images[i].onload = updateLoaderBar;
  }

  for (var i = 0; i < document.scripts.length; i++) {
    document.scripts[i].onload = updateLoaderBar;
  }

  // Hide preloader when everything is loaded
  window.onload = function() {
    $('#preloader').css({
      "transform": "translateY(-100%)",
      "transition-delay": "0.6s"
    });
    $('.loader').css({
      "opacity": "0",
      "transform": "translate(-50%,-100%)",
      "transition-delay": "0.3s"
    });
  };
});


  


  
