$("nav").html(`<div class="logo">
    <a href="index.htm">
        <img src="img/logo.png" alt="logo">
    </a>
</div>
<div class="bars">
    <i class="fas fa-bars"></i>
</div>
<div class="right hide">
    <a href="about.htm" class="nav-items">About</a>
    <a href="index.htm#products" class="nav-items">Product</a>
    <a href="services.htm" class="nav-items">Services</a>
    <a href="#contact" class="nav-items">Contact</a>
</div>`);

$(".bars").click(function () { 
    $('nav').toggleClass('bg-white');
    $('nav .right').toggleClass('hide');
});
