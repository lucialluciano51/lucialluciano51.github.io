$(document).ready(function () {
    // display nav based on screen size
    function displayNav() {
        if ($(window).width() > 768) {
            $('.main-nav ul').show();
        } else {
            $('.main-nav ul').hide();
        }
    }

    displayNav();

    // Change nav if screen is resized
    $(window).resize(function () {
        displayNav();
    });

    // Register click to open and close nav
    $('.burger-icon').on('click', function () {
        $('.main-nav ul').slideToggle();
    });
});