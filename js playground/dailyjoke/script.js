const joke = document.querySelector(".joke");
const next = document.querySelector(".next");
next.addEventListener("click",generateJoke);

function generateJoke(){
    next.classList.add("clicked");
    const config = {
        headers: {
            Accept : 'application/json',
        },
    }
    fetch( "https://icanhazdadjoke.com", config)
    .then(response => response.json())
    .then(data => {
        joke.innerHTML=data.joke;
    });
}