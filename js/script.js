
/*
burger-menu
*/
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");
    let cart = menu.find("mobile-cart");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu())
    overlay.on("click", () => toogleMenu());
    cart.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');



/*
header-fixed
*/
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header-block");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
};

$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        loop:true,
        dots:false,
        margin: 0,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1
            }

        }
    });
});
$(document).ready(function(){
    $(".img-slider").owlCarousel({
        items: 2,
        loop:true,
        margin: 30,
        dots:false,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            991: {
                items:2
            }

        }
    });
});

jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline'
    });
});
jQuery('.collections .collection:gt(2)').wrapAll('<div class="container"><div class="row collection-mr"></div></div>');

let numzi = jQuery(".collections").find(".collection").length;
if (numzi < 4) {
    jQuery('.collection-more a').hide();
    jQuery('.collection-more').addClass('mb-5');
}

jQuery('.collection-more .button-invert').on('click', function(e){
    e.preventDefault();

    let
        thiss = jQuery(this),
        content = jQuery(this).closest('.collections').find('.collection-mr');

    if(!thiss.hasClass('trigger')){
        thiss.addClass('trigger');
        thiss.html('Показать еще');
        thiss.attr("href", "#more");
        content.css('opacity','0');
        content.css('height','1px');
        content.removeClass('collection-mr-margin');
        content.slideUp();
    } else {
        thiss.removeClass('trigger');
        thiss.html('Скрыть');
        thiss.attr("href", "#nomore");
        content.css('opacity','1');
        content.css('height','auto');
        content.addClass('collection-mr-margin');
        content.slideDown();
    }
});
