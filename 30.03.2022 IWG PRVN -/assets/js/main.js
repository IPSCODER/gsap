particlesJS("particles-js", {
  particles: {
    number: { value: 200, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 2, color: "#05176e" },
      polygon: { nb_sides: 6 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: true, speed: 6, size_min: 0.1, sync: true },
    },
    line_linked: {
      enable: false,
      distance: 1074.2860807799002,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "left",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "remove" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 50, size: 10, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 50, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);










function myFunction(x) {
  if (x.matches) { // If media query matches

    //Dust Particles Simulation by bionicoz based on
//Basic Particle Animation
//Author: Nilesh Thorath
$(function () {
  var W, H,
      canvas, ctx, //ctx stands for context and is the "curso" of our canvas element.
      particleCount = 900,
      particles = []; //this is an array which will hold our particles Object/Class

  W = window.innerWidth ;
  H = window.innerHeight ;
  
  canvas = $("#canvas").get(0); //this "get(0) will pull the underlying non-jquery wrapped dom element from our selection
  canvas.width = W;
  canvas.height = H;

  ctx = canvas.getContext("2d"); // settng the context to 2d rather than the 3d WEBGL
  ctx.globalCompositeOperation = "dark";
  console.log(ctx);
  var mouse = {
    x: 3,
    y: 3,
    rx:3,
    ry:3,
    speed:1,
    delta:3
  };
  


  document.addEventListener('mousemove', function(e){ 
      
      mouse.x = e.clientX || e.pageX; 
      mouse.y = e.clientY || e.pageY;
      mouse.x-=W/100;
      mouse.y-=H/100;
    
  }, false);

  function randomNorm(mean, stdev) {
    
    return Math.abs(Math.round((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1))*stdev)+mean;
  }

  //Setup particle class
  function Particle() {
      //using hsl is easier when we need particles with similar colors
      this.h=parseInt(228);
      this.s=parseInt(100 * Math.random() + 1);
      this.l=parseInt(400 * Math.random() + 1);
      this.a=0.9*Math.random() ;
    
      this.color = '#05176e';
      this.shadowcolor = "hsla("+ this.h +","+ this.s +"%,"+ this.l +"%,"+parseFloat(this.a-0.0009)+")";
    // upper code in the last for firefox

      
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.direction = {
          "x": -1 + Math.random() * 2,
          "y": -1 + Math.random() * 2
      };
      //this.radius = 9 * ((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1)+3);
      this.radius = randomNorm(0,1); //for size
      this.scale=0.5*Math.random()+0.5;
      this.rotation=Math.PI/4*Math.random();
    
      this.grad=ctx.createRadialGradient( this.x, this.y, this.radius, this.x, this.y, 5 );
      this.grad.addColorStop(1,this.color); //for color
      this.grad.addColorStop(0,this.shadowcolor);
    
      this.vx = (1 * Math.random() + 1)*0.25*this.radius; //for speed and direction
      this.vy = (1 * Math.random() + 0)*0.25*this.radius; 
      
      this.valpha = 0.01*Math.random()-0.02;
      
      this.move = function () {
          this.x += this.vx * this.direction.x ;
          this.y += this.vy * this.direction.y ;
          this.rotation+=this.valpha;
          //this.radius*= Math.abs((this.valpha*0.01+1));

      };
      this.changeDirection = function (axis) {
          this.direction[axis] *= -1;
          this.valpha *= -1;
      };
      this.draw = function () {
          ctx.save();
          ctx.translate(this.x+mouse.rx/-10*this.radius,this.y+mouse.ry/-10*this.radius);  
        ctx.rotate(this.rotation);  
        ctx.scale(1,this.scale);
          
          this.grad=ctx.createRadialGradient( 0, 0, this.radius, 0, 0, 0 );
          this.grad.addColorStop(1,this.color);
          this.grad.addColorStop(0,this.shadowcolor);
          ctx.beginPath();
          ctx.fillStyle = this.grad;
          ctx.arc(0, 0, this.radius, 0, Math.PI * 10, false);
          ctx.fill();
          ctx.restore();

          
      };
      this.boundaryCheck = function () {
          if (this.x >= W*1) {
              this.x = W*1;
              this.changeDirection("x");
          } else if (this.x <= -W*0.2) {
              this.x = -W*0.2;
              this.changeDirection("x");
          }
          if (this.y >= H*1.2) {
              this.y = H*1.2;
              this.changeDirection("y");
          } else if (this.y <= -H*0.2) {
              this.y = -H*0.2;
              this.changeDirection("y");
          }
      };
  } //end particle class

  function clearCanvas() {
      ctx.clearRect(0, 0, W, H);
  } //end clear canvas

  function createParticles() {
      for (var i = particleCount - 1; i >= 0; i--) {
          p = new Particle();
          particles.push(p);
      }
  } // end createParticles

  function drawParticles() {
      for (var i = particleCount - 1; i >= 0; i--) {
          p = particles[i];
          p.draw();
      }

    
  } //end drawParticles

  function updateParticles() {
      for (var i = particles.length - 1; i >= 0; i--) {
          p = particles[i];
          p.move();
          p.boundaryCheck();

      }
  } //end updateParticles

  function initParticleSystem() {
      createParticles();
      drawParticles();
  }

  function animateParticles() {
      clearCanvas();
      setDelta();
      update()
      drawParticles();
      updateParticles();
      requestAnimationFrame(animateParticles);
  }

  initParticleSystem();
  requestAnimationFrame(animateParticles);

  function setDelta() {  
    this.now    =   (new Date()).getTime();  
    mouse.delta  =   (this.now-this.then)/1000;  
    this.then   =   this.now;  
  }
  function update() {  

  if(isNaN(mouse.delta) || mouse.delta <= 0) { return; }  

  var distX   =   mouse.x - (mouse.rx),  
      distY   =   mouse.y - (mouse.ry);  

  if(distX !== 0 && distY !== 0) {          

      mouse.rx -=  ((mouse.rx - mouse.x) / mouse.speed); 
      mouse.ry -=  ((mouse.ry - mouse.y) / mouse.speed); 
       
  }   

};  
  

});

// here end



  } else {
    // document.body.style.backgroundColor = "pink";

    //Dust Particles Simulation by bionicoz based on
//Basic Particle Animation
//Author: Nilesh Thorath
$(function () {
  var W, H,
      canvas, ctx, //ctx stands for context and is the "curso" of our canvas element.
      particleCount = 900,
      particles = []; //this is an array which will hold our particles Object/Class

  W = window.innerWidth ;
  H = window.innerHeight ;
  
  canvas = $(".particles-js-canvas-el").get(0); //this "get(0) will pull the underlying non-jquery wrapped dom element from our selection
  canvas.width = W;
  canvas.height = H;

  ctx = canvas.getContext("2d"); // settng the context to 2d rather than the 3d WEBGL
  ctx.globalCompositeOperation = "dark";
  console.log(ctx);
  var mouse = {
    x: 3,
    y: 3,
    rx:3,
    ry:3,
    speed:1,
    delta:3
  };
  


  document.addEventListener('mousemove', function(e){ 
      
      mouse.x = e.clientX || e.pageX; 
      mouse.y = e.clientY || e.pageY;
      mouse.x-=W/100;
      mouse.y-=H/100;
    
  }, false);

  function randomNorm(mean, stdev) {
    
    return Math.abs(Math.round((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1))*stdev)+mean;
  }

  //Setup particle class
  function Particle() {
      //using hsl is easier when we need particles with similar colors
      this.h=parseInt(228);
      this.s=parseInt(100 * Math.random() + 1);
      this.l=parseInt(400 * Math.random() + 1);
      this.a=0.9*Math.random() ;
    
      this.color = '#05176e';
      this.shadowcolor = "hsla("+ this.h +","+ this.s +"%,"+ this.l +"%,"+parseFloat(this.a-0.0009)+")";
    // upper code in the last for firefox

      
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.direction = {
          "x": -1 + Math.random() * 2,
          "y": -1 + Math.random() * 2
      };
      //this.radius = 9 * ((Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1)+3);
      this.radius = randomNorm(0,1); //for size
      this.scale=0.5*Math.random()+0.5;
      this.rotation=Math.PI/4*Math.random();
    
      this.grad=ctx.createRadialGradient( this.x, this.y, this.radius, this.x, this.y, 5 );
      this.grad.addColorStop(1,this.color); //for color
      this.grad.addColorStop(0,this.shadowcolor);
    
      this.vx = (1 * Math.random() + 1)*0.25*this.radius; //for speed and direction
      this.vy = (1 * Math.random() + 0)*0.25*this.radius; 
      
      this.valpha = 0.01*Math.random()-0.02;
      
      this.move = function () {
          this.x += this.vx * this.direction.x ;
          this.y += this.vy * this.direction.y ;
          this.rotation+=this.valpha;
          //this.radius*= Math.abs((this.valpha*0.01+1));

      };
      this.changeDirection = function (axis) {
          this.direction[axis] *= -1;
          this.valpha *= -1;
      };
      this.draw = function () {
          ctx.save();
          ctx.translate(this.x+mouse.rx/-10*this.radius,this.y+mouse.ry/-10*this.radius);  
        ctx.rotate(this.rotation);  
        ctx.scale(1,this.scale);
          
          this.grad=ctx.createRadialGradient( 0, 0, this.radius, 0, 0, 0 );
          this.grad.addColorStop(1,this.color);
          this.grad.addColorStop(0,this.shadowcolor);
          ctx.beginPath();
          ctx.fillStyle = this.grad;
          ctx.arc(0, 0, this.radius, 0, Math.PI * 10, false);
          ctx.fill();
          ctx.restore();

          
      };
      this.boundaryCheck = function () {
          if (this.x >= W*1) {
              this.x = W*1;
              this.changeDirection("x");
          } else if (this.x <= -W*0.2) {
              this.x = -W*0.2;
              this.changeDirection("x");
          }
          if (this.y >= H*1.2) {
              this.y = H*1.2;
              this.changeDirection("y");
          } else if (this.y <= -H*0.2) {
              this.y = -H*0.2;
              this.changeDirection("y");
          }
      };
  } //end particle class

  function clearCanvas() {
      ctx.clearRect(0, 0, W, H);
  } //end clear canvas

  function createParticles() {
      for (var i = particleCount - 1; i >= 0; i--) {
          p = new Particle();
          particles.push(p);
      }
  } // end createParticles

  function drawParticles() {
      for (var i = particleCount - 1; i >= 0; i--) {
          p = particles[i];
          p.draw();
      }

    
  } //end drawParticles

  function updateParticles() {
      for (var i = particles.length - 1; i >= 0; i--) {
          p = particles[i];
          p.move();
          p.boundaryCheck();

      }
  } //end updateParticles

  function initParticleSystem() {
      createParticles();
      drawParticles();
  }

  function animateParticles() {
      clearCanvas();
      setDelta();
      update()
      drawParticles();
      updateParticles();
      requestAnimationFrame(animateParticles);
  }

  initParticleSystem();
  requestAnimationFrame(animateParticles);

  function setDelta() {  
    this.now    =   (new Date()).getTime();  
    mouse.delta  =   (this.now-this.then)/1000;  
    this.then   =   this.now;  
  }
  function update() {  

  if(isNaN(mouse.delta) || mouse.delta <= 0) { return; }  

  var distX   =   mouse.x - (mouse.rx),  
      distY   =   mouse.y - (mouse.ry);  

  if(distX !== 0 && distY !== 0) {          

      mouse.rx -=  ((mouse.rx - mouse.x) / mouse.speed); 
      mouse.ry -=  ((mouse.ry - mouse.y) / mouse.speed); 
       
  }   

};  
  

});




  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes