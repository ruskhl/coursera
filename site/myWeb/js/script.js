$(".navbar-brand").click(function() {
    $('html,body').animate({
        scrollTop: $("#section_main").offset().top},
        'slow');
});

$(".li1").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');
});
$(".li2").click(function() {
    $('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
});
$(".li3").click(function() {
    $('html,body').animate({
        scrollTop: $("#section3").offset().top},
        'slow');
});