
const tacheInput = document.getElementById('tacheInput') as HTMLInputElement;
const ajouterBtn = document.getElementById('ajouterBtn') as HTMLButtonElement;
const tachesListe = document.getElementById('tachesListe') as HTMLUListElement;
const messageErreur = document.getElementById('messageErreur') as HTMLDivElement;


function ajouterTache(): void {
    const texte = tacheInput.value.trim();

    // Validation de l'entrée
    if (!texte) {
        messageErreur.textContent = "Veuillez entrer une tâche valide.";
        messageErreur.style.display = "block";
        return;
    }

    // Réinitialisation du message d'erreur
    messageErreur.style.display = "none";

    // Création des éléments
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = texte;
    
    // Marquer comme terminé
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // Bouton de suppression
    const supprimerBtn = document.createElement('button');
    supprimerBtn.textContent = 'Supprimer';
    supprimerBtn.addEventListener('click', () => {
        li.remove();
    });

    // Assemblage des éléments
    li.append(span, supprimerBtn);
    tachesListe.appendChild(li);

    // Réinitialisation du champ
    tacheInput.value = '';
}

// Événements
ajouterBtn.addEventListener('click', ajouterTache);
tacheInput.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') ajouterTache();
});













