window.addEventListener('DOMContentLoaded', (event) => {

	const mobileMenu = document.querySelector('.mobile-menu');
	const headerNav = document.querySelector('.header__nav');
	const navList = document.querySelector('.nav__list');

	mobileMenu.addEventListener('click', () => {
		headerNav.classList.toggle('header__nav--open');
		navList.classList.toggle('nav__list--open');
	})

});

