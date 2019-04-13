window.addEventListener('DOMContentLoaded', (event) => {

	const body = document.querySelector('.body');

// mobile menu
	const mobileMenu = document.querySelector('.mobile-menu');
	const headerNav = document.querySelector('.header__nav');
	const navList = document.querySelector('.nav__list');

	mobileMenu.addEventListener('click', () => {
		headerNav.classList.toggle('header__nav--open');
		navList.classList.toggle('nav__list--open');
	});

// modal popup
	const login = document.querySelector('.btn--login');
	const modal = document.querySelector('.modal');
	const contentWrapper = document.querySelector('.content__wrapper');
	const closeModalBtn = document.querySelector('.modal__close-btn')

	toggleModal = () => {
		modal.classList.toggle('modal--show');
	}

	blurBackground = () => {
		contentWrapper.classList.toggle('opacity');
	}

	login.addEventListener('click', () => {
		toggleModal();
		blurBackground();
	});

	console.log(closeModalBtn);

	closeModalBtn.addEventListener('click', () => {
		toggleModal();
		blurBackground();
	});

});

