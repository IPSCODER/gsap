// window.addEventListener('scroll', () => {
//     let blue_char = document.querySelector('.main-char')
//     let blue_char_position = blue_char.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;
//     console.log(blue_char_position,'blue-char-position')
//     console.log(screenPosition,'screen-position')
//     if(blue_char_position < screenPosition){
//         blue_char.classList.add('active')
//     } else {
//         blue_char.classList.remove('active')
//     }
// })

// for canvas start---------------------------------------------------------------------------------


// for canvas end ---------------------------------------------------------------------------------


// for hamburger start------------------------------------------------------------------------------------------------------------------
function myFunction(x) {
    x.classList.toggle("change");
    var pop = document.getElementById("popup2");
    pop.classList.toggle("popup2_show");
  }
function hide() {
  var pop = document.getElementById("popup2");
  pop.classList.toggle("popup2_show");
}
function myFunction(x) {
  x.classList.toggle("change");
  var pop = document.getElementById("popup2");
  pop.classList.toggle("popup2_show");
}

//   for hamburger end-------------------------------------------------------------------------------------------------------------------

// for popup start------------------------------------------------------------------------------------------------------------------------
  $(document).ready(function () {
    $(".show").click(function () {
      $("#navbar").addClass("none");
    });

    $(".menuClse").click(function () {
      $("#navbar").removeClass("none");
    });
  });
  //
  //
  $(document).ready(function () {
    $(".show").click(function () {
      $("#hero-section").addClass("none");
    });

    $(".menuClse").click(function () {
      $("#hero-section").removeClass("none");
    });
  });
  //
  //
  $(document).ready(function () {
    $(".show").click(function () {
      $("#sec_two").addClass("none");
    });

    $(".menuClse").click(function () {
      $("#sec_two").removeClass("none");
    });
  });
  //
  //
  $(document).ready(function () {
    $(".show").click(function () {
      $("#sec_three").addClass("none");
    });
    $(".menuClse").click(function () {
      $("#sec_three").removeClass("none");
    });
  });

  //
  //
  $(document).ready(function () {
    $(".show").click(function () {
      $("#sec_three").addClass("none");
    });
    $(".menuClse").click(function () {
      $("#sec_three").removeClass("none");
    });
  });
  //
  //

  $(document).ready(function () {
    $(".show").click(function () {
      $("#popup").addClass("popup_show");
    });
    $(".menuClse").click(function () {
      $("#popup").removeClass("popup_show");
    });
  });

  $(document).ready(function () {
    $(".show").click(function () {
      $(".boxer").addClass("none");
    });
    $(".menuClse").click(function () {
      $(".boxer").removeClass("none");
    });
  });




  // for popup end--------------------------------------------------------------------------------------------------------------------



  


  // for a magnetic button start------------------------------------------------------------------------------------------------------

  // const btns = document.querySelectorAll(".bt");

  //   btns.forEach((btn) => {
  //     btn.addEventListener("mousemove", function(e){
  //       const position = btn.getBoundingClientRect();
  //       const x = e.pageX - position.left - position.width / 2;
  //       const y = e.pageY - position.top - position.height / 2;

  //       btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  //     });
  //   });

  //   btns.forEach((btn) => {
  //     btn.addEventListener("mouseout", function(e){
  //       btn.children[0].style.transform = "translate(0px, 0px)";
  //     });
  //   });

  //   const btnss = document.querySelectorAll(".btn");

  //   btnss.forEach((btn) => {
  //     btn.addEventListener("mousemove", function(e){
  //       const position = btn.getBoundingClientRect();
  //       const x = e.pageX - position.left - position.width / 2;
  //       const y = e.pageY - position.top - position.height / 2;

  //       btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  //     });
  //   });

  //   btnss.forEach((btn) => {
  //     btn.addEventListener("mouseout", function(e){
  //       btn.children[0].style.transform = "translate(0px, 0px)";
  //     });
  //   });

  // for magnetic button end----------------------------------------------------------------------------------------------------------


  // for video start--------------------------------------------------------------------------------------



  

  // for video end----------------------------------------------------------------------------------------



function myFunction(x) {
  if (x.matches) { // If media query matches
    
  } else {
    // document.body.style.backgroundColor = "pink";
    // document.getElementsByTagName("video").play();
  }
}



var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) 


// for display none and block

setTimeout(
  function(){
      document.getElementById("sec_two").style.display='block';
      document.getElementById("sec_three").style.display='block';
      document.getElementById("sec_four").style.display='block';
  }, 0
);


// $(document).ready(function(){
//   var nowPlaying = "none";
//       $('#videos').hover(function(){
//           nowPlaying = $(this).find('iframe').attr('src');
//           $(this).find('iframe').attr('src',nowPlaying+'&autoplay=1');
//       }, function(){
//           $(this).find('iframe').attr('src',nowPlaying );
//       });
// });



// $(document).ready(function() {
//   $('#videos').each(function(el){
//     var _this = $(this);
//     _this.on('mouseover', function(ev) {
 
//       _this[0].src += "autoplay=0";
//       ev.preventDefault();

//     });
//   });
// });

// $("#videos").click(function(){
//   $("iframe")[0].src += "?autoplay=1";
//  });

