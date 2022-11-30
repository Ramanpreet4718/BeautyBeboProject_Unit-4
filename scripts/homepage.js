document.querySelector(".fa-user").addEventListener("click", dropdown);

function dropdown(){
    var menu = document.querySelector(".loginRegisterDropdown");
    if(menu.style.display=="none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

$(document).ready(function(){
    $('.homepage-section1-right').slick({
        arrows:false,
        dots:true,
        appendDots:".homepage-section1-right-slider-dots",
        dotsClass:"dots",
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
  });

  

