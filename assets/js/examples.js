// fullpabe option
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: true,
    sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE"],
  });
});

// section_01
var swiper = new Swiper(".listSwiper", {
  slidesPerView: 3,
  spaceBetween: 0, // 슬라이드 여백
  centeredSlides: true, // 슬라이드 중앙정렬
  // initialSlide: 1, //초기 슬라이드 색인 번호
  loop: true, // 무한반복
  autoplay: {
    delay: 2000,
    // disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
