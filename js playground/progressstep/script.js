const progressstep = document.querySelector(".progessstep");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let activenum = 1;
next.addEventListener("click",() => {
    activenum++;
    if(activenum >circles.length){
        activenum =4;
    }
    change();
})

prev.addEventListener("click",() => {
    activenum--;
    if(activenum < 1){
        activenum =1;
    }
    change();
})

const change = () =>{
   circles.forEach((circle,index) => {
    if(activenum>index){
        circle.classList.add("active");
    }
    else{
        circle.classList.remove("active");
    }
   })
   
   const active = document.querySelectorAll(".active");
   progressstep.style.width= (active.length-1) / (circles.length-1)*100 +"%";

   if(activenum ==1){
       prev.disabled = true;
   }else if(activenum == circles.length){
       next.disabled = true;
   }else{
       prev.disabled = false;
       next.disabled = false;
   }
}