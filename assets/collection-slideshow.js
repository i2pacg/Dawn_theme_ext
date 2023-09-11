
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
        nextArrow: `<svg
        id="slider-arrow-right"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>`,
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

