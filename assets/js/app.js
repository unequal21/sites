$(document).ready(function(){

    // --------  SLIDER ----------
    $('.slider').slick({
        arrows:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:4500,
        touchTreshhold:10,
        vertical:false,
        verticalSwiping:false,
        infinite:true,
        rows:1,
    });
    //  -----------------------------

    // ----------  SPOILER ---------- 
    // $('.spoiler__btn').click(function(event) {
    //     if($('.services__body').hasClass('one')){
    //         $('.spoiler__btn').not($(this)).removeClass('active');
    //         $('.services__item-content').not($(this).next()).slideUp(300);
    //     }
    //     $(this).toggleClass('active').next().slideToggle(300)
    // }); 
    // -----------------------------------------------------

    // ------------  BURGER ---------
    $('.main__burger').click(function(event){
        $('.main__burger, .top__menu nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    // ----------------------------------

    // ------------  HZ 4e 3to --------
    // $("#menu").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 700);
    // });
    // --------------------------------

    // ------------------- UP BUTTON-----------
    // $(".yak").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 300);
    // });
    // $("#buttonUp").on("click","a", function (event) {
    //     event.preventDefault();
    //     var id  = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 500);
    // });
    // $(window).scroll(function() {
    //     // если пользователь прокрутил страницу более чем на 200px
    //     if ($(this).scrollTop()>200) {
    //       // то сделать кнопку scrollup видимой
    //     $('#buttonUp').fadeIn();
    //     }
    //     // иначе скрыть кнопку scrollup
    //     else {
    //     $('#buttonUp').fadeOut();
    //     }
    // });
    // ----------------------------------
});