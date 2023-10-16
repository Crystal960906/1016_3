// ----------------------------------------------관련 구매상품 섹션 API 호출 및 Slick 적용 

$(function () {

    $(function () {
        var bookTitles = [
            "네 안에 잠든 거인을 깨워라",
            "사이토 히토리의 상식을 깨부숴라",
            "집착의 법칙",
            "사람은 생각하는 대로 된다",
            "세이노의 가르침",
            "브레인포그",
            "10억짜리 독서법",
            "그레이트 마인드셋",
            "역행자 확장판",
            "유연함의 힘",
            "돈 버는 뇌, 못 버는 뇌",
            "누구와 함께 일할 것인가",
            "사이토 히토리의 상식을 깨부숴라"
        ];
    
        var $swiperWrapper = $('.last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper');
    
        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: $.param({ query: title, size: 1 }), 
                headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
            })
            .done(function (msg) {
                if (msg.documents.length > 0) {
                    var book = msg.documents[0]; 
    
                    var $swiperItem = $("<div class='swiper_item'></div>");
                    var $cover = $("<div class='cover'></div>");
    
                    $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
    
                    $swiperItem.append($cover);
    
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");
                    $title.append("<a href='#'>" + book.title + "</a>");
                    $text.append($title);
                    $swiperItem.append($text);
                    $swiperWrapper.append($swiperItem);
                }
    
                $(function createSlick() {
                    $(".last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper").not('.slick-initialized').slick({
                        lazyLoad:'ondemand',
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        dots: true,
                        infinite: true,
                        dotsClass: 'dots_custom',
                    });
                    $(".last_wrap-buy #last_bookwrap .white_circle_prev").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper").slick("slickPrev");
                    });
                
                    $(".last_wrap-buy #last_bookwrap .white_circle_next").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-buy #last_bookwrap .swiper_section .swiper_wrapper").slick("slickNext");
                    });
    
                    $(window).on( 'resize', createSlick );
                });
            });
        });
    });
});


// ----------------------------------------------서브페이지 관련 클릭상품 섹션 API 호출 및 Slick 적용 

$(document).ready(function() {

    $(function () {
        var bookTitles = [
            "로지컬 라이팅",
            "당신이 아픈 건 발 때문이다",
            "삼가 이와 같이 아뢰옵니다",
            "월간 채소",
            "집착의 법칙",
            "하루 한 동작 이은형의 복부 크러시",
            "명탐정의 제물",
            "초간단 집밥 다이어트 레시피",
            "보도 섀퍼의 이기는 습관",
            "바바라 민토, 논리의 기술",
            "독소 다이어트",
            "소녀 동지여 적을 쏴라",
            "매일매일 샌드위치",
            "디지니 리더십 수업"
        ];
    
        var $swiperWrapper = $('.last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper');
    
        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: $.param({ query: title, size: 1 }), 
                headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
            })
            .done(function (msg) {
                if (msg.documents.length > 0) {
                    var book = msg.documents[0]; 
    
                    var $swiperItem = $("<div class='swiper_item'></div>");
                    var $cover = $("<div class='cover'></div>");
    
                    $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
    
                    $swiperItem.append($cover);
    
                    var $text = $("<div class='text'></div>");
                    var $title = $("<div class='title'></div>");
                    $title.append("<a href='#'>" + book.title + "</a>");
                    $text.append($title);
                    $swiperItem.append($text);
                    $swiperWrapper.append($swiperItem);
                }
    
                $(function createSlick() {
                    $(".last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper").not('.slick-initialized').slick({
                        lazyLoad:'ondemand',
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        dots: true,
                        infinite: true,
                        dotsClass: 'dots_custom',
                    });
                    $(".last_wrap-click #last_bookwrap .white_circle_prev").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper").slick("slickPrev");
                    });
                
                    $(".last_wrap-click #last_bookwrap .white_circle_next").on('click',function(e) {
                        // e.preventDefault();
                        $(".last_wrap-click #last_bookwrap .swiper_section .swiper_wrapper").slick("slickNext");
                    });
    
                    $(window).on( 'resize', createSlick );
                });
            });
        });
    });
});

//----------------오늘 본 상품----------------------------

$(document).ready(function() {

    $(function() {
        var bookTitles = [
            "멘탈의 연금술",
            "슈유연함의 힘",
            "세로지컬 씽킹",
            "1일 1분 시력 운동 미로찾기",
            "도시와 그 불확실한 벽",
            "흔한 채소가 흔하지 않은 술안주",
            "역행자",
            "대화력의 비밀",
            "아주 작은 습관의 힘",
        ];

        var $recentList = $('#recentList');

        bookTitles.forEach(function (title) {
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: $.param({ query: title, size: 1 }), 
                headers: { Authorization: "KakaoAK 6d7be6265b1495468abf689fe747c801" }
            })
            .done(function (msg) {
                if (msg.documents.length > 0) {
                    var book = msg.documents[0]; 
                    
                    var $closeBtn = $("<div class='fix_del hidden'><a href='javascript:void(0);' class='RecentDelete'><img src='./img/btn_del.png' alt='' border='0' /></a></div>");
                    var $Wrapper = $("<li></li>");
                    var $Item = $("<div class='recentList_item'></div>");

                    $Item.append("<a href='javascript:void(0);'><img border='0' class='fiximg1' src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                    
                    $Wrapper.append($closeBtn);
                    $Wrapper.append($Item);
                    $recentList.append($Wrapper);
                }
            });
        });
    });
});