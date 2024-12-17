
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(String(email).toLowerCase());
}

function showStatus(message, isError = false) {
	
}



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
			label.style.backgroundColor = "#FDF1E9";
			label.style.color = "#391400";
		}, 300);
	}


	boxes.forEach(box => {
		if (box !== currentBox && box.classList.contains('active')) {
			box.classList.remove('active');
			const content = box.querySelector('.main-FAQ__contentRight-list-item-content');
			const label = box.querySelector('label');
			content.style.maxHeight = "0";
			setTimeout(() => {
				label.style.backgroundColor = "#FDF1E9";
				label.style.color = "#391400";
			}, 300);
		}
	});

}