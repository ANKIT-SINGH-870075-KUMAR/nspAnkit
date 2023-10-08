$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.single-item').slick();
});

//Navbar Scrolling Effect
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("header").css("background", "white");
            $("header").css("box-shadow","0 10px 11px rgba(0,0,0,0.4)");
            $("header .white").css("display","none");
            $("header .black").css("display","flex");
        }
        else {
            $("header").css("background", "transparent");
            $("header").css("box-shadow","0 0px 0px rgba(0,0,0,0.4)");
            $("header .white").css("display","flex");
            $("header .black").css("display","none");
        }

        if($(this).scrollTop() < 200){
            // $('.specialContainer').fadeIn();
            $('.specialContainer').fadeOut();
        }
        else{
            // $('.specialContainer').fadeOut();
            $('.specialContainer').fadeIn();
        }
    });
    $('.specialContainer').fadeOut();
    // $('.top').click(function(){
    //     $('html,body').animate({scrollTop:0},5000);
    // })

    // $('.top').bind('click' , function(){
    //     $('html,body').animate({scrollTop:0},1000);
    //     return false;
    // });
});