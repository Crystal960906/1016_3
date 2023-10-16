//--------------ebook 배너 슬라이더--------------

$(function () {
    var maxSlides = 12; 

    $('.right_ebook_banner .swiper-pagination .swiper-pagination-total').text(maxSlides);

    $('.right_ebook_banner .swiper_wrapper').slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        infinite: true, 
        speed: 500, 
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    });

    $('.right_ebook_banner .swiper_wrapper').on('afterChange', function (event, slick, currentSlide) {
        var slide = currentSlide + 1;
        $('.right_ebook_banner .swiper-pagination .swiper-pagination-current').text(slide);
    });

    $(".right_ebook_banner .swiper-button-prev").on('click',function(e) {
        $(".right_ebook_banner .swiper_wrapper").slick("slickPrev");
    });

    $(".right_ebook_banner .swiper-button-next").on('click',function(e) {
        $(".right_ebook_banner .swiper_wrapper").slick("slickNext");
    });
});

//-------------- right_big_bn 슬라이더--------------

$(function () {
    var maxSlides = 3; 

    $('.right_big_bn .swiper_section .swiper-pagination .swiper-pagination-total').text(maxSlides);

    $('.welcome_section1 .right_big_bn .swiper_section .swiper_wrapper').slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        infinite: true, 
        speed: 500, 
        cssEase: 'linear',

    });

    $('.welcome_section1 .right_big_bn .swiper_section .swiper_wrapper').on('afterChange', function (event, slick, currentSlide) {
        var slide = currentSlide + 1;
        $('.swiper-pagination .swiper-pagination-current').text(slide);
    });

    $(".right_big_bn .swiper_section .swiper-button-prev").on('click',function(e) {
        $(".right_big_bn .swiper_wrapper").slick("slickPrev");
    });

    $(".right_big_bn .swiper_section .swiper-button-next").on('click',function(e) {
        $(".right_big_bn .swiper_wrapper").slick("slickNext");
    });
});



// --------------편집장의 선택 탭-------------------------


$(function () {
    $("#editorchoice_tab").on('hover',function(){

        $(".editor_choice #editorchoice .swiper_wrapper").slick({
            slidesToShow: 4,
            slidesToScroll: 4,

        });
        $(".editor_btn .editor-button-prev").on('click',function(e) {
            $(".editor_choice #editorchoice .swiper_wrapper").slick("slickPrev");
        });
    
        $(".editor_btn .editor-button-next").on('click',function(e) {
            $(".editor_choice #editorchoice .swiper_wrapper").slick("slickNext");
        });
    });

});




$(function () {
    $("#ebookchoice_tab").on('hover',function(){
        $(".editor_choice #ebookchoice .swiper_wrapper").slick({
            slidesToShow: 4,
            slidesToScroll: 4,

        });
        $(".editor_btn .editor-button-prev").on('click',function(e) {
            $(".editor_choice #ebookchoice .swiper_wrapper").slick("slickPrev");
        });
    
        $(".editor_btn .editor-button-next").on('click',function(e) {
            $(".editor_choice #ebookchoice .swiper_wrapper").slick("slickNext");
        });
    });
});


$(function () {
    $("editor_choice_tab").on('hover',function(){
        $(".editor_choice #foreignchoice .swiper_wrapper").slick({
            slidesToShow: 4,
            slidesToScroll: 4,

        });
        $(".editor_btn .editor-button-prev").on('click',function(e) {
            $(".editor_choice #foreignchoice .swiper_wrapper").slick("slickPrev");
        });
    
        $(".editor_btn .editor-button-next").on('click',function(e) {
            $(".editor_choice #foreignchoice .swiper_wrapper").slick("slickNext");
        });
    });
});


$(function () {

    $("#goodschoice_tab").on('hover',function(){
        $(".editor_choice #goodschoice .swiper_wrapper").slick({
            slidesToShow: 3,
            slidesToScroll: 3,

        });
        $(".editor_btn .editor-button-prev").on('click',function(e) {
            $(".editor_choice #goodschoice .swiper_wrapper").slick("slickPrev");
        });
    
        $(".editor_btn .editor-button-next").on('click',function(e) {
            $(".editor_choice #goodschoice .swiper_wrapper").slick("slickNext");
        });
    });
    
});


// --------------------------화제의 책 소식 슬라이더 

$(function () {
    $("#w_topic_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_topic_type .white_circle_prev").on('click',function(e) {
        $("#w_topic_type .w_topic .swiper_wrapper").slick("slickPrev");
    });

    $("#w_topic_type .white_circle_next").on('click',function(e) {
        $("#w_topic_type .w_topic .swiper_wrapper").slick("slickNext");
    });
    
});

// --------------------------알라딘이 만든 사은품 슬라이더 

$(function () {
    $("#w_gift_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_gift_type .white_circle_prev").on('click',function(e) {
        $("#w_gift_type .w_gift .swiper_wrapper").slick("slickPrev");
    });

    $("#w_gift_type .white_circle_next").on('click',function(e) {
        $("#w_gift_type .w_gift .swiper_wrapper").slick("slickNext");
    });
    
});

// -------------------------중간 광고 배너 슬라이더 

$(function () {
    $("#w_eventbanner_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_eventbanner_type .white_circle_prev").on('click',function(e) {
        $("#w_eventbanner_type .w_banner .swiper_wrapper").slick("slickPrev");
    });

    $("#w_eventbanner_type .white_circle_next").on('click',function(e) {
        $("#w_eventbanner_type .w_banner .swiper_wrapper").slick("slickNext");
    });
    
});

// --------------------------투비컨티뉴드 슬라이더

$(function () {
    $("#w_tobe_type #w_tobe .swiper_wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
    });
    $("#w_tobe_type .white_circle_prev").on('click',function(e) {
        $("#w_tobe_type #w_tobe .swiper_wrapper").slick("slickPrev");
    });

    $("#w_tobe_type .white_circle_next").on('click',function(e) {
        $("#w_tobe_type #w_tobe .swiper_wrapper").slick("slickNext");
    });
    
});


// --------------------------마지막 광고 배너슬라이더 

$(function () {
    $("#w_bottombanner_type .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $("#w_bottombanner_type .white_circle_prev").on('click',function(e) {
        $("#w_bottombanner_type .w_banner .swiper_wrapper").slick("slickPrev");
    });

    $("#w_bottombanner_type .white_circle_next").on('click',function(e) {
        $("#w_bottombanner_type .w_banner .swiper_wrapper").slick("slickNext");
    });
    
});