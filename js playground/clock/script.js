const deg = 6;
const hr = document.querySelector("#hr");
const mm = document.querySelector("#mm");
const sec = document.querySelector("#sec");
setInterval(()=>{

    let day = new Date();
    let hh = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mn/12)}deg)`;
    mm.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
  
})
    