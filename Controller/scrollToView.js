$(document).ready(function () {
    // CV SCROLL
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

    // OPEN/CLOSE MOBILE SUBNAV


    function mobileSubnavDropdown() {
        $(window).off('scroll');
        if ($(window).width() >= 768) {
            $('.subnav-quick-access').hide();
            $('.subnav-option').show();
            $(window).off('scroll');
        } else {
            $('.subnav-quick-access').show();
            $('.subnav-option').hide();

            $('.subnav-quick-access').off('click').on('click', function () {
                $('.subnav-option').slideToggle();
            });

            $('.subnav-option').off('click').on('click', function () {
                $('.subnav-option').slideUp();
            });

            $(window).off('scroll').on('scroll', function () {
                $('.subnav-option').slideUp();
            });
        }
    }


    mobileSubnavDropdown();
    $(window).resize(function () {
        mobileSubnavDropdown();
    });


});