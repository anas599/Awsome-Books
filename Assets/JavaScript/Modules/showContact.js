import { addBook, bookList } from '../navItems.js';

export const showContact = () => {
  contact.style.display = 'flex';
  addBook.style.display = 'none';
  bookList.style.display = 'none';
  colorCon.style.color = 'blue';
  colorAdd.style.color = 'black';
  colorBooks.style.color = 'black';
};
