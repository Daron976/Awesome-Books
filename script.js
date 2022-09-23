import Book from './modules/class.js';
import { luxury } from './modules/date.js';
import { displayItem } from './modules/display.js';


/* eslint-disable */ 
import {
addBooks,
contact,
displaySection,
library,
list,
addNew,
info,
addBtn,
} from './modules/navigation.js';

const availableBook = new Book();

document.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line
  displayItem();
});

addBtn.addEventListener('click', availableBook.addBook);

displaySection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = +e.target.getAttribute('id');
    availableBook.deleteBook(targetId);
  }
});

list.addEventListener('click', () => {
  library.classList.remove('hidden');
  addBooks.classList.add('hidden');
  info.classList.add('hidden');
});

addNew.addEventListener('click', () => {
  library.classList.add('hidden');
  addBooks.classList.remove('hidden');
  info.classList.add('hidden');
});

contact.addEventListener('click', () => {
  library.classList.add('hidden');
  addBooks.classList.add('hidden');
  info.classList.remove('hidden');
});

luxury();