const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupérer les éléments du DOM
const slider = document.getElementById("banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

// Initialiser l'index du slide courant
let currentSlide = 0;

// Fonction pour afficher le slide courant
function showSlide(index) {
  // Vérifier si l'index est valide
  if (index < 0 || index >= slides.length) {
    return;
  }

  // Mettre à jour les éléments du DOM avec les informations du slide courant
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;

  // Mettre à jour la classe "dot_selected" sur le point correspondant au slide courant
  dots[currentSlide].classList.remove("dot_selected");
  dots[index].classList.add("dot_selected");

  // Mettre à jour l'index du slide courant
  currentSlide = index;
}

// Gérer le clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
  const prevSlide = currentSlide - 1;
  showSlide(prevSlide);
});

// Gérer le clic sur la flèche droite
arrowRight.addEventListener("click", function () {
  const nextSlide = currentSlide + 1;
  showSlide(nextSlide);
});

// Gérer le clic sur les points (dots)
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    showSlide(index);
  });
});

// Afficher le premier slide au chargement de la page
showSlide(0);
