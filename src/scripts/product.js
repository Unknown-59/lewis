// ok

// Sélectionne toutes les images avec la classe 'side-img' et ajoute un gestionnaire d'événements à chacune d'elles.
document.querySelectorAll('.side-img img').forEach(item => {
	// Pour chaque image, ajoute un écouteur d'événement 'click'.
	item.addEventListener('click', function() {
		// Lorsqu'une image est cliquée, appelle la fonction 'changeImage' avec la source (src) de l'image cliquée.
		changeImage(this.src);
	});
});

// Fonction qui change la source de l'image principale du carrousel.
function changeImage(src) {
	document.querySelector('.carrousel-img img').src = src;
}