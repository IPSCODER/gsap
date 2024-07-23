gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    trigger: "#canvas-one",
  smooth: 1,
  effects: true,
  
});

gsap.timeline({
  scrollTrigger: {
      trigger: "#done",
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

.to(".ScrollSmoother-wrapper",{
display:"none !important"
})


smoother.effects("img", { speed: "auto" });


const canvas = document.querySelector("#canvas-three>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

const frameCount = 361;
const currentFrame = (index) =>
  `https://d1ktbxarro10a1.cloudfront.net/${(index + 1)
    .toString()
    .padStart(4, "0")}.png`;

const images = [];
const sequence = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(sequence, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    start: `top top`,
    end: `+=1000px`,
    trigger: "#canvas-one",
    
  },
  onUpdate: render
});



images[0].onload = render;

function render() {
  scaleImage(images[sequence.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    images[sequence.frame],
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#canvas-two",
  pin: true,
  start: `top top`,
  end: `+=1000px`
});




