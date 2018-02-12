



// window.addEventListener('scroll', function() {
//     if (window.pageYOffset >= menuPosition.top && !isAdded) {
//         menu.classList.add('sticky');
//         menu.parentNode.insertBefore(placeholder, menu);
//         isAdded = true;
//     } else if (window.pageYOffset < menuPosition.top && isAdded) {
//         menu.classList.remove('sticky');
//         menu.parentNode.removeChild(placeholder);
//         isAdded = false;
//     }
// });







 //move down

  
  $(".span1").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down1").offset().top},
        'slow');
});
$(".span2").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down2").offset().top},
        'slow');
});
$(".span22").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down22").offset().top},
        'slow');
});
$(".span3").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down3").offset().top},
        'slow');
 
 });
//  $(".span3").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".scroll_down221").offset().top},
//         'slow');
 
// });
//   $(".span31").click(function() {
//     $('html,body').animate({
//         scrollTop: $(".scroll_down3").offset().top},
//         'slow');
 
// });
  $(".span4").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down4").offset().top},
        'slow');
});
  $(".span5").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down5").offset().top},
        'slow');
});
   $(".span6").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down6").offset().top},
        'slow');
});
   $(".span7").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down7").offset().top},
        'slow');
});
  $(".span8").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down8").offset().top},
        'slow');
});
  $(".span9").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down9").offset().top},
        'slow');
});



$(".JeanArp").click(function() {
    $('html,body').animate({
        scrollTop: $("#JeanArp").offset().top},
        'slow');
});
$(".GeorgesBraque").click(function() {
    $('html,body').animate({
        scrollTop: $("#GeorgesBraque").offset().top},
        'slow');
});
$(".MarcChagall").click(function() {
    $('html,body').animate({
        scrollTop: $("#MarcChagall").offset().top},
        'slow');
});
$(".MaxErnst").click(function() {
    $('html,body').animate({
        scrollTop: $("#MaxErnst").offset().top},
        'slow');
});
$(".LucioFontana").click(function() {
    $('html,body').animate({
        scrollTop: $("#LucioFontana").offset().top},
        'slow');
});

 $(".LeCorbusier").click(function() {
    $('html,body').animate({
        scrollTop: $("#LeCorbusier").offset().top},
        'slow');
});
 $(".PabloPicasso").click(function() {
    $('html,body').animate({
        scrollTop: $("#PabloPicasso").offset().top},
        'slow');
});

// $('#back-top').click(function () {
//             $('body,html').animate({
//                 scrollTop: 0
//             }, 800);
//             return false;
//         });
// $('#back-top-life').click(function () {
//             $('body,html').animate({
//                 scrollTop: 0
//             }, 800);
//             return false;
//         });
$('#back_up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

//sidenav

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




// document.getElementById("demo").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML;
// }



// $('#change').click(function() {
//     $('#foo').css({
//         // 'background-color': 'red',
//         // 'color': 'white',
//         // 'font-size': '44px'


//         'width': '500px' ,
//         'height': '500px' ,
//         'background-color': 'red' ,
//     'position': 'relative' ,
//     'top': '200px' ,
//     '-webkit-animation': 'mymove' ,/* Safari 4.0 - 8.0 */
//     '-webkit-animation-duration': '2s' , /* Safari 4.0 - 8.0 */
//     'animation': 'mymove' ,
//     'animation-duration': '2s'
//     });
// });
// AOS.init({
//  duration: 1200
// });
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

