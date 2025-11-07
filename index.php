<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Monde de Kram - Jeu de Rôle</title>
</head>

<body>



<!-- Chargement des scripts JavaScript dans l'ordre de dépendance -->
<script src="assets/js/listeMagie.js"></script>     

<script>
<?php
// === FONCTIONS UTILITAIRES POUR L'INITIALISATION ===
/**
 * Convertit une valeur de base de données en JavaScript
 */
function toJS($value, $type = 'string') {
    switch ($type) {
        case 'int':
            return is_null($value) ? "null" : "parseInt('0" . $value . "', 10)";
        case 'bool':
            return ($value === '1' || $value === 1 || $value === true || strtolower($value) === 'true') ? "true" : "false";
        case 'null':
            return is_null($value) ? "null" : "parseInt('0" . $value . "', 10)";
        default:
            return "`" . addslashes($value) . "`";
    }
}

/**
 * Génère le code JavaScript pour initialiser les listes de magie
 */
function generateListeMagieJS($row, $index) {
    $js = "ListesMagie[$index] = createListeMagie({\n";
    $js = "    Nom_liste: " . toJS($row['Nom_liste']) . ",\n";
    $js .= "});\n";
    return $js;
}

/**
 * Génère le code JavaScript pour initialiser les sorts de magie
 */
function generateSortJS($row, $index) {
    $js = "Sorts[$index] = createSort({\n";
    $js = "    Nom_sort: " . toJS($row['Nom_sort']) . ",\n";
    $js .= "    Nom_liste: " . toJS($row['Nom_liste']) . ",\n";
    $js .= "    Portee: " . toJS($row['Portee']) . ",\n";
    $js .= "    Incantation: " . toJS($row['Incantation']) . ",\n";
    $js .= "    Durée: " . toJS($row['Durée']) . ",\n";
    $js .= "    Sauvegarde: " . toJS($row['Sauvegarde']) . ",\n";
    $js .= "    Zone: " . toJS($row['Zone']) . ",\n";
    $js .= "    Description: " . toJS($row['Description']) . ",\n";
    $js .= "    Col: " . toJS($row['Col'], 'int') . "\n";
    $js .= "});\n";
    return $js;
}
/**
 * Génère le code JavaScript pour initialiser les connecteurs de magie
 */
function generateConnecteurJS($row, $index) {
    $js = "Sorts[$index] = createSort({\n";
    $js = "    Nom_liste: " . toJS($row['Nom_liste']) . ",\n";
    $js .= "    Pred_sort: " . toJS($row['Pred_sort']) . ",\n";
    $js .= "    Suc_sort: " . toJS($row['Suc_sort']) . ",\n";
    $js .= "});\n";
    return $js;
}

// === CONNEXION À LA BASE DE DONNÉES ===
$conn = new mysqli('192.168.1.242', 'root', 'Titoon#01', 'Kram');
$conn->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);

if ($conn->connect_error) {
    echo "alert('Echec de connexion à la base de données');\n";
    return;
}

$conn->set_charset("utf8");

// === CHARGEMENT DES MODÈLES DE PERSONNAGES (SIMPLIFIÉ) ===
$query = "SELECT * FROM liste";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $ligne = 0;
    while ($row = $result->fetch_assoc()) {
        // Debug pour voir les valeurs de la base de données
        echo generateListeMagieJS($row, $ligne);
        $ligne++;
    }
}

// === CHARGEMENT DES ARMES (SIMPLIFIÉ) ===
$query = "SELECT * FROM arme ORDER BY Nom ASC";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $ligne = 0;
    while ($row = $result->fetch_assoc()) {
        echo generateArmeJS($row, $ligne);
        $ligne++;
    }
}
// === CHARGEMENT DES LISTE DE SORTS ===
$query = "SELECT * FROM sort ORDER BY Nom_liste ASC, Niveau ASC, Col ASC";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $ligne = 0;
    while ($row = $result->fetch_assoc()) {
        echo generateSortJS($row, $ligne);
        $ligne++;
    }
}
// === CHARGEMENT DES LISTE DE CONNECTEUR ===
$query = "SELECT * FROM connecteur";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $ligne = 0;
    while ($row = $result->fetch_assoc()) {
        echo generateConnecteurJS($row, $ligne);
        $ligne++;
    }
}

$conn->close();
?>



</script>
</body>
</html>
