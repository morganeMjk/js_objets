// Exercice 1 : Création et manipulation d'objets

//     Etape 1 : Créer un objet "voiture" avec les propriétés "marque", "modèle" et "année"
//     Etape 2 : Ajouter une méthode "conduire" à l'objet "voiture" qui affiche un message "La voiture de marque [marque] modèle [modèle] de l'année [année] roule sur la route."
//     Etape 3 : Créer une instance de l'objet "voiture" en utilisant les propriétés "Toyota", "Camry" et "2020"
//     Etape 4 : Appeler la méthode "conduire" sur l'instance de l'objet "voiture" pour afficher le message "La voiture de marque Toyota modèle Camry de l'année 2020 roule sur la route."

function Voiture(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;

    this.conduire = function() {
        console.log(`La voiture de marque ${marque} modèle ${modele} de l'année ${annee} roule sur la route.`);
    }
}

let voiture1 = new Voiture('Toyota', 'Camry', 2020);
let voiture2 = new Voiture('Nissan', 'Qashqai', 2011);


voiture1.conduire()

// Exercice 2 : Manipulation d'objets dans un tableau

//     Etape 1 : Créer un tableau "garage" qui contient des instances de l'objet "voiture" créé dans l'exercice précédent
//     Etape 2 : Ajouter une méthode "afficherVoitures" à l'objet "garage" qui affiche les propriétés de chaque voiture dans le tableau
//     Etape 3 : Appeler la méthode "afficherVoitures" sur l'objet "garage" pour afficher les propriétés de chaque voiture dans le tableau

let garage = {
    tableau : [voiture1, voiture2],

    afficherVoitures(){
        console.log(this.tableau);
    }
};

garage.afficherVoitures();

// Exercice 3 : Fonction constructeur

//     Etape 1 : Créer une fonction constructeur "Personne" qui prend en paramètres "nom" et "âge"
//     Etape 2 : Ajouter les propriétés "nom" et "âge" à l'objet créé par la fonction constructeur
//     Etape 3 : Ajouter une méthode "sePresenter" à l'objet créé par la fonction constructeur qui affiche un message "Bonjour, je m'appelle [nom] et j'ai [âge] ans."
//     Etape 4 : Utiliser la fonction constructeur pour créer une instance de l'objet "Personne" en utilisant les valeurs "John" et "30"

function Personne(nom, age) {
    this.nom = nom;
    this.age = age;

    this.sePresenter = function() {
        console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans`);
    }
};

let personne1 = new Personne('John', 30);

personne1.sePresenter();

// Exercice 4 : Héritage de fonction constructeur

//     Etape 1 : Créer une fonction constructeur "Etudiant" qui hérite des propriétés et méthodes de la fonction constructeur "Personne"
//     Etape 2 : Ajouter une propriété "matricule" à l'objet créé par la fonction constructeur "Etudiant"
//     Etape 3 : Ajouter une méthode "etudier" à l'objet créé par la fonction constructeur "Etudiant" qui affiche un message "L'étudiant [nom] avec le matricule [matricule] étudie pour son examen."
//     Etape 4 : Utiliser la fonction constructeur "Etudiant" pour créer une instance de l'objet "Etudiant" en utilisant les valeurs "Jane" et "22" pour les propriétés "nom" et "âge", et "123456" pour la propriété "matricule"
//     Etape 5 : Appeler la méthode "sePresenter" sur l'instance de l'objet "Etudiant" pour afficher le message "Bonjour, je m'appelle Jane et j'ai 22 ans."
//     Etape 6 : Appeler la méthode "etudier" sur l'instance de l'objet "Etudiant" pour afficher le message "L'étudiant Jane avec le matricule 123456 étudie pour son examen."



class Etudiant extends Personne {
    constructor(nom, age, matricule) {
        super(nom, age);
        this.matricule = matricule;
    }
    etudier = () => {
        console.log(`L'étudiant ${this.nom} avec le matricule ${this.matricule} étudie pour son examen.`)
    }
}


// function Etudiant(nom, age, matricule) {
//     Personne.call(this, nom, age);
//     this.matricule = matricule;

//     this.etudier = function() {
//         console.log(`L'étudiant ${nom} avec le matricule ${matricule} étudie pour son examen.`);
//     }
// }

let Etudiant1 = new Etudiant('Jane', 22, 123456);
Etudiant1.sePresenter();
Etudiant1.etudier();