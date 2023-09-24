

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

//loop through animObjects and add the right animation to the timeline

//play the timeline


//init slick slider
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};
let initVideoSlickPromise = new Promise(resolve => {
    $('.slider-for').on('init', function (event, slick, currentSlide, nextSlide) {
        resolve(this);
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
        centerPadding: '0px',

        autoplay: false,
        autoplaySpeed: 10000,
        infinite: false,
        variableWidth: true,
        centerMode: true,
        asNavFor: '.slider-for , .slider-info',
    });
    /*    $('.slider-nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
           $(".slick-slide").removeClass('slick-active');
           $('.slick-current').addClass('slick-active');
       }); */
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
    const navSlide = await initNavSlickPromise;
    const infoSlide = await initInfoSlickPromise;
    try {
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
            try {
                tl.add({
                    targets: shuffle(Array.from(infoSlide.querySelectorAll("[data-slick-index='0'] .product-title svg path"))),
                    fillOpacity: [0, 1],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    delay: function (el, i) { return i * 100 },
                    duration: 400,
                }, 2600);
            } catch (error) {
                console.log("error", error);
            }
        }
        else
            tl.add({
                targets: infoSlide.querySelector("[data-slick-index='0'] .product-title"),
                opacity: [0, 1],
                translateX: [-50, 0],
                easing: 'easeInOutSine',
                duration: 400,
            }, 2600);

        $(infoSlide).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            const nextSlideElement = slick.$slides[nextSlide];
            console.log("nextSlide", nextSlide)
            console.log("hide", nextSlide === infoSlide.querySelectorAll(".slick-slide").length - 1)
            anime({
                targets: document.querySelector('.slider-content .slider-content-title'),
                opacity: nextSlide === infoSlide.querySelectorAll(".slick-slide").length - 1 ? 0 : 1,
                easing: 'easeInOutSine',
                duration: 400,
            });
            try {
                if (nextSlideElement.querySelector(".product-title svg")) {
                    anime({
                        targets: shuffle(Array.from(nextSlideElement.querySelectorAll(".product-title svg path"))),
                        fillOpacity: [0, 1],
                        strokeDashoffset: [anime.setDashoffset, 0],
                        easing: 'easeInOutSine',
                        delay: function (el, i) { return i * 75 + 400 },
                        duration: 400,
                    });
                }
                else anime({
                    targets: nextSlideElement.querySelector(".product-title"),
                    opacity: [0, 1],
                    translateX: [-100, 0],
                    easing: 'easeInOutSine',
                    duration: 400,
                    delay: 400,
                })

                anime({
                    targets: nextSlideElement.querySelector(".slider-buttons"),
                    opacity: [0, 1],
                    translateX: [100, 0],
                    easing: 'easeInOutSine',
                    duration: 400,
                    delay: 300,
                })
                anime({
                    targets: nextSlideElement.querySelector(".product-description"),
                    opacity: [0, 1],
                    translateY: [100, 0],
                    easing: 'easeInOutSine',
                    duration: 400,
                    delay: 300,
                })
            } catch (error) {
                console.log("error", error);

            }

        });
        tl.add({
            targets: infoSlide.querySelector("[data-slick-index='0'] .slider-buttons"),
            opacity: [0, 1],
            translateX: [100, 0],
            easing: 'easeInOutSine',
            duration: 400,
        }, 2600)
        tl.add({
            targets: infoSlide.querySelector("[data-slick-index='0'] .product-description"),
            opacity: [0, 1],
            translateY: [100, 0],
            easing: 'easeInOutSine',
            duration: 400,
        }, 2900)
    } catch (error) {
        console.log("error", error);
    }

    tl.play();
    await initVideoSlickPromise;
    /* 
        setTimeout(() => {
            tl.play();
        }, 150);
        setTimeout(async () => {
            await initVideoSlickPromise;
        }, 600); */
}