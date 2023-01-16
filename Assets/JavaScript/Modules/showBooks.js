const addBook = document.querySelector('.input-section');
const bookList = document.querySelector('.booksList');
const contact = document.querySelector('#contact');
const colorCon = document.querySelector('#colorCon');
const colorAdd = document.querySelector('#colorAdd');
const colorBooks = document.querySelector('#colorBooks');

export default () => {
  contact.style.display = 'none';
  addBook.style.display = 'none';
  bookList.style.display = 'flex';
  colorBooks.style.color = 'blue';
  colorCon.style.color = 'black';
  colorAdd.style.color = 'black';
};
