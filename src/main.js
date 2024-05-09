// У файлі main.js напиши всю логіку роботи додатка.

import { fetchImg } from './js/pixabay-api.js';

const searchForm = document.querySelector('.form-search-img');
const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const sectionBox = document.querySelector('.section-results');

function formHandler(event) {
  event.preventDefault();

  fetchImg(input.value);

  event.target.reset();
}

searchForm.addEventListener('submit', formHandler);
