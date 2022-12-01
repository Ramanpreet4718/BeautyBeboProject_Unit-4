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

  

var hotDealsData = [
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        name: "aroma magic activated bamboo charcoal face wash",
        price:210 ,
        off: 0,
        strikedoffprice: 0,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_210_4.jpg",
        name: "clinic plus strong & long health shampoo",
        price: 473,
        off: 10,
        strikedoffprice: 525,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/a/aaa_3.jpg",
        name: "gillette venus breeze razor with avocado oil",
        price: 286,
        off: 12,
        strikedoffprice: 325,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_209_6.jpg",
        name: "gillette venus razor with aloe extract for women",
        price: 200,
        off: 20,
        strikedoffprice: 249,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-2.png",
        name: "head & shoulders 2 in 1 active protect anti dandruff shampoo + conditioner",
        price: 263,
        off: 25,
        strikedoffprice: 350,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001368-2.jpg",
        name: "head & shoulders anti-dandruff anti hair fall shampoo - 340ml",
        price: 200,
        off: 30,
        strikedoffprice: 285,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/n/anti_hair_fall_shampoo-2.png",
        name: "head & shoulders anti-dandruff hair fall shampoo",
        price: 200,
        off: 30,
        strikedoffprice: 285,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001370-2.jpg",
        name: "head & shoulders cool menthol 2-in-1 anti-dandruff shampoo + conditioner",
        price: 280,
        off: 20,
        strikedoffprice: 350,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001555-3.jpg",
        name: "head & shoulders smooth & silky anti dandruff shampoo",
        price: 413,
        off: 25,
        strikedoffprice: 550,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/g/ggggghh.jpg",
        name: "himalaya herbals anti-wrinkle cream",
        price: 200,
        off: 20,
        strikedoffprice: 250,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001776-1.jpg",
        name: "himalaya herbals himalaya men pimple clear neem face wash",
        price: 128,
        off: 20,
        strikedoffprice: 160,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/_/1/.111.jpg",
        name: "himalaya herbals purifying neem foaming face wash - pack of 2",
        price: 423,
        off: 10,
        strikedoffprice: 470,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_4.jpg",
        name: "joy even tone bright radiance skin brightening body lotion - get free nivea deodorant roll on - pearl & beauty",
        price: 295,
        off: 40,
        strikedoffprice: 494,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_5_1.jpg",
        name: "kamasutra spark deodorant spray for men (buy 1 get 1 free) - 260ml each",
        price: 299,
        off: 0,
        strikedoffprice: 0,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8901526102662_2bbb.jpg",
        name: "l'oreal paris total repair 5 shampoo (640ml+64ml)",
        price: 338,
        off: 25,
        strikedoffprice: 450,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/o/loreal_paris_extraordinary_clay_purifying_hydrating_shampoo_10_extra_2.jpg",
        name: "loreal paris extraordinary clay purifying & hydrating shampoo (10% extra)",
        price: 225,
        off: 50,
        strikedoffprice: 450,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/w/a/washable_very_black-1.jpg",
        name: "maybelline new york hyper curl mascara",
        price: 285,
        off: 15,
        strikedoffprice: 335,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/8/4891080614470_2__1.jpg",
        name: "neutrogena hydro boost water gel",
        price: 760,
        off: 20,
        strikedoffprice: 950,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/l/o/lotion_nourishing_body_milk4001.jpg",
        name: "nivea body lotion nourishing body milk - for very dry skin",
        price: 383,
        off: 10,
        strikedoffprice: 425,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/imgpsh_fullsize_anim_4__1.jpg",
        name: "olay age protect anti-ageing cream",
        price: 159,
        off: 20,
        strikedoffprice: 199,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/a/pantene_advanced_hair_fall_solution_hair_fall_control_shampoo-1.jpg",
        name: "pantene advanced hair fall solution hair fall control shampoo",
        price: 228,
        off: 5,
        strikedoffprice: 240,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/n/hnejhfeuh.jpg",
        name: "Pantene Advanced Hair Fall Solution Hair Fall Control Shampoo 650ml",
        price: 400,
        off: 20,
        strikedoffprice: 500,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-94.jpg",
        name: "Ponds Super Light Gel Oil Free Moisturiser With Hyaluronic Acid + Vitamin E - pack of 2",
        price: 419,
        off: 30,
        strikedoffprice: 598,
    },
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-113.jpg",
        name: "Sunsilk Lusciously Thick & Long Shampoo - pack of 2",
        price: 238,
        off: 40,
        strikedoffprice: 396,
    },
]


