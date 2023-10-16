$(function () {
    $("#sub_event .swiper_wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        dotsClass: 'dots_custom'
    });
});

// 서브페이지 슬라이더

$(function () {
    var $index = 0; 
    var item = $(".Bcoverwrap .cover .swiper_section .swiper_wrapper .swiper_item");
    var max = item.length;

    $(".Bcoverwrap .cover .arr2_right span").on("click", function () {
        if ($index < max - 1) { 
            $index++;
            console.log("클릭 후 인덱스 값은", $index);
            $(".Bcoverwrap .cover .swiper_section").removeClass("hidden");
            $(".Bcoverwrap .cover").css("overflow", "hidden");
            $("#divFlipImg").addClass("hidden");
            var translateXValue = $index * -502 + "px";
            $(".Bcoverwrap .cover .swiper_section .swiper_wrapper").css("transform", "translateX(" + translateXValue + ")");
        }
        else if ($index == max - 1) {
            $("#lastpic").css("opacity", "1");
            setTimeout(function () {
                $("#lastpic").css("opacity", "0");
            }, 2000); 
        }
    });

    $(".Bcoverwrap .cover .arr2_left span").on("click", function () {
        if ($index > 0) {
            $index--;
            console.log("클릭 후 인덱스 값은", $index);
            var translateXValue = $index * -502 + "px";
            $(".Bcoverwrap .cover .swiper_section .swiper_wrapper").css("transform", "translateX(" + translateXValue + ")");
        } else if ($index == max - 1) {
            $(".Bcoverwrap .cover .swiper_section").addClassClass("hidden");
            $(".Bcoverwrap .cover").css("overflow", "visible");
            $("#divFlipImg").removeClassClass("hidden");
        }
    });
});
