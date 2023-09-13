

var tl = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false,
    delay: 0
});
const animObjects = {
    'fade': {},
    'fade-scaleX': {},
    'fade-slideUp': {},
    'slideUp': {},
    'svg-draw-fade': {},
};

// get all elements with data-aos attribute split by comma and add them to animObjects under delay , duration ,anim name as key and elements as value exept svg-draw-fade
document.querySelectorAll("[data-aos]").forEach(element => {
    const parent = element;
    const delay = Number(parent.getAttribute('data-aos-delay')) != NaN ? Number(parent.getAttribute('data-aos-delay')) : 0;
    const duration = Number(parent.getAttribute('data-aos-duration')) != NaN ? Number(parent.getAttribute('data-aos-duration')) : 0;

    const anim = parent.getAttribute('data-aos');
    try {
        if (!animObjects[anim][delay]) {
            animObjects[anim][delay] = {};
        }
        if (!animObjects[anim][delay][duration]) {
            animObjects[anim][delay][duration] = [];
        }
        animObjects[anim][delay][duration].push(parent);
    } catch (error) {
        console.log("error", anim, delay, duration);
    }
});
console.log("animObjects", animObjects);
//loop through animObjects and push elements to the right array
for (const anim in animObjects) {
    //sort by delay
    const sortable = [];
    for (const delay in animObjects[anim]) {
        sortable.push([delay, animObjects[anim][delay]]);
    }
    sortable.sort(function (a, b) {
        return b[0] - a[0];
    });
    animObjects[anim] = Object.fromEntries(sortable);
    console.log("animObjects", animObjects[anim]);
    for (const delay in animObjects[anim]) {
        for (const duration in animObjects[anim][delay]) {
            const elements = animObjects[anim][delay][duration];
            switch (anim) {
                case 'fade':
                    tl.add({
                        targets: elements,
                        opacity: [0, 1],
                        duration: duration,
                        easing: 'easeInOutSine'
                    }, delay);
                    break;
                case 'fade-scaleX':
                    tl.add({
                        targets: elements,
                        opacity: [0, 1],
                        scaleX: [0.0, 1],
                        duration: duration,
                        easing: 'easeInOutSine'
                    }, delay);
                    break;
                case 'fade-slideUp':
                    tl.add({
                        targets: elements,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: duration,
                        easing: 'easeInOutSine'
                    }, delay);
                    break;
                case 'slideUp':
                    tl.add({
                        targets: elements,
                        translateY: [20, 0],
                        duration: duration,
                        easing: 'easeInOutSine'
                    }, delay);
                    break;

                case 'svg-draw-fade':
                    try {
                        elements.forEach(function (element, index) {
                            console.log("element delay", delay, element.querySelectorAll('svg path'));
                            tl.add({
                                targets: element.querySelectorAll('svg path'),
                                fillOpacity: [0, 1],
                                strokeDashoffset: [anime.setDashoffset, 0],
                                easing: 'easeInOutSine',
                                delay: function (el, i) { return i * 100 },
                                duration: duration,
                            }, delay);
                        });
                    } catch (error) {
                        console.log("error", error);
                    }
                    break;

                default:
                    break;
            }
        }

    }
}

console.log("animObjects", animObjects);
//loop through animObjects and add the right animation to the timeline

//play the timeline


//init slick slider

let initVideoSlickPromise = new Promise(resolve => {
    $('.slider-for').on('init', function (event, slick, currentSlide, nextSlide) {
        resolve("for I am done");
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        fade: true,
        arrows: false,
    });
})
let initNavSlickPromise = new Promise(resolve => {
    $('.slider-nav').on('init', function (event, slick, currentSlide, nextSlide) {
        resolve(this);
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
})
let initInfoSlickPromise = new Promise(resolve => {
    $('.slider-info').on('init', function (event, slick, currentSlide, nextSlide) {
        resolve(this);
    });
    $('.slider-info').slick({
        arrows: false,
        fade: true,
        arrows: false,
        asNavFor: '.slider-nav',
    });
})
init();
async function init() {
    console.log("init");
    const s = await initVideoSlickPromise;
    const navSlide = await initNavSlickPromise;
    const infoSlide = await initInfoSlickPromise;
    console.log("navSlide ", navSlide);
    tl.add({
        targets: navSlide.querySelector("[data-slick-index='0']"),
        opacity: [0, 1],
        translateY: [100, 0],
        duration: 400,
        easing: 'easeInOutSine'
    }, 2200);
    tl.add({
        targets: navSlide.querySelectorAll(".slick-slide:not([data-slick-index='0'])"),
        opacity: [0, 1],
        translateY: [100, 0],
        easing: 'easeInOutSine',
        delay: function (el, i) { return i * 100 },
        duration: 400,
    }, 2200);

    if (infoSlide.querySelector("[data-slick-index='0'] .product-title svg")) {
        /*   elements.forEach(function (element, index) {
              console.log("element delay", delay, element.querySelectorAll('svg path'));
              tl.add({
                  targets: element.querySelectorAll('svg path'),
                  fillOpacity: [0, 1],
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: 'easeInOutSine',
                  delay: function (el, i) { return i * 100 },
                  duration: duration,
              }, delay);
          }); */
        tl.add({
            targets: infoSlide.querySelectorAll("[data-slick-index='0'] .product-title svg path"),
            fillOpacity: [0, 1],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            delay: function (el, i) { return i * 100 },
            duration: 400,
        }, 2200);
    } else
        tl.add({
            targets: infoSlide.querySelectorAll("[data-slick-index='0'] .product-title"),
            opacity: [0, 1],
            easing: 'easeInOutSine',
            delay: function (el, i) { return i * 100 },
            duration: 400,
        }, 2200);


    setTimeout(() => {
        tl.play();
    }, 300);
}
/* 
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

        tl.add({
            targets: this.querySelector("[data-slick-index='0']"),
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 400,
            easing: 'easeInOutSine'
        }, 2200);
        tl.add({
            targets: this.querySelectorAll(".slick-slide:not([data-slick-index='0'])"),
            opacity: [0, 1],
            translateY: [100, 0],
            easing: 'easeInOutSine',
            delay: function (el, i) { return i * 100 },
            duration: 400,
        }, 2200);

        setTimeout(() => {
            tl.play();
        }, 300);

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
} */

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


