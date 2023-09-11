
document.addEventListener('DOMContentLoaded', function () {
    let collectionSvg = document.querySelector("[data-aos='svg-draw-fade']");
    const delay = Number(collectionSvg.getAttribute('data-aos-delay'));
    console.log("delay: ", delay);
    collectionSvg.removeAttribute('data-aos-delay');
    collectionSvg.removeAttribute('data-aos');
    collectionSvg.querySelector("svg").querySelectorAll('path').forEach(function (path, index) {
        console.log(path);
        path.style.fillOpacity = 0;
        path.style.strokeDasharray = path.getTotalLength();
        path.style.strokeDashoffset = path.getTotalLength();
        path.style.transition = `fillOpacity 1s ease ${delay + index * 100}ms,
        strokeDashoffset 1s ease ${1000 + delay + index * 100}ms,`;
        /* 
        path.setAttribute('stroke-dasharray', path.getTotalLength()); */
    });

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
