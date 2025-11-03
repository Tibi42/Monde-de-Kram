// Récupération des éléments
const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

// Fonction pour ouvrir la modale
function openModal() {
  modal.style.display = "flex";
}

// Fonction pour fermer la modale
function closeModal() {
  modal.style.display = "none";
}

// Événement au clic sur le bouton
btn.addEventListener("click", openModal);

// Événement au clic sur la croix pour fermer
closeBtn.addEventListener("click", closeModal);

// Événement au clic à l'extérieur de la modale pour fermer
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Événement pour fermer avec la touche Échap
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

// Gestion des clics sur les boutons magiques
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("magic-button")) {
    const magicType = event.target.textContent;
    console.log(`Magie sélectionnée : ${magicType}`);

    // Animation du bouton cliqué
    event.target.style.transform = "scale(0.95)";
    event.target.style.backgroundColor = "#2c5aa0";

    setTimeout(() => {
      event.target.style.transform = "scale(1)";
      event.target.style.backgroundColor = "#4a90e2";
    }, 150);

    // Ouvrir la liste de l'air si le bouton "Air" est cliqué
    if (magicType === "Air") {
      openAirModal();
    }

    // Ouvrir la liste du contrôle de soi si le bouton "Contrôle de soi" est cliqué
    if (magicType === "Contrôle de soi") {
      openControleDeSoiModal();
    }

    // Ouvrir la liste des créatures surnaturelles si le bouton "Créatures surnaturelles" est cliqué
    if (magicType === "Créatures surnaturelles") {
      openCreatureSurnaturelleModal();
    }
  }
});

// Fonction pour ouvrir la modale de la liste de l'air
function openAirModal() {
  // Créer la modale pour l'air
  const airModal = document.createElement("div");
  airModal.id = "airModal";
  airModal.className = "modal";
  airModal.style.display = "flex";

  // Créer le contenu de la modale
  airModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeAirModal">&times;</span>
      <iframe src="liste_air.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  // Ajouter la modale au body
  document.body.appendChild(airModal);

  // Gestion de la fermeture
  const closeAirModal = document.getElementById("closeAirModal");
  closeAirModal.addEventListener("click", function () {
    document.body.removeChild(airModal);
  });

  // Fermer en cliquant à l'extérieur
  airModal.addEventListener("click", function (event) {
    if (event.target === airModal) {
      document.body.removeChild(airModal);
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && airModal.parentNode) {
      document.body.removeChild(airModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste du contrôle de soi
function openControleDeSoiModal() {
  // Créer la modale pour le contrôle de soi
  const controleDeSoiModal = document.createElement("div");
  controleDeSoiModal.id = "controleDeSoiModal";
  controleDeSoiModal.className = "modal";
  controleDeSoiModal.style.display = "flex";

  // Créer le contenu de la modale
  controleDeSoiModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeControleDeSoiModal">&times;</span>
      <iframe src="liste_ControleDeSoi.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  // Ajouter la modale au body
  document.body.appendChild(controleDeSoiModal);

  // Gestion de la fermeture
  const closeControleDeSoiModal = document.getElementById(
    "closeControleDeSoiModal"
  );
  closeControleDeSoiModal.addEventListener("click", function () {
    document.body.removeChild(controleDeSoiModal);
  });

  // Fermer en cliquant à l'extérieur
  controleDeSoiModal.addEventListener("click", function (event) {
    if (event.target === controleDeSoiModal) {
      document.body.removeChild(controleDeSoiModal);
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && controleDeSoiModal.parentNode) {
      document.body.removeChild(controleDeSoiModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste des créatures surnaturelles
function openCreatureSurnaturelleModal() {
  // Créer la modale pour les créatures surnaturelles
  const creatureSurnaturelleModal = document.createElement("div");
  creatureSurnaturelleModal.id = "creatureSurnaturelleModal";
  creatureSurnaturelleModal.className = "modal";
  creatureSurnaturelleModal.style.display = "flex";

  // Créer le contenu de la modale
  creatureSurnaturelleModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeCreatureSurnaturelleModal">&times;</span>
      <iframe src="liste_creatureSurnaturelle.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  // Ajouter la modale au body
  document.body.appendChild(creatureSurnaturelleModal);

  // Gestion de la fermeture
  const closeCreatureSurnaturelleModal = document.getElementById(
    "closeCreatureSurnaturelleModal"
  );
  closeCreatureSurnaturelleModal.addEventListener("click", function () {
    document.body.removeChild(creatureSurnaturelleModal);
  });

  // Fermer en cliquant à l'extérieur
  creatureSurnaturelleModal.addEventListener("click", function (event) {
    if (event.target === creatureSurnaturelleModal) {
      document.body.removeChild(creatureSurnaturelleModal);
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && creatureSurnaturelleModal.parentNode) {
      document.body.removeChild(creatureSurnaturelleModal);
    }
  });
}
