var hometitlename = $('.title-name').html(),
    aboutdesc = $('.font-big').html(),
    resumelink = $('.resume-link').html(),
    personallink = '<a href="https://www.facebook.com/psuhag1" class="style-none" target="_blank">facebook</a> | <a href="https://twitter.com/p4suhag" class="style-none" target="_blank">twitter</a> | <a href="https://github.com/p4suhag" class="style-none" target="_blank">github</a> | <a href="mailto:p4suhag@gmail.com" class="style-none">email</a><span>Dial - 9821063260</span>',
    personallinkimg = '<a href="https://www.facebook.com/psuhag1"><img src="images/fb.svg"><a href="https://twitter.com/p4suhag"><img src="images/twtr.svg"></a><a href="https://github.com/p4suhag"><img src="images/github.svg"></a><a href="mailto:p4suhag@gmail.com"><img src="images/mail.svg"></a><a href="tel:+91-9821063260" class="phone-icon-box"><img src="images/phone.svg" class="phone-icon" style="padding: 5.5px; margin-right: 0;"></a><a class="phone-no">+91-9821063260</a>';

$('.js-connect-bar').click(function() {
    $('.js-home-desc-about').animate({
        opacity: '0'
    }, 700);
    setTimeout(function() {
        $('.title-name').text('Say Hello!');
        $('.font-big').html("Feel free to get in touch, whether you simply want to say hello or are in search of something specific! I'm always interested in working on new projects.<br>Let's build something amazing together.");
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
       geeksubposition = $('.js-geekfunnel-coverpic').offset().top,
       weaponxsubposition = $('.weaponx-container').offset().top;

    
    if (pageScroll >= geeksubposition + 200) {
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
    if (pageScroll >= geeksubposition + 1200) {
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

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
        $('.js-work-page').css('visibility', 'hidden');
    }
};



