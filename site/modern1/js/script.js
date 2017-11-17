function myFunction(x) {
    x.classList.toggle("change");
    var element = document.getElementById("mySidenav");
    element.classList.toggle("mystyle");
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.position = "fixed";
   

   
    }
}

window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.getElementById("wrapper").offsetTop) {
    document.getElementById("extras").style.position = "fixed";
    document.getElementById("wrapper").style.marginTop = "50px";
    document.getElementById("extras").style.marginTop = "-50px";
  } else {
    document.getElementById("extras").style.position = "static";
    document.getElementById("wrapper").style.marginTop = "0px";
    document.getElementById("extras").style.marginTop = "0px";
  }
}




// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);

//     $window.scroll(function (e) {
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };

// $('#extras').followTo(250);





// /* Set the width of the side navigation to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }



//function to make red background on click nav-list

// $(document).ready(function()
// {
//     $("li a").click(function()
//     {
//         $("li a.active-text").removeClass("active-text");
//         $(this).addClass("active-text");
//     });
// });