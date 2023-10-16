
//------------------------------------------------웰컴 탑 컨텐츠 전환 이벤트

$(function(){
    $('.welcome_top_tab .swiper_wrapper .swiper_item').on('mouseover',function () {
        $('.welcome_top_content').hide();
        $('.welcome_top_content').eq($(this).index()).show();
    },function () {
        $('.welcome_top_content').hide();
        $('.welcome_top_content').eq($(this).index()).show();
    });
});


$(function () {
    // 값 초기화
    var currentIndex = 0;

    // 슬라이더 마다 index 지정해주기
    function showNextSlide() {
        $('.welcome_top_content').hide();
        currentIndex = (currentIndex + 1) % $('.welcome_top_tab .swiper_wrapper .swiper_item').length;
        $('.welcome_top_content').eq(currentIndex).show();
        
        // 현재 인덱스로 바뀔때마다 업데이트 해주기
        $('.welcome_top_tab .swiper_wrapper .swiper_item').eq(currentIndex).addClass('welcome_hover').siblings().removeClass('welcome_hover');
    }

    // 다음 슬라이더는 setInterval함수를 통해서 2초의 간격을 둠
    var interval = setInterval(showNextSlide, 2000);

    //마우스 올리면 슬라이더 자동재생 멈춤
    $('.welcome_top_tab .swiper_wrapper .swiper_item').on('mouseover', function () {
        clearInterval(interval); 
    });

    //마우스가 해당 영역을 벗어나면 슬라이더 자동재생 다시 시작
    $('.welcome_top_tab .swiper_wrapper .swiper_item').on('mouseout', function () {
        interval = setInterval(showNextSlide, 2000); 
    });

    //자동재생 함수
    showNextSlide();
});



// --------------------------편집장의 선택 컨텐츠 전환 이벤트
$(function () {
    $('.editor_tab a').on('mouseover',function () {
        $('.editor_list').hide();
        $('.editor_list').eq($(this).index()).show();
        $('.editor_btn div').hide();
        $('.editor_btn div').eq($(this).index()).show();
    },function () {
        $('.editor_list').hide();
        $('.editor_list').eq($(this).index()).show();
        $('.editor_btn div').hide();
        $('.editor_btn div').eq($(this).index()).show();
    })
});




