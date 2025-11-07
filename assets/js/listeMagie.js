/**
 * FICHIER ARME.JS - VERSION SIMPLIFIÉE
 * =====================================
 * Factory function pour créer des objets arme
 * Remplace la classe complexe par une fonction simple
 */

/**
 * Crée un objet arme avec des valeurs par défaut
 * @param {Object} data - Données de l'arme (optionnel)
 * @returns {Object} Objet arme
 */
function createListeMagie(data = {}) {
    return {
        // Propriétés de base
        Nom_liste: data.Nom_liste || ""
    };
}

// Tableau global contenant toutes les listes de magie disponibles
let ListesMagie = [];

/**
 * Crée un objet sort avec des valeurs par défaut
 * @param {Object} data - Données de sort (optionnel)
 * @returns {Object} Objet sort
 */
function createSort(data = {}) {
    return {
        // Propriétés de base
        Nom_sort: data.nom_sort || "",
        Nom_liste: data.nom_liste || "",
        Portee: data.portee || "",
        Incantation: data.incantation || "",
        Durée: data.durée || "",
        Sauvegarde: data.sauvegarde || "",
        Zone: data.zone || "",
        Description: data.description || "",
        Col: data.col || 0
    };
}

// Tableau global contenant toutes les listes de magie disponibles
let Sorts = [];


/**
 * Crée un objet connecteur avec des valeurs par défaut
 * @param {Object} data - Données des connecteurs (optionnel)
 * @returns {Object} Objet connecteur
 */



function createConnecteur(data = {}) {
    return {
        // Propriétés de base
        Nom_liste: data.Nom_liste || "",
        Pred_sort: data.Pred_sort || "",
        Suc_sort: data.Suc_sort || ""
    };
}

// Tableau global contenant toutes les listes de magie disponibles
let Connecteurs = [];