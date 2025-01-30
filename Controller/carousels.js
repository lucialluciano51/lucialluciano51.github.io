$(document).ready(function () {
    $('.cake-grid').slick({
        arrows: true, // Enable arrows
        prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Custom previous arrow (optional)
        nextArrow: '<button type="button" class="slick-next">Next</button>', // Custom next arrow (optional)
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});