document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enseignant_form");
  const tbody = document.getElementById("enseignants_body");
  const formContainer = document.getElementById("form_container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const niveau = document.getElementById("niveau_enseignant").value;
    const nom = document.getElementById("nom_enseignant").value;
    const description = document.getElementById("description_enseignant").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${niveau}</td>
      <td>${nom}</td>
      <td>${description}</td>
    `;

    tbody.appendChild(newRow);

    // Cacher le formulaire après l'ajout de l'enseignant
    formContainer.style.display = "none";

    // Réinitialiser le formulaire après l'ajout de l'enseignant
    form.reset();
  });

  // Afficher le formulaire d'ajout d'enseignant lorsque le bouton est cliqué
  document.getElementById("ajouter_enseignant").addEventListener("click", function () {
    formContainer.style.display = "block";
  });

});
document.getElementById("afficher_form").addEventListener("click", function() {
  document.getElementById("form_container").style.display = "block";
});