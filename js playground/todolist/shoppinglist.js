const inputtag= document.getElementsByClassName("form-control")[0];//search button
const shoppinglisttag = document.getElementsByClassName("shoppinglistcontainer")[0];//search history
let productId = 1;//num
const handlerchange = (event) =>{
    const inputValue =event.target.value;//search value
    const parntDiv = document.createElement("div");
    const prodcutcontainer= document.createElement('div');
    prodcutcontainer.classList.add("prodcutcontainer")
    parntDiv.classList.add("productname")
    parntDiv.addEventListener("click",() =>{
        const classExist= parntDiv.classList.contains("through");
        if (classExist){
            parntDiv.classList.remove("through");
        }else {
            parntDiv.classList.add("through");
        }    
    }); 
    const spantag = document.createElement("span");
    const trashicon = document.createElement("i");
    trashicon.classList.add("fas","fa-trash-alt")
    trashicon.addEventListener("click",() =>{
        prodcutcontainer.remove();
    });
    spantag.id = productId;
    const product = productId.toString()+". " +inputValue;
    spantag.append(product);
    parntDiv.append(spantag);
    prodcutcontainer.append(parntDiv,trashicon);
    shoppinglisttag.append(prodcutcontainer);
    inputtag.value = "";
    productId += 1;
};
inputtag.addEventListener("change",handlerchange);
