let nav = document.querySelector("nav"); // prend la balise nav

// on met directement le menu
nav.innerHTML = `
<a href="index.html">Index</a>
<a href="planete.html">Planètes</a>
<a href="elements.html">Éléments</a>
<a href="zoo.html">Zoo</a>
<a href="feutre.html">Feutres</a>
`;

// récupère tous les liens
let liens = nav.querySelectorAll("a");

// récupère le nom du fichier actuel
let pageActuelle = location.pathname.split("/").pop(); // ex: "index.html"

// compare chaque lien avec la page actuelle
liens.forEach(function(lien){
    if(lien.getAttribute("href") === pageActuelle){
        lien.classList.add("active");
    }
});