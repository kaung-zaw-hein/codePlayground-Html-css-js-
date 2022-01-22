const container = document.querySelector(".container");
for( let i = 0; i<=50; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML= "<h1>Box</h1>"
    box.id = i;

    container.appendChild(box);
}
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",scrollbox);

scrollbox();

function scrollbox(){
    const triggerbutton = window.innerHeight;
    console.log(triggerbutton);
    boxes.forEach(box=>{
        const boxtop = box.getBoundingClientRect().top;
        if (boxtop < triggerbutton){
            box.classList.add('active');
        }
        else{
            box.classList.remove('active');
        }
    })
}