// fonction pour récupérer le cast d'une série
async function fetchCast(showId){
    try{
        const res = await fetch(`https://api.tvmaze.com/shows/${showId}/cast`);
        if(res.ok){
            const data = await res.json();
            return data; // tableau avec tous les acteurs
        }
    } catch(e){
        console.log("Erreur fetch cast", e);
    }
}

// fonction pour récupérer les films d'un acteur
async function fetchFilmographie(personId){
    try{
        const res = await fetch(`https://api.tvmaze.com/people/${personId}/castcredits?embed=show`);
        if(res.ok){
            const data = await res.json();
            return data;
        }
    } catch(e){
        console.log("Erreur filmographie", e);
    }
}

// fonction qui renvoie n éléments aléatoires
function getRandomElements(arr, n){
    const shuffled = arr.sort(() => 0.5 - Math.random()); //shuffled est le tableau mélangé 
    return shuffled.slice(0, n);
}

// fonction pour afficher les acteurs
async function afficherActeurs(){
    const main = document.querySelector('main');

    // choisir une série 
    const cast = await fetchCast(1); 

    if(!cast) return;

    // on prend 3 acteurs aléatoires
    const acteursAleatoires = getRandomElements(cast, 3);

    acteursAleatoires.forEach(acteurData => {
        const data = acteurData.person;

        const div = document.createElement('div');
        div.classList.add('acteur');

        const img = document.createElement('img');
        img.src = data.image ? data.image.medium : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
        img.alt = data.name;

        const nom = document.createElement('p');
        nom.textContent = data.name;

        div.appendChild(img);
        div.appendChild(nom);
        main.appendChild(div);

        // clic sur un acteur
        div.addEventListener('click', async ()=>{
            main.innerHTML = ''; // effacer les autres acteurs

            const titre = document.createElement('h2');
            titre.textContent = data.name;
            main.appendChild(titre);

            const films = document.createElement('div');
            films.classList.add('filmographie');
            main.appendChild(films);

            const filmos = await fetchFilmographie(data.id);
            filmos.forEach(f=>{
                const p = document.createElement('p');
                p.textContent = f._embedded.show.name;
                films.appendChild(p);
            });
        });
    });
}

// au chargement
window.addEventListener('DOMContentLoaded', afficherActeurs);