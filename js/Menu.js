//------------------------분야보기 메뉴 펼치기 이벤트
$(document).ready(function (){
    $(".l_menu li").hover(function(){
        $(this).children("div").show();
    }, function() {
        $(this).children("div").hide();
    });
});