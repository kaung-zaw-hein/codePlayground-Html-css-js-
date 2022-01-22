const changes = document.querySelectorAll(".change");
const underlines = document.querySelectorAll(".underline");
let width 
let transform 
//click
changes.forEach(ul => {
  ul.addEventListener("click", function( event){
    for (var i = 0; i < underlines.length; i++) {
      moveTo()
      width = event.target.offsetWidth;
      transform =`translateX(${event.target.offsetLeft}px)`;
    }
  })
  ul.addEventListener("mouseover", function( event){
    for (var i = 0; i < underlines.length; i++) {
      moveTo()
    }
  })
  ul.addEventListener("mouseout", function( event){
    for (var i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = transform;
      underlines[i].style.width = width+"px";
    }
    
  })
})
function moveTo(){
  for (var i = 0; i < underlines.length; i++) {
    underlines[i].style.transform = `translateX(${event.target.offsetLeft}px)`;
    underlines[i].style.width = event.target.offsetWidth+"px" ;
  }
}

//mobilemenu
const menuicon =document.querySelector(".menuicon");
const nav = document.querySelector(".black");
// menuicon.addEventListener("click", () => {
//   menuicon.classList.toggle("active");
//   nav.classList.toggle("active");
//   siteHeader.classList.toggle("active");
// })


//scroll
const siteHeader = document.querySelector(".site-header");
const headerLogo = document.querySelector(".header-logo");
const sections = document.querySelectorAll('section');
const sticky = siteHeader.offsetTop;
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      siteHeader.classList.add("sticky");
      nav.classList.add("ctrpad");
      headerLogo.classList.add("ctrpad");
      // menuicon.classList.add("ctrpad");
      
      } else {
        siteHeader.classList.remove("sticky");
        nav.classList.remove("ctrpad");
        headerLogo.classList.remove("ctrpad");
        // menuicon.classList.remove("ctrpad");
      }
      sections.forEach( section => {
        if(document.body.scrollTop > section.offsetTop - 300 || document.documentElement.scrollTop > section.offsetTop - 300){
          changes.forEach(change =>{
            if(change.innerText == section.id){
              for (var i = 0; i < underlines.length; i++) {
                underlines[i].style.transform = `translateX(${change.offsetLeft}px)`;
                underlines[i].style.width = change.offsetWidth+"px" ;
              }
            }
          })
        }
      })
  }
  
