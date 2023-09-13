

var tl = anime.timeline({
    easing: 'easeInOutSine',
    duration: 600,
    autoplay: false,
});
const animObjects = {};
document.querySelectorAll("[data-aos]").forEach(animElement => {
    let delay = Number(animElement.getAttribute('data-aos-delay'));
    let animName = animElement.getAttribute('data-aos')
    let animObject = animObjects[animName];
    if (!Array.isArray(animObject[delay != NaN ? delay : 0]))
        animObject[delay != NaN ? delay : 0] = [];
    animObject[delay != NaN ? delay : 0].push(animElement);

});
for (const delay in animObjects) {
    if (Object.hasOwnProperty.call(animObjects, delay)) {
        const anims = animObjects[delay];
        console.log("anims", anims);

    }
}
/*  const anims = animElement.getAttribute('data-aos').split(',');
console.log("anim", anims); if (anims.includes('svg-draw-fade')) {
     console.log("svg", animElement);
     tl.add({
         targets: animElement.querySelectorAll('svg path'),
         easing: 'easeInOutSine',
         fillOpacity: [0, 1],
         strokeDashoffset: [anime.setDashoffset, 0],
         delay: 0,
         direction: 'alternate',
         loop: false,
         duration: 1000,
     })

 } else {
     const animObject = {
         targets: animElement,
         easing: 'easeInOutSine',
         delay: 0,
     };
     anims.forEach(anim => {
         if (anim == 'fade') {
             animObject.opacity = [0, 1];
         }
         if (anim == 'scaleX') {
             animObject.scaleX = [0, 1];
         }
         if (anim == 'svg-draw-fade') {

         }
     });
     tl.add(animObject);
 } */
/* 
document.querySelectorAll("[data-aos='fade']").forEach(element => {
    console.log("fade", element);
    let delay = Number(element.getAttribute('data-aos-delay'));
    let duration = Number(element.getAttribute('data-aos-duration'));
    console.log("fade delay", delay);
    console.log("fade duration", duration);
    tl.add({
        targets: element,
        opacity: [0, 1],
        easing: 'easeInOutSine'
    })
    element.removeAttribute('data-aos');
    element.removeAttribute('data-aos-delay');
    element.removeAttribute('data-aos-duration');
}); */
initSlick();
function initSlick() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        fade: true,
        arrows: false,
    });

    $('.slider-nav').on('init', function (event, slick, currentSlide, nextSlide) {
        console.log("Slide Nav Init", this);
        setTimeout(() => {
            tl.play();
        }, 300);
        /*  tl.add({
           targets: this.querySelector("[data-slick-index='0']"),
           opacity: [0, 1],
           easing: 'easeInOutSine'
       });
       this.querySelectorAll(".slick-slide:not([data-slick-index='0'])").forEach(function (slide, index) {
           console.log("fade slide", slide);
           tl.add({
               targets: slide,
               opacity: [0, 1],
               duration: 600,
               easing: 'easeInOutSine'
           })
       });
       setTimeout(() => {
           tl.play();
       }, 600); */
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


/* 

 */

/* let collectionSvg = document.querySelector("[data-aos='svg-draw-fade']");
const delay = Number(collectionSvg.getAttribute('data-aos-delay'));
document.querySelector("[data-aos='svg-draw-fade']").removeAttribute('data-aos-delay');
document.querySelector("[data-aos='svg-draw-fade'] svg").querySelectorAll('path').forEach(function (path, index) {
    console.log(index);
    path.style.fillOpacity = 0;
    path.style.strokeDasharray = path.getTotalLength();
    path.style.strokeDashoffset = path.getTotalLength();
    path.style.animation = `svgDrawFade 1s ease-in-out ${delay + (index * 100)}ms forwards`;
  
});
document.querySelector("[data-aos='svg-draw-fade']").removeAttribute('data-aos');
 */
/* 
var tl = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false,
});
// Add children
document.querySelectorAll("[data-aos='fade']").forEach(element => {
    console.log("fade", element);
    let delay = Number(element.getAttribute('data-aos-delay'));
    let duration = Number(element.getAttribute('data-aos-duration'));
    console.log("fade delay", delay);
    console.log("fade duration", duration);
    tl.add({
        targets: element,
        opacity: [0, 1],
        duration: duration != NaN ? duration : 600,
        delay: function (el, i) { return delay != NaN ? delay : 0; },
        easing: 'easeInOutSine'
    })
});; */
/* data-aos="fade" data-aos-duration="400" */
/*
 */
/* setTimeout(() => {
    tl.play();
}, 5000); */
/* 
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false,
}); */


/* 
let delays = '';
for (let x = 3000; x < 5000; x += 50) {
    delays += `
[data-aos][data-aos][data-aos-duration="${x}"],
body[data-aos-duration="${x}"] [data-aos] {
    transition-duration: ${x / 1000}s
}

[data-aos][data-aos][data-aos-delay="${x}"],
body[data-aos-delay="${x}"] [data-aos] {
    transition-delay: 0
}

[data-aos][data-aos][data-aos-delay="${x}"].aos-animate,
body[data-aos-delay="${x}"] [data-aos].aos-animate {
    transition-delay: ${x / 1000}s
}
`;
}
console.log(delays); */

/* [data-aos][data-aos][data-aos-delay="3100"].aos-animate,
body[data-aos-delay="3100"] [data-aos].aos-animate {
    transition-delay: 3s
} */
/* 
if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', init);
    document.addEventListener('shopify:section:reorder', init); //
} */

function init() {
    /*   AOS.refresh(); */
    setTimeout(initSlick, 1000);
}

