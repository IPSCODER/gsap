console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 958;
canvas.height = 570;

const frameCount = 361;
const currentFrame = (index) =>
  `https://d1ktbxarro10a1.cloudfront.net/${(
    index + 1
  )
    .toString()
    .padStart(4, "0")}.png`;

const images = [];
const airpods = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".canvas-container",
    start: "top top",
    end: "+=3500",
    markers: true,
    pin: true,
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}