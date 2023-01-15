import { showAddBook } from './Modules/showAddBook.js';
import { showContact } from './Modules/showContact.js';
import { showBooks } from './Modules/showBooks.js';

export const addBook = document.querySelector('.input-section');
export const bookList = document.querySelector('.booksList');

const contact = document.querySelector('#contact');
const colorCon = document.querySelector('#colorCon');
const colorAdd = document.querySelector('#colorAdd');
const colorBooks = document.querySelector('#colorBooks');

colorCon.addEventListener('click', showContact);
colorAdd.addEventListener('click', showAddBook);
colorBooks.addEventListener('click', showBooks);
