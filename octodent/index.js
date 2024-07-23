gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".main-scroll",
            start: "100% 100%", // Animation start at this point
            // end: "+=17900px", // Animation end at this point
            end:"top bottom", // from top, from bottom
            // end: "bottom top", // Animation end at this point
            // end: () => `+=${document.querySelector(".square").offsetHeight}`,
            markers: true,
            scrub: true,
            pin: true
            // toggleClass: "none"
        }
    })
