

var tl = anime.timeline({
    easing: 'easeInOutSine',
    duration: 600,
    autoplay: false,
});
const animObjects = {};

// get all elements with data-aos attribute split by comma and add them to animObjects under delay , duration ,anim name as key and elements as value exept svg-draw-fade
document.querySelectorAll("[data-aos]").forEach(element => {
    if (element.getAttribute('data-aos') == 'svg-draw-fade') {
        // add paths to animObjects with delay and duration from parent and add animation to path
        const parent = element;
        const delay = Number(parent.getAttribute('data-aos-delay'));
        const duration = Number(parent.getAttribute('data-aos-duration'));
        parent.removeAttribute('data-aos-delay');
        parent.removeAttribute('data-aos-duration');
        parent.querySelectorAll('svg path').forEach(function (path, index) {
            path.style.fillOpacity = 0;
            path.style.strokeDasharray = path.getTotalLength();
            path.style.strokeDashoffset = path.getTotalLength();
            path.style.animation = `svgDrawFade 1s ease-in-out ${delay + (index * 100)}ms forwards`;
            // add to animObjects
            if (animObjects['svg-draw-fade'] == undefined) {
                animObjects['svg-draw-fade'] = {
                    delay: [],
                    duration: [],
                    anim: [],
                    elements: [],
                }
            }
            animObjects['svg-draw-fade'].delay.push(delay + (index * 100));
            animObjects['svg-draw-fade'].duration.push(duration);
            animObjects['svg-draw-fade'].anim.push('svg-draw-fade');
            animObjects['svg-draw-fade'].elements.push(path);
        });

    } else
        element.getAttribute('data-aos').split(',').forEach(function (anim, index) {
            if (animObjects[anim] == undefined) {
                animObjects[anim] = {
                    delay: [],
                    duration: [],
                    anim: [],
                    elements: [],
                }
            }
            animObjects[anim].delay.push(Number(element.getAttribute('data-aos-delay') != null ? element.getAttribute('data-aos-delay') : 0));
            animObjects[anim].duration.push(Number(element.getAttribute('data-aos-duration') != null ? element.getAttribute('data-aos-duration') : 600));
            animObjects[anim].anim.push(anim);
            animObjects[anim].elements.push(element);
        });
});
// loop animObjects and add animations to timeline 
Object.keys(animObjects).forEach(function (key, index) {
    if (key != 'svg-draw-fade') {
        console.log("key", key);
        console.log("animObjects", animObjects[key]);
        animObjects[key].elements.forEach(function (element, index) {
            console.log("element", element);
            console.log("index", index);
            switch (key) {
                case 'fade':
                    tl.add({
                        targets: element,
                        opacity: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;
                case 'zoom':
                    tl.add({
                        targets: element,
                        scale: [0, 1],
                        opacity: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;
                case 'scaleX':
                    tl.add({
                        targets: element,
                        transformX: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;
                case 'slide-up':
                    tl.add({
                        targets: element,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;

                case 'slide-down':
                    tl.add({
                        targets: element,
                        translateY: [-50, 0],
                        opacity: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;

                case 'slide-left':
                    tl.add({
                        targets: element,
                        translateX: [50, 0],
                        opacity: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;

                case 'slide-right':
                    tl.add({
                        targets: element,
                        translateX: [-50, 0],
                        opacity: [0, 1],
                        duration: animObjects[key].duration[index],
                        delay: function (el, i) { return animObjects[key].delay[index]; },
                        easing: 'easeInOutSine'
                    })
                    break;
                default:
                    break;
            }

        });
    }
});

// add all the animObjects to timeline
/* Object.keys(animObjects).forEach(function (key, index) {
    console.log("animObjects", animObjects);
    animObjects[key].elements.forEach(function (element, index) {
        tl.add({
            targets: element,
            opacity: [0, 1],
            duration: animObjects[key].duration[index],
            delay: function (el, i) { return animObjects[key].delay[index]; },
            easing: 'easeInOutSine'
        })
    });
}); */
/* 
 */
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

