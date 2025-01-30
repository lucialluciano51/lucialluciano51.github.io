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
        if($(window).width() >= 768){
            $('.subnav-quick-access').hide();
            $('.subnav-option').show();
        } else {
            $('.subnav-quick-access').show();
            $('.subnav-option').hide();

            $('.subnav-quick-access').on('click', function(){
                $('.subnav-option').slideToggle();
            });

            $('.subnav-option').on('click', function(){
                $('.subnav-option').slideUp();
            });

            $(window).on('scroll', function(){
                $('.subnav-option').slideUp();
            });
        }
    }

    mobileSubnavDropdown();
    $(window).resize(function(){
        mobileSubnavDropdown();
    });


});