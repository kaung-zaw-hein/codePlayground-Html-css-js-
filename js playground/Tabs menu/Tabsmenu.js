ultag = document.querySelector("ul");
slidertag = document.querySelector(".slider");
tabcontainer=document.querySelector(".tabcontainer");
const tag = ["home","service","about us","contact us","about us"];
const tabcontent=[`
    Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home `,
`
    service service service services service service service services service service service services service service service services service service service services service service service services 
`,`
    about us about usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout us
`,`
    
    contact uscontact us contact uscontact uscontact uscontact uscontact uscontact uscontact uscontact uscontact uscontact uscontact uscontact uscontact us 
`,`
    
    aboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutusaboutus
    `];
    for (i = 0; i < tabcontent.length; i++){
        const text = tabcontent[i];
        const textdiv = document.createElement("div");
        textdiv.classList.add("tabcontent")
        textdiv.append(text);
        textdiv.id = tag[i].toUpperCase();
        tabcontainer.append(textdiv);
    }    
const tabcontenttag = document.getElementsByClassName("tabcontent");    
const handlerchange= (event) =>{
    const click = event.target.innerHTML;
    const clickedId = event.target.id;
    const clicktag = document.getElementById(clickedId);
    const clciktagwidth = clicktag.offsetWidth;
    const clicktagoffsetleft = clicktag.offsetLeft;
    slidertag.style.width=clciktagwidth +"px";
    slidertag.style.transform = `translateX(${clicktagoffsetleft}px)`
    for (i = 0; i < tabcontenttag.length; i++) {
        tabcontenttag[i].classList.remove("displaytext")
      }
    document.getElementById(click).classList.add("displaytext");
}
for(i=0; i<tag.length; i ++){
    litag = document.createElement("li");
    litag.append(tag[i].toUpperCase());
    litag.id = i;
    litag.addEventListener("click",handlerchange);
    ultag.append(litag);
    if(i===0){
        slidertag.style.width= litag.offsetWidth +"px";
    }
   
}