const text = document.querySelector(".text");
const maintext ="did u know brnyr";




let speed = 500;
let index =1;
function changeText(){
        text.innerText = maintext.slice(0,index);
        index++
        if(index > maintext.length){
            index=1
        }
        setTimeout(changeText,speed)
}
changeText()

function speedfun(sign){
    if(sign == 'plus' && speed < 1300) {
        speed+=100
        }
    if(sign == 'minus' && speed > 100) {
            speed-=100
        }
}
