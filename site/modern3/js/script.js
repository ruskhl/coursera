// function myFunction(x) {
//     x.classList.toggle("change");
//     var element = document.getElementById("mySidenav");
//     element.classList.toggle("mystyle");
//     function openNav() {
//     document.getElementById("mySidenav").style.width = "250px"
//     document.getElementById("wrapper").style.position = "fixed";
       
//     }
// }

// var menu = document.querySelector('.nav');
// var menuPosition = menu.getBoundingClientRect();
// var placeholder = document.createElement('div');
// placeholder.style.width = menuPosition.width + 'px';
// placeholder.style.height = menuPosition.height + 'px';
// var isAdded = false;


// var menu = document.querySelector('.nav');
// var menuPosition = menu.getBoundingClientRect();
// var placeholder = document.createElement('div');
// placeholder.style.width = menuPosition.width + 'px';
// placeholder.style.height = menuPosition.height + 'px';
// var isAdded = false;



window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition.top && !isAdded) {
        menu.classList.add('sticky');
        menu.parentNode.insertBefore(placeholder, menu);
        isAdded = true;
    } else if (window.pageYOffset < menuPosition.top && isAdded) {
        menu.classList.remove('sticky');
        menu.parentNode.removeChild(placeholder);
        isAdded = false;
    }
});







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
 $(".span3").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down3").offset().top},
        'slow');
//     var element = document.getElementById("id01");
// element.innerHTML = "scroll up";
// $(".span3").click(function() {
   
//     $('body,html').animate({

//                 scrollTop: 0
//             }, 800);
//             return false;
            
//         });


// var element = document.getElementById("id01");
// element.innerHTML = "scroll down to see contacts";
 
});
  $(".span4").click(function() {
    $('html,body').animate({
        scrollTop: $(".scroll_down4").offset().top},
        'slow');
});




$('#back-top').click(function () {
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







