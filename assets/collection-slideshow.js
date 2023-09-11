
/* 

 */

let collectionSvg = document.querySelector("[data-aos='svg-draw-fade']");
const delay = Number(collectionSvg.getAttribute('data-aos-delay'));
document.querySelector("[data-aos='svg-draw-fade']").removeAttribute('data-aos-delay');
document.querySelector("[data-aos='svg-draw-fade'] svg").querySelectorAll('path').forEach(function (path, index) {
    console.log(index);
    /* path.setAttribute('data-aos', 'svg-draw-fade'); */
    path.style.fillOpacity = 0;
    path.style.strokeDasharray = path.getTotalLength();
    path.style.strokeDashoffset = path.getTotalLength();
    path.style.animation = `svgDrawFade 1s ease-in-out ${delay + (index * 100)}ms forwards`;
    /* 
    path.style.transition = `fillOpacity 0.5s ease-in-out ${1000 + delay + (index * 100)}ms,
     strokeDashoffset 0.5s ease-in-out ${delay + (index * 100)}ms` */
});
document.querySelector("[data-aos='svg-draw-fade']").removeAttribute('data-aos');

initSlick();
AOS.init();



for (let x = 3000; x < 5000; x + 50) {
    console.log(`[data-aos][data-aos][data-aos-delay="${x}"].aos-animate,
    body[data-aos-delay="${x}"] [data-aos].aos-animate {
        transition-delay: ${x / 1000}s
    }`);
    /* [data-aos][data-aos][data-aos-delay="3100"].aos-animate,
    body[data-aos-delay="3100"] [data-aos].aos-animate {
        transition-delay: 3s
    } */
}

function initSlick() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        fade: true,
        arrows: false,
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
        arrows: false,
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

