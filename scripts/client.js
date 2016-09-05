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
$('.js-work-bar').click(function() {
    $('.work-page').css('visibility', 'visible');
});
$('.js-close-button').click(function() {
    $('.work-page').css('visibility', 'hidden');
});