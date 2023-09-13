

var tl = anime.timeline({
    easing: 'easeInOutSine',
    duration: 600,
    autoplay: false,
});
const animObjects = {};

// get all elements with data-aos attribute and add them to animObjects under delay as key and duration as key and elements as value
document.querySelectorAll("[data-aos]").forEach(element => {
    const delay = Number(element.getAttribute('data-aos-delay'));
    const duration = Number(element.getAttribute('data-aos-duration'));
    if (!animObjects[delay]) {
        animObjects[delay] = {};
    }
    if (!animObjects[delay][duration]) {
        animObjects[delay][duration] = [];
    }
    animObjects[delay][duration].push(element);
});

for (const [delay, delayElements] of Object.entries(animObjects)) {
    console.log("delay", delay);
    console.log("delayElements", delayElements);
    for (const [duration, durationElements] of Object.entries(delayElements)) {
        console.log("duration", duration);
        console.log("durationElements", durationElements);
        // group elements via data-aos attribute
        const groups = durationElements.reduce((r, a) => {
            r[a.getAttribute('data-aos')] = [...r[a.getAttribute('data-aos')] || [], a];
            return r;
        }, {});
        console.log("groups", groups);
        // add all elements with same delay and duration to timeline 

        // add all elements with same delay and duration to timeline 
        /*   tl.add({
              targets: durationElements.filter((el) => el.getAttribute('data-aos') != 'svg-draw-fade'),
              opacity: [0, 1],
              duration: duration != NaN ? duration : 600,
              delay: function (el, i) { return delay != NaN ? delay : 0; },
              easing: 'easeInOutSine'
          }) */
        console.log("durationElements", durationElements.filter((el) => el.getAttribute('data-aos') == 'svg-draw-fade').map((el) => el.querySelectorAll('svg path')).flat());
        /*   durationElements.filter((el) => el.getAttribute('data-aos') == 'svg-draw-fade').map((el) => el.querySelectorAll('svg path')).flat().forEach(function (path, index) {
              console.log("path", path);
              path.style.fillOpacity = 0;
              path.style.strokeDasharray = path.getTotalLength();
              path.style.strokeDashoffset = path.getTotalLength();
              tl.add({
                  targets: path,
                  strokeDashoffset: [anime.setDashoffset, 0],
                  fillOpacity: [0, 1],
                  easing: 'easeInOutSine',
                  duration: duration != NaN ? duration : 600,
                  delay: function (el, i) { return delay != NaN ? delay + (index * 100) : 0; },
              });
  
          }); */


    }
}

console.log("animObjects", animObjects);

// start the timeline
/* setTimeout(() => {
    tl.play();
}, 300);
 */

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

