let nav = document.querySelector('.header__nav');
let menu = document.querySelector('.header__menu');
let header = document.querySelector('.header');
menu.addEventListener('click', () => {
	nav.classList.toggle('is-open');
	header.classList.toggle('is-open');
});

