
document.addEventListener('DOMContentLoaded', function () {
    initSlick();
    AOS.init();
    function initSlick() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-nav',
            fade: true,
        });
        $('.slider-nav').slick({
            centerPadding: '32px',
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            centerMode: true,
            asNavFor: '.slider-for , .slider-info',
        });
        $('.slider-info').slick({
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
        });
    }
    if (Shopify.designMode) {
        document.addEventListener('shopify:section:load', init);
        document.addEventListener('shopify:section:reorder', init); //
    }

    function init() {
        AOS.refresh();
        setTimeout(initSlick, 1000);
    }
}, false);
