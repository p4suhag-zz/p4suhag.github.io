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
    },1800);
});
$('.js-work-bar').click(function() {
    $('.js-work-page').css('visibility', 'visible');
    $('.js-geek-about').animate({
        opacity: '1',
        top: '0'
    },900);
    $('.geekfunnel-coverpic').animate({
        left: '0',
        opacity: '1'
    },1100);
});
$('.js-close-button').click(function() {
    $('.work-page').css('visibility', 'hidden');
});

$('.js-work-page').scroll(function(){
   var pageScroll = $('.js-work-page').scrollTop(),
       geeksubposition = $('.geekfunnel-subcontainer').offset().top;

    // var docScroll = $(this).scrollTop(), 
    //     boxCntOfset = $(".box-container").offset().top - 100;
    
    // console.log(docScroll);
    // console.log(pageScroll);
    // console.log(geeksubposition);
    if (pageScroll >= geeksubposition) {
        console.log('hello');
        $('.geekfunnel-pic').animate({
            opacity: '1'
        },1100);
    }
    //when rich top of boxex than fire
    // if(docScroll >= boxCntOfset ) {

    //   $("#first").fadeIn(200)
    
    // } else {
    //  $("#first").fadeOut(200)
    
    // }
}) 