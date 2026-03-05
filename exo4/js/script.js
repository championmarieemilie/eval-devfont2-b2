// Récupération des éléments
const bttneweleve = document.getElementById('neweleve');
const bttnchapeau = document.getElementById('choix');
const eleveplace = document.getElementById('currentStudent');

// Les maisons
const maisons = ["Serdaigle", "Gryffondor", "Poufsouffle", "Serpentard"];
let currentStudent = null;

// Listes de prénoms et noms pour générer un élève aléatoire
const prenoms = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", "Cho", "Fred", "George"];
const noms = ["Potter", "Granger", "Weasley", "Malfoy", "Lovegood", "Longbottom", "Brown", "Chang", "Filch"];

// Fonction pour générer un nom aléatoire
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
