const contactBtn = document.querySelector('.button');
const promoContactMeBtn = document.querySelector('.promoSection__content-button');

contactBtn.addEventListener('click', () => {
	window.location.href = 'fourthPage.html';
});

promoContactMeBtn.addEventListener('click', () => {
	window.location.href = 'fourthPage.html';
});


//АКТИВНОСТЬ - клик по label
const boxes = Array.from(document.querySelectorAll('.services__list-item'));
boxes.forEach(box => {
	box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
	e.preventDefault();
	let currentBox = e.target.closest('.services__list-item'); //вернет label
	if (!e.target.closest('label')) {
		return;
	}
	let currentContent = e.target.nextElementSibling;
	let label = currentBox.querySelector('.services__list-item label');
	currentBox.classList.toggle('active');
	if (currentBox.classList.contains("active")) {
		currentContent.style.maxHeight = currentContent.scrollHeight + "px";
		label.style.borderBottom = "1px solid rgba(243, 209, 191, 1)";	
	} else {
		currentContent.style.maxHeight = "0";
		if ([0,1].includes(boxes.indexOf(currentBox))) {
			setTimeout(() => {
				label.style.borderBottom = "none";
			}, 300);
		}
	}
}

function boxHandler(e) {
	const content = e.target.closest('.services__list-item-content');
	
	if (content) {
		return;
	}
	e.preventDefault();
	let currentBox = e.target.closest('.services__list-item');
	if (!currentBox) return;
	
	let currentContent = currentBox.querySelector('.services__list-item-content');
	let label = currentBox.querySelector('label');
	
	currentBox.classList.toggle('active');
	if (currentBox.classList.contains("active")) {
		currentContent.style.maxHeight = currentContent.scrollHeight + "px";
		label.style.borderBottom = "1px solid rgba(243, 209, 191, 1)";	
	} else {
		currentContent.style.maxHeight = "0";
		if ([0,1].includes(boxes.indexOf(currentBox))) {
			setTimeout(() => {
				label.style.borderBottom = "none";
			}, 300);
		}
	}
}


