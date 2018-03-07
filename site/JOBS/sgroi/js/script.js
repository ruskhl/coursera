
var settings = {

//height of sphere container

height: 400,

//width of sphere container

width: 400,

//radius of sphere

radius: 150,

//rotation speed

speed: 1,

//sphere rotations slower

slower: 0.9,

//delay between up<a href="https://www.jqueryscript.net/time-clock/">date</a> position

timer: 5,

//dependence of a font size on axis Z

fontMultiplier: 15,

//tag css stylies on mouse over

hoverStyle: {

border: 'none',

color: '#0b2e6f'

},

//tag css stylies on mouse out

mouseOutStyle: {

border: '',

color: ''

}

};

 

$(document).ready(function(){

$('#tagcloud').tagoSphere(settings);

 });

//Startpage

// function myFunction() {
//     var h = document.createElement("H1");
//     var t = document.createTextNode("Hello World");
//     h.appendChild(t);
//     document.body.appendChild(h);
// }



// function myFunction() {

// 	var h = document.createElement("p");
  
//     var x = document.getElementById("myText").value;
    
//     var x = document.createTextNode();
//     document.createTextNode("myText");
//     document.getElementById("demo").innerHTML = x;
    
//     document.getElementById("demo").innerHTML = x;
//      h.appendChild(x);
//     document.body.appendChild(h);
    // var h = document.createElement("H1");
    // var t = document.createTextNode("myText");
    // var x = document.getElementById("myText").value;
// }


// function myFunction() {
//     var h = document.createElement("demo");
//     var t = document.createTextNode("myText");
//     h.appendChild(t);
//     document.body.appendChild(h);
// }


$('#blog').bind('toggle', function()   
{  
    var $blog = $(this);  
    if ($blog.is(':visible')) $blog.trigger('hide');  
    else $blog.trigger('show')  
})  
    .bind('show', function()  
    {  
    $(this).slideDown('show');  
})  
    .bind('hide', function()   
    {  
    $(this).slideUp('hide');  
});  
$('#blogbutton').removeAttr('href').  
click(function()   
{  
    $('#blog').trigger('toggle');  
});