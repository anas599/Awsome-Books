const addBook = document.querySelector('.input-section');
const bookList = document.querySelector('.booksList');
const contact = document.querySelector('#contact');
const colorCon = document.querySelector('#colorCon');
const colorAdd = document.querySelector('#colorAdd');
const colorBooks = document.querySelector('#colorBooks');

export default () => {
  contact.style.display = 'flex';
  addBook.style.display = 'none';
  bookList.style.display = 'none';
  colorCon.style.color = 'blue';
  colorAdd.style.color = 'black';
  colorBooks.style.color = 'black';
};
