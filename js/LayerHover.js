// ----------------추천마법사의 선택 레이어 호버

$(function () {
    $(document).on('mouseenter', '#jinnyWelcome_Back .cover', function() {
        $(this).find(".jinnybtnlayer").show();
    });

    $(document).on('mouseleave', '#jinnyWelcome_Back .cover', function() {
        $(this).find(".jinnybtnlayer").hide();
    });
});


//-----------------------------서브페이지 오늘 본 도서목록 리스트 //호버시 delete 버튼 활성화

$(function () {
    $(document).on('mouseenter', '#recentList li', function() {
        $(this).find(".fix_del").removeClass("hidden");
    });

    $(document).on('mouseleave', '#recentList li', function() {
        $(this).find(".fix_del").addClass("hidden");
    });

    $(document).on('click', '.fix_del', function() {
        $(this).closest("li").hide();
    });
});




