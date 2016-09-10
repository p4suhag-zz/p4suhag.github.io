// $('.js-connect-bar').click(function() {
//     $('.js-connect').animate({
//         // box-shadow: -2px 0px 2px 0 rgba(10, 10, 10, 0.1),
//         left: '55%'
//     }, 1100);
//     $('.home-gallery').animate({
//         opacity: '0'
//     },700);
// });
// $('.js-home-bar').click(function() {
//     $('.js-connect').animate({
//         // box-shadow: -2px 0px 2px 0 rgba(10, 10, 10, 0.1),
//         left: '100%'
//     }, 1000);
//     $('.home-gallery').animate({
//         opacity: '1'
//     },1800);
// });
$('.js-work-bar').click(function() {
    $('.js-work-page').css('visibility', 'visible');
    $('.js-geek-about').animate({
        opacity: '1',
        top: '0'
    },900);
    $('.js-geekfunnel-coverpic').animate({
        left: '0',
        opacity: '1'
    },1100);
});
$('.js-close-button').click(function() {
    $('.work-page').css('visibility', 'hidden');
});

$('.js-work-page').scroll(function(){
   var pageScroll = $('.js-work-page').scrollTop(),
       geeksubposition = $('.geekfunnel-subcontainer').offset().top,
       weaponxsubposition = $('.weaponx-container').offset().top;

    
    if (pageScroll >= geeksubposition) {
        console.log('hello');
        $('.js-geeksubpic1').animate({
            opacity: '1',
            left: '0'
        },1100);
        $('.js-geeksubinfo1').animate({
            opacity: '1',
            left: '0'
        },1300);
    }
    if (pageScroll >= geeksubposition + 400) {
        console.log('hello');
        $('.js-geeksubpic2').animate({
            opacity: '1',
            left: '0'
        },1100);
        $('.js-geeksubinfo2').animate({
            opacity: '1',
            left: '0'
        },1500);
    }
    if (pageScroll >= weaponxsubposition + 700) {
        $('.js-weaponx-about').animate({
            opacity: '1',
            top: '0'
        },1100);
        $('.js-weaponx-coverpic').animate({
            left: '0',
            opacity: '1'
        },1100);
    }
    
}) 