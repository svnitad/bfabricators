$("nav").html(`<div class="logo">
    <a href="/">
        <img src="img/logo.png" alt="logo">
    </a>
</div>
<div class="bars">
    <i class="fas fa-bars"></i>
</div>
<div class="right hid">
    <a href="/" class="nav-items">Home</a>
    <a href="about.html" class="nav-items">About</a>
    <a href="#products" class="nav-items">Product</a>
    <a href="services.html" class="nav-items">Services</a>
    <a href="#contact" class="nav-items">Contact</a>
</div>`);

var isOpen = false;
$(".bars").click(function () { 
    $(".bars i").toggleClass("fa-bars fa-times");
    $('nav').toggleClass('bg-white');
    var a = $('nav .nav-items');
    if (!isOpen) {
        $('nav').css({ 'height': $('nav').height() + a.get(0).offsetHeight * a.length });
        isOpen = true;
    } else {
        $('nav').height(93);
        isOpen = false;
    }
});

var c = 0;
var card = document.querySelectorAll('.card-container .card');
var content = document.querySelectorAll('.card .content');

$('.slider-btn .next').click(function (e) {
    card[c].classList.remove('active');
    card[c].classList.remove('w3-animate-top');
    content[c].classList.add('hide');
    c++;
    if (c == card.length) {
        c = 0;
    }
    card[c].classList.add('active');
    card[c].classList.add('w3-animate-top');
    content[c].classList.remove('hide');
});

$('.slider-btn .prev').click(function (e) {
    card[c].classList.remove('active');
    card[c].classList.remove('w3-animate-top');
    content[c].classList.add('hide');
    if (c == 0) {
        c = card.length;
    }
    c--;
    card[c].classList.add('active');
    card[c].classList.add('w3-animate-top');
    content[c].classList.remove('hide');
});
