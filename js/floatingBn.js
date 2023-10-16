// 스크롤 업 버튼
$(function (){
    $('.btnScrollToTop').on('click', function() {
        $('html, body').animate({scrollTop: '0'}, 680);
    });
});


// 서브페이지 우측 상단 스크롤업 버튼
$(function (){
    $(".goodsbn_wrap .goodsbn_box .goodsbn_close").on('click', function() {
        $('.goodsbn_wrap').hide();
    });
});
