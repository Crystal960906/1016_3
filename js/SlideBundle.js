
// ------------------------------------------------슬라이더 화살표

$(function (){
    $(".white_circle_next").on("click",function (){
        $(this).siblings(".white_circle_prev").show();
    });
});
//------------------------------------------------와이드배너 슬라이더

$(function (){

    var slideIndex = 1;
    var slides = $(".wide_banner-item");
    var curr = $(".swiper-pagination-current");
    
    function plusSlides(n) {
        console.log("plusSlides is working", slideIndex, slides);
        showSlides((slideIndex += n));
    }
    
    function showSlides(n) {
        let i;
        if (n > slides.length) {
            slideIndex = 1;
        }
            if (n < 1) {
                slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        console.log("FinalshowSlides is working", slideIndex);
    }

    $(".wide_banner .swiper-button-next").on("click",function (){
        plusSlides(1);
        curr.text(slideIndex);
    });
    $(".wide_banner .swiper-button-prev").on("click",function (){
        plusSlides(-1);
        curr.text(slideIndex);
    });
})
