// Initialisation quand le DOM est prêt
document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments (si présents sur la page)
  const btn = document.getElementById("btn");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector("#modal .close");

  // Fonctions protégées
  function openModal() {
    if (modal) modal.style.display = "flex";
  }

  function closeModal() {
    if (modal) modal.style.display = "none";
  }

  // Lier les événements seulement si les éléments existent
  if (btn && modal) {
    btn.addEventListener("click", openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
      }
    });
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

    // Ouvrir la liste de magie pure si le bouton "Magie pure" est cliqué
    if (magicType === "Magie pure") {
      openMagiePureModal();
    }

    // Ouvrir la liste des Métamorphoses si le bouton "Métamorphoses" est cliqué
    if (magicType === "Métamorphoses") {
      openMetamorphosesModal();
    }

    // Ouvrir la liste de la Nature si le bouton "Nature" est cliqué
    if (magicType === "Nature") {
      openNatureModal();
    }

    // Ouvrir la liste de la Terre si le bouton "Terre" est cliqué
    if (magicType === "Terre") {
      openTerreModal();
    }

    // Ouvrir la liste Lumière - Electricité
    if (magicType === "Lumière - Electricité") {
      openLumiereElectriciteModal();
    }

    // Ouvrir la liste des Détections si le bouton "Détections" est cliqué
    if (magicType === "Détections") {
      openDetectionModal();
    }

    // Ouvrir la liste des Illusions si le bouton "Illusions" est cliqué
    if (magicType === "Illusions") {
      openIllusionsModal();
    }

    // Ouvrir la liste de Maîtrise des esprits si le bouton "Maîtrise des esprits" est cliqué
    if (magicType === "Maîtrise des esprits") {
      openMaitriseEspritsModal();
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

// Fonction pour ouvrir la modale de la liste de Magie pure
function openMagiePureModal() {
  const magiePureModal = document.createElement("div");
  magiePureModal.id = "magiePureModal";
  magiePureModal.className = "modal";
  magiePureModal.style.display = "flex";

  magiePureModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeMagiePureModal">&times;</span>
      <iframe src="Liste_magiePure.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(magiePureModal);

  const closeMagiePureModal = document.getElementById("closeMagiePureModal");
  closeMagiePureModal.addEventListener("click", function () {
    document.body.removeChild(magiePureModal);
  });

  magiePureModal.addEventListener("click", function (event) {
    if (event.target === magiePureModal) {
      document.body.removeChild(magiePureModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && magiePureModal.parentNode) {
      document.body.removeChild(magiePureModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste des Métamorphoses
function openMetamorphosesModal() {
  const metaModal = document.createElement("div");
  metaModal.id = "metamorphosesModal";
  metaModal.className = "modal";
  metaModal.style.display = "flex";

  metaModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeMetamorphosesModal">&times;</span>
      <iframe src="Liste_metamorphoses.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(metaModal);

  const closeBtn = document.getElementById("closeMetamorphosesModal");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(metaModal);
  });

  metaModal.addEventListener("click", function (event) {
    if (event.target === metaModal) {
      document.body.removeChild(metaModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && metaModal.parentNode) {
      document.body.removeChild(metaModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste de la Nature
function openNatureModal() {
  const natureModal = document.createElement("div");
  natureModal.id = "natureModal";
  natureModal.className = "modal";
  natureModal.style.display = "flex";

  natureModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeNatureModal">&times;</span>
      <iframe src="Liste_nature.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(natureModal);

  const closeBtn = document.getElementById("closeNatureModal");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(natureModal);
  });

  natureModal.addEventListener("click", function (event) {
    if (event.target === natureModal) {
      document.body.removeChild(natureModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && natureModal.parentNode) {
      document.body.removeChild(natureModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste de la Terre
function openTerreModal() {
  const terreModal = document.createElement("div");
  terreModal.id = "terreModal";
  terreModal.className = "modal";
  terreModal.style.display = "flex";

  terreModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeTerreModal">&times;</span>
      <iframe src="Liste_terre.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(terreModal);

  const closeBtn = document.getElementById("closeTerreModal");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(terreModal);
  });

  terreModal.addEventListener("click", function (event) {
    if (event.target === terreModal) {
      document.body.removeChild(terreModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && terreModal.parentNode) {
      document.body.removeChild(terreModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste Lumière - Electricité
function openLumiereElectriciteModal() {
  const lumElModal = document.createElement("div");
  lumElModal.id = "lumElModal";
  lumElModal.className = "modal";
  lumElModal.style.display = "flex";

  lumElModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeLumElModal">&times;</span>
      <iframe src="Liste_lumiereElectricite.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(lumElModal);

  const closeLumEl = document.getElementById("closeLumElModal");
  closeLumEl.addEventListener("click", function () {
    document.body.removeChild(lumElModal);
  });

  lumElModal.addEventListener("click", function (event) {
    if (event.target === lumElModal) {
      document.body.removeChild(lumElModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lumElModal.parentNode) {
      document.body.removeChild(lumElModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste des Détections
function openDetectionModal() {
  const detectionModal = document.createElement("div");
  detectionModal.id = "detectionModal";
  detectionModal.className = "modal";
  detectionModal.style.display = "flex";

  detectionModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeDetectionModal">&times;</span>
      <iframe src="Liste_detection.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(detectionModal);

  const closeBtn = document.getElementById("closeDetectionModal");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(detectionModal);
  });

  detectionModal.addEventListener("click", function (event) {
    if (event.target === detectionModal) {
      document.body.removeChild(detectionModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && detectionModal.parentNode) {
      document.body.removeChild(detectionModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste des Illusions
function openIllusionsModal() {
  const illusionsModal = document.createElement("div");
  illusionsModal.id = "illusionsModal";
  illusionsModal.className = "modal";
  illusionsModal.style.display = "flex";

  illusionsModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeIllusionsModal">&times;</span>
      <iframe src="Liste_illusions.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(illusionsModal);

  const closeBtn = document.getElementById("closeIllusionsModal");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(illusionsModal);
  });

  illusionsModal.addEventListener("click", function (event) {
    if (event.target === illusionsModal) {
      document.body.removeChild(illusionsModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && illusionsModal.parentNode) {
      document.body.removeChild(illusionsModal);
    }
  });
}

// Fonction pour ouvrir la modale de la liste de Maîtrise des esprits
function openMaitriseEspritsModal() {
  const maitriseEspritsModal = document.createElement("div");
  maitriseEspritsModal.id = "maitriseEspritsModal";
  maitriseEspritsModal.className = "modal";
  maitriseEspritsModal.style.display = "flex";

  maitriseEspritsModal.innerHTML = `
    <div class="modal-content" style="width: 95vw; height: 95vh; max-width: 1200px; max-height: 90vh; overflow: hidden;">
      <span class="close" id="closeMaitriseEspritsModal">&times;</span>
      <iframe src="Liste_maitrise_esprits.html" style="width: 100%; height: calc(115% - 20px); border: none; margin-top: 20px;"></iframe>
    </div>
  `;

  document.body.appendChild(maitriseEspritsModal);

  const closeBtn = document.getElementById("closeMaitriseEspritsModal");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(maitriseEspritsModal);
  });

  maitriseEspritsModal.addEventListener("click", function (event) {
    if (event.target === maitriseEspritsModal) {
      document.body.removeChild(maitriseEspritsModal);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && maitriseEspritsModal.parentNode) {
      document.body.removeChild(maitriseEspritsModal);
    }
  });
}
