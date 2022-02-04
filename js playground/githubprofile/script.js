const APIURL = 'https://api.github.com/users/'
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

const createUserCard = ((user) => {
    const cardHTML = `
    <div class="card animate__animated animate__fadeIn ">
    <img src="${user.avatar_url}" alt="${user.name}"
    class="avatar">
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
            
        </div>
    </div>
</div>
    `
    main.innerHTML = cardHTML;
})

const createErrorCard = (message) => {
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
    main.innerHTML = cardHTML;  
}

const  getUser = async (username) => {
    try{
        const {data} = await axios(APIURL + username)
        createUserCard(data);
        getRepos(username)
    }
    catch(error){   
        if(error.response.status === 404){
            createErrorCard('No profile with this username');
        }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(APIURL + username + 
            '/repos?sort=created')
        console.log(data);
        addReposTocard(data);
    }
    catch(error){   
        if(error.response.status === 404){
            createErrorCard('problem fetching repos');
        }
    }
}   

function addReposTocard(repos){
    const reposEl = document.getElementById('repos')

    repos.forEach(repo =>{
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    })
}

form.addEventListener('submit',(e) => {
    e.preventDefault()

    const user = search.value;

    if(user){
        getUser(user)

        search.value = ''
    }
})