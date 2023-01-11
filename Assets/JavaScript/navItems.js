const contact = document.querySelector('#contact');
const addBook = document.querySelector('.input-section');
const bookList = document.querySelector('.booksList');
const colorCon = document.querySelector("#colorCon");

// eslint-disable-next-line no-unused-vars
function showContact() {
  contact.style.display = 'flex';
  addBook.style.display = 'none';
  bookList.style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function showAddBook() {
  contact.style.display = 'none';
  addBook.style.display = 'flex';
  bookList.style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function showBooks() {
  contact.style.display = 'none';
  addBook.style.display = 'none';
  bookList.style.display = 'flex';
}