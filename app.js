// Récupération des différents éléments pour l'horloge analogique
const h = document.getElementsByClassName("hr")[0];
const m = document.getElementsByClassName("mn")[0];
const s = document.getElementsByClassName("sc")[0];

// Récupération des différents éléments pour l'horloge numérique
const date = document.querySelector(".date");
const time = document.querySelector(".time");

// Fonction displayTime qui va permettre d'afficher l'heure actuel pour les deux horloges
const displayTime = () => {
  // Récupération de la date et de l'heure actuel
  let today = new Date();

  // Création des variables hours, minutes et seconds
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // Mise en place du style pour faire tourner les aiguilles
  h.style.transform = `rotateZ(${30 * hours + minutes / 2}deg)`;
  m.style.transform = `rotateZ(${6 * minutes}deg)`;
  s.style.transform = `rotateZ(${6 * seconds}deg)`;

  // Création des variables daysList, year, monthsList, dayNumber, dayName, twoNumbersDisplay
  // Attention, en JavaScript, la semaine commence un dimanche
  let daysList = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  let year = today.getFullYear();
  let month = "";
  let monthsList = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  let dayNumber = "";
  let dayName = "";
  let twoNumbersDisplay = "";

  // Récupération du mois en cours
  month = monthsList[today.getMonth()];

  // Récupération du numéro du jour en cours
  dayNumber = today.getDate();

  // Récupération du jour en cours
  dayName = daysList[today.getDay()];

  // Affichage d'un zéro devant un chiffre pour un affichage du type : 09:05:00
  twoNumbersDisplay = (item) => {
    if (item < 10) {
      return (item = "0" + item);
    } else {
      return item;
    }
  };

  hours = twoNumbersDisplay(today.getHours());
  minutes = twoNumbersDisplay(today.getMinutes());
  seconds = twoNumbersDisplay(today.getSeconds());

  //Affichage de la date et de l'heure dans le DOM :
  date.textContent = dayName + " " + dayNumber + " " + month + " " + year;
  time.textContent = hours + ":" + minutes + ":" + seconds;
};

// Appel de la fonction displayTime toutes les 1000 ms, soit toutes les secondes
setInterval(displayTime, 1000);
