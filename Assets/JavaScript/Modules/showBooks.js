const addBook = document.querySelector('.input-section');
const bookList = document.querySelector('.booksList');

export const showBooks = () => {
  contact.style.display = 'none';
  addBook.style.display = 'none';
  bookList.style.display = 'flex';
  colorBooks.style.color = 'blue';
  colorCon.style.color = 'black';
  colorAdd.style.color = 'black';
};
