/* eslint-disable */ 
import { displaySection } from './navigation.js';
import { getFromLocalStorage } from './storage.js';

export const displayItem = () => {
    const availableBooks = getFromLocalStorage();
    displaySection.innerHTML = '';
    availableBooks.forEach((availableBook, i) => {
      displaySection.innerHTML += `<div class="availableBook">
        <p>"${availableBook.title}" by ${availableBook.author}</p>
        <button class="remove" id=${i}>Remove</button>
        </div>`;
    });
  };

export default displayItem;