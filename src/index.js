import './style.css';
import { DateTime } from 'luxon';
import * as ADM from './admin.js';

// Animate menu modal in mobile
const menuButton = document.querySelector('.navbar__menu-button');
const menuNav = document.querySelector('.navbar__menu-nav');
let menuModalOpen = false;

const menuModalClose = () => {
  menuNav.classList.remove('navbar__menu-nav-modal');
  menuNav.removeEventListener('animationend', menuModalClose);
  menuNav.style.animation = '';
  menuModalOpen = false;
};

const menuToogle = () => {
  if (!menuModalOpen) {
    menuNav.style.animation = 'modalFadeIn 500ms forwards';
    menuNav.classList.add('navbar__menu-nav-modal');
    menuButton.classList.add('navbar__menu-button-modal');
    menuModalOpen = true;
  } else {
    menuNav.style.animation = 'modalFadeOut 500ms forwards';
    menuButton.classList.remove('navbar__menu-button-modal');
    menuNav.addEventListener('animationend', menuModalClose);
  }
};

menuButton.addEventListener('click', menuToogle);

// Add Date and Time
const dateToday = document.querySelector('.date');
setInterval(() => {
  dateToday.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_FULL)}`;
}, 1000);

// Page navigator's events
const navOption = document.querySelectorAll('.nav-link');
const navSection = document.querySelectorAll('.section-container');

const setNavOption = (elem) => {
  navOption.forEach((link1) => {
    link1.classList.remove('active');
    if (elem.getAttribute('id') === 'brand-link' && link1.getAttribute('id') === 'list-link') link1.classList.add('active');
  });
  elem.classList.add('active');
};

const setNavEvents = () => {
  navOption.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navSection.forEach((sect) => {
        sect.classList.add('d-none');
        if (sect.getAttribute('id') === link.dataset.section) sect.classList.remove('d-none');
      });
      setNavOption(e.target);
      if (menuModalOpen) menuToogle();
    });
  });
};

window.addEventListener('resize', () => {
  if (menuModalOpen && window.innerWidth >= 768) menuToogle();
});

window.addEventListener('load', () => {
  setNavEvents();
  ADM.bookList.loadLocalStorage();
  ADM.bookList.renderBooks();
});
