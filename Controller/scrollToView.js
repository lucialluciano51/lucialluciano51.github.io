$(document).ready(function () {
    $('.subnav-education').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $('.education').offset().top - 70
        }, 750);
    });
    $('.subnav-work').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $('.work-experience').offset().top - 70
        }, 750);
    });
    $('.subnav-skills').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $('.my-skills').offset().top - 70
        }, 750);
    });
    $('.subnav-additional').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $('.additional').offset().top - 70
        }, 750);
    });
});