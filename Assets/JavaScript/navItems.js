import showAddBook from './Modules/showAddBook.js';
import showContact from './Modules/showContact.js';
import showBooks from './Modules/showBooks.js';

const colorCon = document.querySelector('#colorCon');
const colorAdd = document.querySelector('#colorAdd');
const colorBooks = document.querySelector('#colorBooks');

colorCon.addEventListener('click', showContact);
colorAdd.addEventListener('click', showAddBook);
colorBooks.addEventListener('click', showBooks);
