const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planChoiceButtons = document.querySelectorAll('.plan .button');
const modalActionNo = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav_item--cta');

for (var index = 0; index < planChoiceButtons.length; index++) {
	planChoiceButtons[index].addEventListener('click', () => {
		console.log('Plan Seleceted.');
		modal.classList.add('open');
		backdrop.style.display = 'block';
		setTimeout(function () {
			backdrop.classList.add('open');
		}, 10);
	});
}

//

backdrop.addEventListener('click', () => {
	console.log('clicked on backdrop');
	// mobileNav.style.display = 'none';
	closeModel();
});

if (modalActionNo) {
	modalActionNo.addEventListener('click', closeModel);
}

function closeModel() {
	console.log('cloeModel()');

	if (modal) {
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
	mobileNav.classList.remove('open');
	setTimeout(function () {
		backdrop.style.display = 'none';
		// mobileNav.style.display = 'none';
	}, 200);
}

toggleButton.addEventListener('click', () => {
	console.log('toggle button clicked');
	backdrop.style.display = 'block';
	setTimeout(function () {
		backdrop.classList.add('open');
		mobileNav.classList.add('open');
	}, 10);
});

ctaButton.addEventListener('animationstart', function (event) {
	console.log('Animation started', event);
});
ctaButton.addEventListener('animationiteration', function (event) {
	console.log('Animation iteration', event);
});
ctaButton.addEventListener('animationend', function (event) {
	console.log('Animation end', event);
});
