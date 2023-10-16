// ---------------------------------------헤더 메뉴 호버
$(function () {
    $("#headerTop_gnb li").hover(function () {
        const Item = $(this).children("div");
        Item.show();
    }),
        $("#headerTop_gnb li").mouseleave(function () {
        const Item = $(this).children("div");
        Item.hide();
    });
});


// --------------------------편집장의 선택 호버 디자인 이벤트

$(function () {
    $(".editor_tab a").hover(function(){
        $(this).addClass("editor_on");
        $(this).siblings().removeClass("editor_on");
    },function () {
        $(this).siblings().removeClass("editor_on");
    });
});

//------------------------------ 웰컴탭 호버 디자인 이벤트

$(function () {
    $(".welcome_top_tab .swiper_wrapper .swiper_item").hover(function(){
        $(this).addClass("welcome_hover");
        $(this).siblings().removeClass("welcome_hover");
    },function () {
        $(this).siblings().removeClass("welcome_hover");
    });
});


//  ----------------우측 광고 배너 호버시 화살표 발생 이벤트

$(function () {
    $(".right_big_bn").hover(function(){
        $(".right_big_bn .swiper-button-next").show();
        $(".right_big_bn .swiper-button-prev").show();
    },function () {
        $(".right_big_bn .swiper-button-next").hide();
        $(".right_big_bn .swiper-button-prev").hide();
    });
});