$('.js-connect-bar').click(function() {
    $('.js-connect').animate({
        // box-shadow: -2px 0px 2px 0 rgba(10, 10, 10, 0.1),
        left: '55%'
    }, 800);
    $('.home-gallery-box').animate({
        opacity: '0.4'
    },500);
});
$('.js-home-bar').click(function() {
    $('.js-connect').animate({
        // box-shadow: -2px 0px 2px 0 rgba(10, 10, 10, 0.1),
        left: '100%'
    }, 800);
    $('.home-gallery-box').animate({
        opacity: '1'
    },700);
});

