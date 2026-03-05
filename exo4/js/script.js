// Récupération des éléments
const bttneweleve = document.getElementById('neweleve');
const bttnchapeau = document.getElementById('choix');
const eleveplace = document.getElementById('currentStudent');

// Les maisons
const maisons = ["Serdaigle", "Gryffondor", "Poufsouffle", "Serpentard"];
let currentStudent = null;

// Listes de prénoms et noms pour un élève aléatoire
const prenoms = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", "Cho", "Fred", "George"];
const noms = ["Potter", "Granger", "Weasley", "Malfoy", "Lovegood", "Longbottom", "Brown", "Chang", "Filch"];

// Fonction pour un nom aléatoire
function genererNom() {
    const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
    const nom = noms[Math.floor(Math.random() * noms.length)];
    return `${prenom} ${nom}`;
}

// Bouton "Nouvel élève"
bttneweleve.addEventListener('click', () => {
    currentStudent = genererNom();
    eleveplace.textContent = currentStudent;

    bttnchapeau.disabled = false; // Activation du Choixpeau
    bttneweleve.disabled = true;  // Bloquer tant que l'élève n'est pas trié
});

// Bouton "Choixpeau"
bttnchapeau.addEventListener('click', () => {
    if (!currentStudent) return;

    // Choix aléatoire  maison
    const maisonChoisie = maisons[Math.floor(Math.random() * maisons.length)];
    const ul = document.getElementById(maisonChoisie);

    // Ajout de l'élève à la maison
    const li = document.createElement('li');
    li.textContent = currentStudent;
    ul.appendChild(li);

    // Reset
    currentStudent = null;
    bttneweleve.disabled = false;   // On peut générer un nouvel élève
    bttnchapeau.disabled = true;    // Choixpeau désactivé jusqu'à nouvel élève
});