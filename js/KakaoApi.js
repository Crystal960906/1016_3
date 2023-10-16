// ----------------------------------------------추천 마법사의 선택 API 호출 및 Slick 적용 
$(function () {
    // 배열로 제목 데이터 담기
    var bookTitles = [
        "소녀 동지여 적을 쏴라",
        "비스킷",
        "오늘도 나아가는 중입니다",
        "가재가 노래하는 곳",
        "라스트 젤리 샷",
        "명탐정으로 있어줘",
        "가짜 노동"
    ];

    var $swiperWrapper = $('#jinnyWelcome_Back .swiper_wrapper');

    // 반복문을 사용한 AJAX 데이터 값 요청
    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), // 결과 한 개만 보이도록 제한
            headers: { Authorization: "KakaoAK bc023c60ad342c86d80ae40fc3f2c428" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; 

                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                // 썸네일, 호버 레이어
                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");
                var $jinnybtnlayer = $("<div class='jinnybtnlayer'></div>");
                $jinnybtnlayer.append("<a href='#'>장바구니에 담기</a>");
                $jinnybtnlayer.append("<a href='#'>구매했어요</a>");
                $jinnybtnlayer.append("<a href='#'>관심없어요</a>");
                $cover.append($jinnybtnlayer);

                $swiperItem.append($cover);

                // 제목
                var $text = $("<div class='text'></div>");
                var $title = $("<div class='title'></div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $swiperItem.append($text);

                $swiperWrapper.append($swiperItem);
            }

            $(function () {
                $("#jinnyWelcome_Back .swiper_wrapper").not('.slick-initialized').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#jinnyWelcome .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#jinnyWelcome_Back .swiper_wrapper").slick("slickPrev");
                });
            
                $("#jinnyWelcome .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#jinnyWelcome_Back .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});
// ----------------------------------------------이달의 주목도서 API 호출 및 Slick 적용 

$(function () {
    var bookTitles = [
        "바깥 일기",
        "달의 아이",
        "편집 만세",
        "그리고 미희답게 잘 살았습니다",
        "눈부시게 불완전한",
        "경험은 어떻게 유전자에 새겨지는가",
        "오싹한 내 친구",
        "완벽이 온다",
        "물리적 힘",
        "이말리 수사대"
    ];

    var $swiperWrapper = $('#w_monthBook .swiper_wrapper');

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book",
            data: $.param({ query: title, size: 5 }), 
            headers: { Authorization: "KakaoAK bc023c60ad342c86d80ae40fc3f2c428" }
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

            $(function () {
                $("#w_monthBook .swiper_wrapper").not('.slick-initialized').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#w_monthBook_type .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_monthBook .swiper_wrapper").slick("slickPrev");
                });
            
                $("#w_monthBook_type .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_monthBook .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});

// ----------------------------------------------알라딘 스페셜 API 호출 및 Slick 적용 

$(function () {
    var bookTitles = [
        "별과 새와 소년에 대해",
        "책과 우연들",
        "사유 식탁",
        "꽃은 누구에게나 핀다",
        "여행 아닌 여행기",
        "우울한 엄마들의 살롱",
        "들꽃 식혜",
    ];

    var $swiperWrapper = $('#w_aladinSpecial_type .swiper_wrapper');

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 5 }), 
            headers: { Authorization: "KakaoAK bc023c60ad342c86d80ae40fc3f2c428" }
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

            $(function () {
                $("#w_aladinSpecial_type .swiper_wrapper").not('.slick-initialized').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#w_aladinSpecial_type .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_aladinSpecial_type .swiper_wrapper").slick("slickPrev");
                });
            
                $("#w_aladinSpecial_type .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_aladinSpecial_type .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});

// ----------------------------------------------이주의 특가 API 호출 및 Slick 적용 

$(function () {
    var bookTitles = [
        "몸값 높이기의 기술",
        "반 고흐가 그린 사람들",
        "고양이는 왜 이러는 걸까?",
        "영어회화? 쉬운 패턴의 힘!",
        "왜 나만 착하게 살아야 해",
        "10단계로 쉽게 동물 그리기",
        "저희는 아이를 이렇게 키웁니다",
        "나 같은 기계들",
        "피너츠 포스터 북",
        "가재가 노래하는 곳"
    ];

    var $swiperWrapper = $('#w_specialPrice .swiper_wrapper');

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), 
            headers: { Authorization: "KakaoAK bc023c60ad342c86d80ae40fc3f2c428" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; 

                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");

                $swiperItem.append($cover);

                var $text = $("<div class='text type2'></div>");
                var $title = $("<div class='title'></div>");
                var formattedPrice = parseInt(book.sale_price).toLocaleString();
                var $price = $("<div class='price'>" + formattedPrice + "원</div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $text.append($price);
                $swiperItem.append($text);
                $swiperWrapper.append($swiperItem);
            }

            $(function () {
                $("#w_specialPrice .swiper_wrapper").not('.slick-initialized').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#w_specialPrice_type .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_specialPrice .swiper_wrapper").slick("slickPrev");
                });
            
                $("#w_specialPrice_type .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_specialPrice .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});

// ----------------------------------------------알라디너의 선택 API 호출 및 Slick 적용 

$(function () {
    var bookTitles = [
        "도시와 그 불확실한 벽",
        "이토록 재미있는 마술사 도슨트",
        "밝은 밤",
        "물고기는 존재하지 않는다",
        "고쳐쓰기, 좋은 글에서 더 나은 글로",
        "밤이면 건방진 책을 읽고",
        "천 개의 파랑",
        "좋은 곳에서 만나요"
    ];

    var $swiperWrapper = $('#w_aladinerChoice .swiper_wrapper');

    bookTitles.forEach(function (title) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query: title, size: 1 }), 
            headers: { Authorization: "KakaoAK bc023c60ad342c86d80ae40fc3f2c428" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                var book = msg.documents[0]; 

                var $swiperItem = $("<div class='swiper_item'></div>");
                var $cover = $("<div class='cover'></div>");

                $cover.append("<a href='#'><img src='" + book.thumbnail + "' alt='" + book.title + "' /></a>");

                $swiperItem.append($cover);

                var $text = $("<div class='text type1'></div>");
                var $title = $("<div class='title'></div>");
                var $contents = $("<div class='sub'>"+ book.contents +"</div>");
                $title.append("<a href='#'>" + book.title + "</a>");
                $text.append($title);
                $text.append($contents);
                $swiperItem.append($text);
                $swiperWrapper.append($swiperItem);
            }

            $(function () {
                $("#w_aladinerChoice .swiper_wrapper").not('.slick-initialized').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                });
                $("#w_aladinerChoice_type .white_circle_prev").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_aladinerChoice .swiper_wrapper").slick("slickPrev");
                });
            
                $("#w_aladinerChoice_type .white_circle_next").on('click',function(e) {
                    // e.preventDefault();
                    $("#w_aladinerChoice .swiper_wrapper").slick("slickNext");
                });
            });
        });
    });
});