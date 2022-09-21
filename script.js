/* eslint-disable */ 

const displaySection = document.querySelector('.bookstore');
const author = document.getElementById('author');
const title = document.getElementById('title');
const addBtn = document.getElementById('addBtn');

let availableBooks = [];

  // save to localStorage

  const saveToLocalStorage = (availableBooks) => localStorage.setItem('availableBooks', JSON.stringify(availableBooks));

  // get from localStorage

  const getFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem('availableBooks'))) availableBooks = JSON.parse(localStorage.getItem('availableBooks'));
  };
  
  const displayItem = () => {
    getFromLocalStorage();
    displaySection.innerHTML = '';
    availableBooks.forEach((availableBook, i) => {
      displaySection.innerHTML += `<div class="availableBook">
        <p>${availableBook.title}</p>
        <p>${availableBook.author}</p>
        <button class="remove" value=${availableBook.id}>Remove</button>
        </div>`;

      const deleteBtn = document.querySelectorAll('.remove');
      for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteBook);
      };
    });
  };

  const clear = () => {
    title.value = '';
    author.value = '';
  };

  const addBook = (e) => {
  e.preventDefault();
  const addedBook = {
    title: title.value,
    author: author.value,
    id: availableBooks.length,
  };

  availableBooks.push(addedBook);
  clear();
  saveToLocalStorage(availableBooks);
  displayItem();
};

const deleteBook = (e) => {
  const val = e.target.value;
  const filterBooks = availableBooks.filter(function (availableBook) {
    return availableBook.id != val;
  });
  saveToLocalStorage(filterBooks);
  displayItem();
};

addBtn.addEventListener('click', addBook);

document.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line
  displayItem();
});