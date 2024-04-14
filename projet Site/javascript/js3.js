document.getElementById("contactForm").addEventListener("submit", function(event){
    // Validation du formulaire avant envoi
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    // Validation des champs du formulaire
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("message").value;

    // Exemple de validation d'email avec une expression régulière
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez saisir une adresse email valide.");
        return false;
    }

    // Exemple de validation de numéro de téléphone avec un format spécifique
    var telephoneRegex = /^[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/;
    if (!telephoneRegex.test(telephone)) {
        alert("Veuillez saisir un numéro de téléphone valide (format : 77 123 45 67).");
        return false;
    }

    // Exemple de validation de la longueur du message
    if (message.length > 10) {
        alert("Le message ne peut pas dépasser 10 caractères.");
        return false;
    }

    return true;
}
