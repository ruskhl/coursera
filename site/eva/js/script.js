var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}








//navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//move down
    $("p").click(function() {
    $('html,body').animate({
        scrollTop: $(".bg6").offset().top},
        'slow');
});