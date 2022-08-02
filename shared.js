const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.backdrop .modal');
const planChoiceButtons = document.querySelectorAll('.plan .button');
const modalActionNo = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let index = 0; index < planChoiceButtons.length; index++) {
	const element = planChoiceButtons[index];
	element.addEventListener('click', () => {
		console.log('Plan Seleceted.');
		modal.classList.add('open');
		backdrop.classList.add('open');
	});
}

if (modalActionNo) {
	modalActionNo.addEventListener('click', closeModel());
}

backdrop.addEventListener('click', () => {
	// mobileNav.style.display = 'none';
	closeModel();
});

toggleButton.addEventListener('click', () => {
	console.log('toggle button clicked');
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';
});

function closeModel() {
	// backdrop.style.display = 'none';
	// modal.style.display = 'none';
	if (modal) {
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
	mobileNav.classList.remove('open');
}
