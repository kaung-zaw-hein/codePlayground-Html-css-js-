const API_URL = 'https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=3904bdd3ce931579bf7d32c1397d7ffc&page=1';
const IMG_PAth = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3904bdd3ce931579bf7d32c1397d7ffc&query="';

//Get intial movies
getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
}