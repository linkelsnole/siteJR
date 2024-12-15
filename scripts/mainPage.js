const aboutBtn = document.querySelector('.main-about__content-button');
const contactBtn = document.querySelector('.button');
const contactMeBtn = document.querySelector('.main-contact__content-button');
const promoContactMeBtn = document.querySelector('.main-promoSection__content-button');

aboutBtn.addEventListener('click', () => {
		window.location.href = 'secondPage.html';
		// window.open('secondPage.html', '_blank');
});

contactBtn.addEventListener('click', () => {
		window.location.href = 'fourthPage.html';
});

contactMeBtn.addEventListener('click', () => {
	window.location.href = 'fourthPage.html';
});

promoContactMeBtn.addEventListener('click', () => {
	window.location.href = 'fourthPage.html';
});







