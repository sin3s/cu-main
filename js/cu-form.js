const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
});
const hiddenElemnt = document.querySelectorAll('.main-img-container');
hiddenElemnt.forEach((el)=> observer.observe(el));

// ------------------------------------
$("#burgerIcon").click(function () {
  if ($("#burgerIcon").hasClass("fa-bars")) {
    $("#burgerIcon").removeClass("fa-bars");
    $("#burgerIcon").addClass("fa-times");
  } else if ($("#burgerIcon").hasClass("fa-times")) {
    $("#burgerIcon").removeClass("fa-times");
    $("#burgerIcon").addClass("fa-bars");
  }
});
$(".cu-nav-link, .cu-nav-btn").click(function () {
  if ($("#burgerIcon").hasClass("fa-times")) {
    $("#burgerIcon").removeClass("fa-times");
    $("#burgerIcon").addClass("fa-bars");
  }
});

 

setTimeout(function(){
  document.getElementById('unicorn-png').style.right = '0px';  


}, 3000); // 2000 = 2 seconds


$('.blink-1').hide();

setTimeout(function(){
  var w = window.innerWidth;
  document.getElementById('blink-1').style.right =  w <600 ? '38px' : '110px';  

 function mainFunction(){
       function blinkText (){
      $('.blink-1').fadeIn(500);
      $('.blink-1').fadeOut(500);
      $('.blink-1').fadeIn(500);
      $('.blink-1').fadeOut(500);
  }
 blinkText();

setTimeout(function changeText(){
  $('.blink-1').fadeIn(2000);
  $('.blink-1').text("We have something to share with you");
  $('.blink-1').fadeOut(2000);
}, 2500);

setTimeout(function changeText(){
  $('.blink-1').text("Hover here.");
  $('.blink-1').fadeIn(300);
}, 6000);

 

 }

 mainFunction();

}, 4000);  

$(".UCaward").mouseenter( function (){

 $('.notification-box').fadeIn()} ).mouseleave( function (){
  
 });
 $('.close-box').click(function() { $('.notification-box').fadeOut(); $('.blink-1').hide();
setTimeout(() => {
  $('#unicorn-png').fadeOut();
}, 1000);
})

$("#w-form-done").hide();

function closeTqMessage(){
  $("#w-form-done").hide();
}

jQuery(function ($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});

function removeVal(){
  $("#privacy-policy").attr("value", "");
}
function handelcheck() {
  if (document.getElementById('privacy-policy').checked) {
      $("#privacy-policy").attr("value", "agree with the privacy-policy");
      console.log($("#privacy-policy").val());
  }else{
    removeVal();
  }

}

$(document).ready(function () {
  // show submit button *only* when all
  // .required fields have a value
  //
 
  var checkRequired = function () {
    var allValid = true; // assume we're ready
    checked = $("#privacy-policy").is(":checked");
    $(".required").each(function () {
      if (this.value.trim() === "" ) {
        // fail as soon as we hit an empty field
        allValid = false;
        return false; // this ends the each() loop
      }
    });
    
    $("#btn-send-dis").toggle(!allValid);
    $("#btn-send").toggle(allValid);
    $(".err-msg").toggle(!allValid);
  };

  $(".required").bind("keyup change blur", checkRequired);

  checkRequired();
  // start off in a correct state
});

$(document).ready(function (){
  validate1();
  $('#service, #budget, #message').change(validate1);
});

 
 
$('#frs-next').hide();
function validate1(){
  if ($('#service').val().length   >   0   &&
      $('#budget').val().length  >   0   &&
      $('#message').val().length > 2  ) {
       $('#frs-next-dis').hide();
        $('#frs-next').show();
  }
  else {
    $('#frs-next-dis').show();
    $('#frs-next').hide();
  }
}

$(document).ready(function (){
  validate2();
  $('#name, #email, #tel').change(validate2);
});
 
$('#frs-next').hide();
function validate2(){
 
  var email = $('#email').val(), emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ($('#name').val().length   >   0   &&
      $('#email').val().length  >   0 &&
       emailReg.test(email) &&
       $('#tel').val().length >= 8 && 
      $('#tel').val().length <= 10 ) {
        $('#second-next-dis').hide();
        $('#second-next').show();
        $('#sp5').addClass('sp-tel');
        $('#tel').addClass('tel-valid');

        
  }
  else {
    $('#second-next-dis').show();
    $('#second-next').hide();
    $('#sp5').removeClass('sp-tel');
    $('#tel').removeClass('tel-valid');
    $('#tel').addClass('tel-invalid');
  }
}



$(".personal-info").hide();
$(".company-details-container").hide();
$("#frs-next").click(function () {
  $("#frst-bar").removeClass("active");
  $("#sec-bar").addClass("active");
  $(".inquiry-container").hide();
  $(".personal-info").fadeIn();
});
$("#pre").click(function () {
  $("#sec-bar").removeClass("active");
  $("#frst-bar").addClass("active");
  $(".inquiry-container").fadeIn();
  $(".personal-info").hide();
});
$("#second-next").click(function () {
  $("#sec-bar").removeClass("active");
  $("#thrd-bar").addClass("active");
  $(".personal-info").hide();
  $(".company-details-container").fadeIn();
});
$("#second-pre").click(function () {
  $("#thrd-bar").removeClass("active");
  $("#sec-bar").addClass("active");
  $(".company-details-container").hide();
  $(".personal-info").fadeIn();
});

// $(document).ready(function() {
//   // show submit button *only* when all
//   // .required fields have a value
//   //
//   var checkRequired = function() {
//     var frstsecValid = true;   // assume we're ready

//     $('.sec-1').each(
//       function() {
//         if (this.value.trim() === "") {
//           // fail as soon as we hit an empty field
//           frstsecValid = false;
//           return false;    // this ends the each() loop
//         }
//       }
//     );

//     $('.personal-info').toggle(frstsecValid);

//   }

//   $('.required').bind('keyup change blur', checkRequired);

//   checkRequired();
//   // start off in a correct state
// });

//sinding the form to email using fetch method
function handelEmail() {
  fetch("https://formsubmit.co/ajax/8c7bd535ecdd66d0e55e8d0ac781cabe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      service: $("#service").val(),
      Estimated_Budget: $("#budget").val(),
      Name: $("#name").val(),
      Company: $("#company").val(),
      Telephone: $("#tel").val(),
      Email: $("#email").val(),
      Message: $("#message").val(),
      _subject: "New Lead: Customer Inquiry",
      _cc: "med@creativeunicorn.com",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success === "true") {
        $("#w-form-done").fadeIn();
        $("#btn-send").hide();
      }
    })

    .catch((error) => console.log(error));
}


$('#tel').bind('keyup blur', function () {
  var node = $(this);
  node.val(node.val().replace(/[^0-9\.]/g, ''));
}
);
$(window).ready(function () {
  $(".err-msg").hide();
  $("#btn-dis").click(function () {
    $(".err-msg").show();
  });

  if ($(window).width() < 797) {
    $("#duble-cu-slide").remove();
  }
});

var timer;

$("#copyrite-visible")
  .on("mouseover", function () {
    clearTimeout(timer);
    openSubmenu();
  })
  .on("mouseleave", function () {
    timer = setTimeout(closeSubmenu, 1000);
  });

function openSubmenu() {
  $("#copyrite-hidden").css("display", "block");
}
function closeSubmenu() {
  $("#copyrite-hidden").css("display", "none");
}
$("#copyrite-visible")
  .on("mouseover", function () {
    clearTimeout(timer);
    openSubmenu();
  })
  .on("mouseleave", function () {
    timer = setTimeout(closeSubmenu, 1500);
  });

// ----------
var timer2;
function openUi() {
  $("#hidden").css("display", "block");
}
function closeUi() {
  $("#hidden").css("display", "none");
}
$("#visible")
  .on("mouseover", function () {
    clearTimeout(timer2);
    openUi();
  })
  .on("mouseleave", function () {
    timer2 = setTimeout(closeUi, 1500);
  });
//--------
var timer3;
function openVid() {
  $("#video-hidden").css("display", "block");
}
function closeVid() {
  $("#video-hidden").css("display", "none");
}
$("#video-visible")
  .on("mouseover", function () {
    clearTimeout(timer3);
    openVid();
  })
  .on("mouseleave", function () {
    timer3 = setTimeout(closeVid, 1500);
  });

console.log($("#message").change());
$("#message").change(function () {
  $("#frst-bar").addClass("done");
});
$("#tel").change(function () {
  $("#sec-bar").addClass("done");
});
$("#company").change(function () {
  $("#thrd-bar").addClass("done");
});



 