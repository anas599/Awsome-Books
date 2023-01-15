import { addBook, bookList } from '../navItems.js';

export const showAddBook = () => {
  contact.style.display = 'none';
  addBook.style.display = 'flex';
  bookList.style.display = 'none';
  colorAdd.style.color = 'blue';
  colorCon.style.color = 'black';
  colorBooks.style.color = 'black';
};
