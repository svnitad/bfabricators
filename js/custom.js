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
    <a href="/about" class="nav-items">About</a>
    <a href="#products" class="nav-items">Product</a>
    <a href="/services" class="nav-items">Services</a>
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

var card = document.querySelectorAll('.card-container .card1');
var content = document.querySelectorAll('.card1 .content');
var length = card.length-1;

$('.slider-btn .next').click(function (e) {
    card[c].classList.remove('active');
    card[c].classList.remove('w3-animate-top');
    content[c].classList.add('hide');
    c++;
    if (c == length+1) {
        c = 0;
        for (let i = 0; i < 5; i++) {
            card[i].classList.remove('hidden');
            card[length-i].classList.add('hidden');
        }
    }
    if(c >= 5)
    {
        card[c-5].classList.add('hidden');
        card[c].classList.remove('hidden');
    }
    card[c].classList.add('active');
    card[c].classList.add('w3-animate-top');
    content[c].classList.remove('hide');
});

$('.slider-btn .prev').click(function (e) {
    card[c].classList.remove('active');
    card[c].classList.remove('w3-animate-top');
    content[c].classList.add('hide');
    
    c--;
    if (c < 0) {
        c = length;
        for (let i = 0; i < 5; i++) {
            card[i].classList.add('hidden');
            card[length-i].classList.remove('hidden');
        }
    }
    if(c < length - 4)
    {
        card[c+5].classList.add('hidden');
        card[c].classList.remove('hidden');
    }
    card[c].classList.add('active');
    card[c].classList.add('w3-animate-top');
    content[c].classList.remove('hide');
});

var d = 0;
var card2 = document.querySelectorAll('.card-container2 .card2');
var content1 = document.querySelectorAll('.card2 .content2');
var length = card2.length-1;

$('.slider-btn2 .next2').click(function (e) {
    card2[d].classList.remove('active');
    card2[d].classList.remove('w3-animate-top');
    content1[d].classList.add('hide');
    d++;
    if (d == length+1) {
        d = 0;
        for (let i = 0; i < 5; i++) {
            card2[i].classList.remove('hidden');
            card2[length-i].classList.add('hidden');
        }
    }
    if(d >= 5)
    {
        card2[d-5].classList.add('hidden');
        card2[d].classList.remove('hidden');
    }
    card2[d].classList.add('active');
    card2[d].classList.add('w3-animate-top');
    content1[d].classList.remove('hide');
});

$('.slider-btn2 .prev2').click(function (e) {
    card2[d].classList.remove('active');
    card2[d].classList.remove('w3-animate-top');
    content1[d].classList.add('hide');
    
    d--;
    if (d < 0) {
        d = length;
        for (let i = 0; i < 5; i++) {
            card2[i].classList.add('hidden');
            card2[length-i].classList.remove('hidden');
        }
    }
    if(d < length - 4)
    {
        card2[d+5].classList.add('hidden');
        card2[d].classList.remove('hidden');
    }
    card2[d].classList.add('active');
    card2[d].classList.add('w3-animate-top');
    content1[d].classList.remove('hide');
});
