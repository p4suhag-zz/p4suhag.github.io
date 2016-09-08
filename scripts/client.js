$('.js-connect-bar').click(function() {
    $('.js-connect').animate({
        // box-shadow: -2px 0px 2px 0 rgba(10, 10, 10, 0.1),
        left: '55%'
    }, 1100);
    $('.home-gallery').animate({
        opacity: '0'
    },700);
});
$('.js-home-bar').click(function() {
    $('.js-connect').animate({
        // box-shadow: -2px 0px 2px 0 rgba(10, 10, 10, 0.1),
        left: '100%'
    }, 1000);
    $('.home-gallery').animate({
        opacity: '1'
    },1100);
});
$('.js-work-bar').click(function() {
    $('.work-page').css('visibility', 'visible');
    $('.project-about').animate({
        opacity: '1'
    },900);
    $('.geekfunnel-coverpic').animate({
        left: '0',
        opacity: '1'
    },1100);
});
$('.js-close-button').click(function() {
    $('.work-page').css('visibility', 'hidden');
});