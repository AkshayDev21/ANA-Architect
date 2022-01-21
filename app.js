$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load", function(){
  // showPopup();
  setTimeout(function(){
    loginPopup.classList.add("show");

  },00)

})

// function showPopup(){

//    const timeLimit = 3 // seconds;
//    let i=0;
//    const timer = setInterval(function(){
//      i++;
//      if(i == timeLimit){
//        clearInterval(timer);
//        loginPopup.classList.add("show");
//      }

//      console.log(i)

//    },1000);

// }

close.addEventListener("click",function(){
  loginPopup.classList.remove("show");

})


