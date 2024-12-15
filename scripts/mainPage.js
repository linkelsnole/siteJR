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



const boxes = Array.from(document.querySelectorAll('.main-FAQ__contentRight-list-item'));

boxes.forEach(box => {
	box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
	e.preventDefault();
	let currentBox = e.target.closest('.main-FAQ__contentRight-list-item'); //вернет ближайший элемент который содержит класс ...-item
	let currentContent = e.target.nextElementSibling;  //вернет элемент который следует за текущим
	let label = currentBox.querySelector('.main-FAQ__contentRight-list-item label');
	currentBox.classList.toggle('active');
	if (currentBox.classList.contains("active")) {
		currentContent.style.maxHeight = currentContent.scrollHeight + "px";
		label.style.backgroundColor = "#fff";
		label.style.color = "#391400";
	} else {
		currentContent.style.maxHeight = "0";
		setTimeout(() => {
			label.style.backgroundColor = "#28293E";
			label.style.color = "#fff";
		}, 300);
	}
	boxes.forEach(box => {
		if (box !== currentBox && box.classList.contains('active')) {
			box.classList.remove('active');
			const content = box.querySelector('.main-FAQ__contentRight-list-item-content');
			const label = box.querySelector('label');
			content.style.maxHeight = "0";
			setTimeout(() => {
				label.style.backgroundColor = "#28293E"; 
				label.style.color = "#fff";
			}, 300);
		}
	});

}



