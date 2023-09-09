window.onload = () => {
	const input = document.getElementById('inpt');
	const popup = document.getElementById('popup');

	input.onfocus = () => {
		popup.style.display = 'flex';
	};

	input.onblur = () => {
		popup.style.display = 'none';
	};
};