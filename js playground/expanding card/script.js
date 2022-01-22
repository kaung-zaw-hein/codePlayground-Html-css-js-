const panels = document.querySelectorAll(".panel");
panels.forEach(panel =>{
    panel.addEventListener("mouseover",() =>{
        mouseout();
        panel.classList.add("active");
    })
})
function mouseout(){
    panels.forEach(panel=>{
        panel.classList.remove("active");
    })
}