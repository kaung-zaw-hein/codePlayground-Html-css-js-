const eventkey = document.querySelector(".eventkey");
const eventkeycode = document.querySelector(".eventkeycode");
const eventcode = document.querySelector(".eventcode");
const press = document.querySelector(".press");

window.addEventListener("keydown",(event)=>{
    press.remove();
    eventkey.innerHTML=event.key === '' ? 'Space' : event.key;
    eventcode.innerText = event.code;
    eventkeycode.innerText = event.keyCode;
})