const carousel = document.querySelector('.carousel-container');
const carouselItems = carousel.querySelectorAll('.carousel-item');

const rightButton = document.querySelector("#right-button");
const leftButton = document.querySelector("#left-button");

let actualCarouselItem = undefined;

// Sélectionne toutes les images avec la classe 'side-img' et ajoute un gestionnaire d'événements à chacune d'elles.
window.addEventListener("load", (event) => {
	if (carouselItems.length > 0) {
		actualCarouselItem = carouselItems[0];
		console.log(actualCarouselItem)
	}
});

// Fonction qui change la source de l'image principale du carrousel.
const nextClick = () => {
	actualCarouselItem.classList.remove('block', 'opacity-animation');
	actualCarouselItem.classList.add('hidden');
	
	let currentIndex = Array.from(carouselItems).indexOf(actualCarouselItem);
	let nextIndex = currentIndex + 1;
	
	if (nextIndex >= carouselItems.length) {
		nextIndex = 0;
	}
	
	let nextItem = carouselItems[nextIndex];
	
	nextItem.classList.remove('hidden');
	nextItem.classList.add('block', 'opacity-animation');
	console.log(nextItem);
	actualCarouselItem = nextItem;
};

const prevClick = () => {
	actualCarouselItem.classList.remove('block', 'opacity-animation');
	actualCarouselItem.classList.add('hidden');
	
	let currentIndex = Array.from(carouselItems).indexOf(actualCarouselItem);
	let prevIndex = currentIndex - 1;
	
	if (prevIndex < 0) {
		prevIndex = carouselItems.length - 1;
	}
	
	let prevItem = carouselItems[prevIndex];
	
	prevItem.classList.remove('hidden');
	prevItem.classList.add('block', 'opacity-animation');
	actualCarouselItem = prevItem;
};

/*
rightButton.addEventListener('click', nextClick);
leftButton.addEventListener('click', prevClick);*/

setInterval(nextClick,3000);






