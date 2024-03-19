window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var cards = document.querySelectorAll('.cu-work-card');
  
    for (var i = 0; i < cards.length; i++) {
        // Exclude the card with id 'cu-work-card-1'
        if (cards[i].id === 'cu-work-card-1') continue;
  
        var cardPosition = cards[i].getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 2;
  
        if(cardPosition < screenPosition) {
            cards[i].classList.add('cu-work-card-appear');
        } else {
            cards[i].classList.remove('cu-work-card-appear');
        }
    }
  });
  