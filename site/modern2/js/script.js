function myFunction(x) {
    x.classList.toggle("change");
    var element = document.getElementById("mySidenav");
    element.classList.toggle("mystyle");
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.position = "fixed";
   

   
    }
}

// var sidebar = document.getElementById('nav');
// Stickyfill.add(sidebar); 


// Demo by Aurelio De Rosa (@AurelioDeRosa)
// See article: http://www.sitepoint.com/css-position-sticky-introduction-polyfills/

var menu = document.querySelector('.nav');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;



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


