
function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(String(email).toLowerCase());
}

function showStatus(message, isError = false) {
	
}