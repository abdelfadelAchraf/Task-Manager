"use strict";
var tacheInput = document.getElementById('tacheInput');
var ajouterBtn = document.getElementById('ajouterBtn');
var tachesListe = document.getElementById('tachesListe');
var messageErreur = document.getElementById('messageErreur');
function ajouterTache() {
    var texte = tacheInput.value.trim();
    if (!texte) {
        messageErreur.textContent = "Veuillez entrer une tâche valide.";
        messageErreur.style.display = "block";
        return;
    }
    // Réinitialisation du message d'erreur
    messageErreur.style.display = "none";
    // Création des éléments
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = texte;
    // Bouton de suppression
    var supprimerBtn = document.createElement('button');
    supprimerBtn.textContent = 'Supprimer';
    supprimerBtn.addEventListener('click', function () {
        li.remove();
    });
    li.append(span, supprimerBtn);
    tachesListe.appendChild(li);
    // Réinitialisation du champ
    tacheInput.value = '';
}
// Événements
ajouterBtn.addEventListener('click', ajouterTache);
tacheInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        ajouterTache();
});
