const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', ()=> {
	hamburger.classList.toggle('active');
	document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'unset' : 'hidden';
	menu.classList.toggle('inactive');
	menu.classList.toggle('active');
	menu.classList.contains('inactive') ? setTimeout(() => { menu.style.zIndex= '-1';}, 500) :  menu.style.zIndex= '99';
})