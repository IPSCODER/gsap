gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".boxer",
            start: "100% 100%", // Animation start at this point
            end: "+=17900px", // Animation end at this point
            // end: "bottom top", // Animation end at this point
            // end: () => `+=${document.querySelector(".square").offsetHeight}`,
            // markers: true,
            scrub: true,
            pin: true
            // toggleClass: "none"
        }
    })

    .to(".scrolll, .scrolll_down, .scrolll_down, .scrl", {
        y: "-2.60vh",
        opacity: 0
    })


.from(".log", {
    y: "70.08vh"
})

.from(".log", {
    x:" 40vw"
})



.from(".log2",{
    x:"150vw"

})

.to( ".log",{
    x: 0,
    y: 0
})

.to( ".log",{
    x: 0,
    y: 0,
})

.to(".log4",{
    x: "-50vw"

})


.to(".log2",{
    x:"-150vw"

})

.to( ".log",{
    x: "40vw",
    y: 0,
})

.to( ".log",{
    x: "6.68vw",
    y: "-16vw",
    width:"3.64vw"
})

.from(".i",{
    // y: innerHeight * -1,
    x: innerHeight * -1
})

.to( ".log",{
    x: "50vw",
    y: "-16vw",
    width:"3.64vw"
})



.from(".w",{
    y: innerHeight * 1
})

.to(".log", {
    x: "84vw",
    y: "-5vw",
    width: "3.08vw"
})

.from(".g",{
        // y: innerHeight * -1,
        x: innerHeight * 1
    })

    .to(".log", {
        x: "84vw",
        y: 0,
        width: 0
    })


    .to(" .i img, .w img, .g img",{
        y:innerHeight * -0.5,
        x: innerHeight * 0,
        width:0,
        height:0,
    })
    
    // $(window).scroll(function() {    
    //     var scroll = $(window).scrollTop();
    
    //      //>=, not <=
    //     if (scroll >= 17900) {
    //         $(".boxer").addClass("none");
    //     }
    // }); 


    // $(window).scroll(function() {    
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 17900) {
    //         $(".pin-spacer").addClass("nun");
    //     }
    // }); 

    // $(window).scroll(function() {    
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 17900) {
    //         $(".gsap-marker-end").addClass("nun");
    //     }
    // }); 

    // $(window).scroll(function() {    
    //     var scroll = $(window).scrollTop();
    
    //     if (scroll >= 17900) {
    //         $(".gsap-marker-start").addClass("nun");
    //     }
    // }); 

    // $(window).scroll(function() {    
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 17900) {
    //         $(".gsap-marker-scroller-end").addClass("nun");
    //     }
    // }); 

    gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-section",
            start: "100% 100%", // Animation start at this point
            end: "+=1000px", // Animation end at this point
            // end: "bottom top", // Animation end at this point
            // end: () => `+=${document.querySelector(".square").offsetHeight}`,
            // markers: true,
            scrub: true,
            pin: true
            // toggleClass: "none"
        }
    })

    .to(".scroll, .scroll_down, .scroll_down", {
        y: "-2.60vh",
        opacity: 0
    })