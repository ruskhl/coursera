function myFunction(x) {
    x.classList.toggle("change");
    var element = document.getElementById("mySidenav");
    element.classList.toggle("mystyle");
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.position = "fixed";
   

   
    }
}


var sidebar = document.getElementById('sidebar');
Stickyfill.add(sidebar);







// //browser window scroll (in pixels) after which the "back to top" link is shown
// var offset = 300,
//   //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
//   offset_opacity = 1200,
//   //duration of the top scrolling animation (in ms)
//   scroll_top_duration = 700;





// $(document).ready(function(){
  
//   //Check to see if the window is top if not then display button
//   $(window).scroll(function(){
//     if ($(this).scrollTop() > 100) {
//       $('.top').fadeIn();
//     } else {
//       $('.top').fadeOut();
//     }
//   });
  
//   //Click event to scroll to top
//   $('.top').click(function(){
//     $('html, body').animate({scrollTop : 0},800);
//     return false;
//   });
  
// });