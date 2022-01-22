const button = document.querySelectorAll("a");
const secbutton = document.querySelector("button");


button.forEach(btn=>{
    btn.addEventListener("click",function(a){
        
        let x = a.clientX - a.target.offsetLeft;
        let y = a.clientY - a.target.offsetTop;
        
        let ripple= document.createElement("span");
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        this.appendChild(ripple);
        console.log(x,y)
        setTimeout(() => {
            ripple.remove()
        },900);
    })
})


secbutton.onmousemove= function hover(a){
        let x = a.pageX - secbutton.offsetLeft;
        let y = a.pageY - secbutton.offsetTop;
        
        secbutton.style.setProperty("--x",x+"px");
        secbutton.style.setProperty("--y",y+"px");
    }

