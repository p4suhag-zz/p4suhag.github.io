var hometitlename = $('.title-name').html(),
    aboutdesc = $('.font-big').html(),
    resumelink = $('.resume-link').html(),
    personallink = '<a href="https://www.facebook.com/psuhag1" class="style-none" target="_blank">facebook</a> | <a href="https://twitter.com/p4suhag" class="style-none" target="_blank">twitter</a> | <a href="https://github.com/p4suhag" class="style-none" target="_blank">github</a> | <a href="mailto:p4suhag@gmail.com" class="style-none">email</a><span>Dial - 9821063260</span>',
    personallinkimg = '<a href="https://www.facebook.com/psuhag1"><img src="images/fb.svg"><a href="https://twitter.com/p4suhag"><img src="images/twtr.svg"></a><a href="https://github.com/p4suhag"><img src="images/github.svg"></a><a href="mailto:p4suhag@gmail.com"><img src="images/mail.svg"></a>';

$('.js-connect-bar').click(function() {
    $('.js-home-desc-about').animate({
        opacity: '0'
    }, 700);
    setTimeout(function() {
        $('.title-name').text('Say Hello !');
        $('.font-big').text("If you think I am suitable for your project or if you'd just like to say hello, feel free to get in touch.");
        $('.resume-link').html(personallinkimg);
    },700);
    $('.js-home-desc-about').animate({
        opacity: '1'
    }, 800);
});
$('.js-home-bar').click(function() {
    $('.js-home-desc-about').animate({
        opacity: '0'
    }, 700);
    setTimeout(function() {
        $('.title-name').text(hometitlename);
        $('.font-big').text(aboutdesc);
        $('.resume-link').html(resumelink);
    },700);
    $('.js-home-desc-about').animate({
        opacity: '1'
    }, 800);
});
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