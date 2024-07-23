let steppers = document.querySelector(".steppers");
let pinTarget = document.querySelector("#pin-target");

ScrollTrigger.create({
  trigger: '#pin-trigger',
  start: '-50px top',
  end: () => `+=${steppers.offsetHeight - pinTarget.offsetHeight}`,
  // end: 'bottom center',
  pin: '#pin-target',
  markers: true,
  invalidateOnRefresh: true
}) 