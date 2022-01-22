const itembox = document.querySelectorAll(".itembox");
const photobox = document.querySelectorAll(".photobox");

for (let i=0; i<itembox.length; i++){
    itembox[i].addEventListener("click",function(){
        for(let j=0; j<itembox.length;j++){
            itembox[j].classList.remove("active");
        }
    this.classList.add("active");

    let datafilter = this.getAttribute('data-filter');
    console.log(datafilter);
    
    for(let x=0; x<photobox.length; x++){
        photobox[x].classList.remove("active");
        photobox[x].classList.add("hide");

        if(photobox[x].getAttribute('data-item') == datafilter || datafilter =="all"){
            photobox[x].classList.remove("hide");
            photobox[x].classList.add("active");
        }
    }
    })
}