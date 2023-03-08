const githubProjects = document.querySelector("#projeto-lista");

const url = "https://api.github.com/users/ivanfrancajunior/repos";

const btn = document.querySelector('#swap')

const body = document.body

btn.addEventListener('click', () => {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark'); 
        localStorage.setItem('theme', 'light')
        return
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark')
    console.log('clicou')
});

const getApiGithub = async () => {
    fetch(url)
   .then(async res =>{
    if(!res.ok){
        throw new Error(res.status)
    }
    let data = await res.json()
    console.log(data)

    data.map(item =>{
        let project = document.createElement('div')

        project.innerHTML = `
        <div class=' w-340px h-210px flex mt-2   border border-white rounded-lg flex-col items-center justify-center p-4 container'>

           <div class= 'flex flex-col flex-wrap  items-center justify-between text-center text-sm '>
               
                <a href="${item.html_url}" target="_blanc" class="m-2 ">${item.name.toUpperCase()}</a>
                <p class="m-2"><span>🔵</span>${item.language}</p>
                <p class="m-2">${item.created_at}</p>
            </div>

        </div>`

        githubProjects.appendChild(project)
    })
   })
 

};
getApiGithub();


