/* eslint-disable */ 
const displaySection = document.querySelector('.bookstore');
const author = document.getElementById('author');
const title = document.getElementById('title');
const addBtn = document.getElementById('addBtn');

class Book {
  availableBooks;

  constructor() {
    this.getFromLocalStorage();
  }
  
  // save to localStorage

  saveToLocalStorage = (addedBooks) => localStorage.setItem('availableBooks', JSON.stringify(addedBooks));
  // get from localStorage

  getFromLocalStorage = () => {this.availableBooks = JSON.parse(localStorage.getItem('availableBooks')) ?? [];
  };

  displayItem = () => {
    this.getFromLocalStorage();
    displaySection.innerHTML = '';
    this.availableBooks.forEach((availableBook, i) => {
      displaySection.innerHTML += `<div class="availableBook">
        <p>"${availableBook.title}" by ${availableBook.author}</p>
        <button class="remove" id=${i}>Remove</button>
        </div>`;

      // const deleteBtn = document.querySelectorAll('.remove');
      // for (let i = 0; i < deleteBtn.length; i++) {
      //   deleteBtn[i].addEventListener('click', this.deleteBook);
      // };
    });
  };

  addBook = (e) => {
  e.preventDefault();
  const addedBook = {
    title: title.value,
    author: author.value,
    // id: availableBooks.length,
  };

  this.availableBooks.push(addedBook);
  this.clear();
  this.saveToLocalStorage(this.availableBooks);
  this.displayItem();
};

  deleteBook = (i) => {
  // const val = e.target.value;
  const filterBooks = this.availableBooks.filter((availableBook) => availableBook !== this.availableBooks[i]);
  this.saveToLocalStorage(filterBooks);
  this.displayItem();
};

clear = () => {
    title.value = '';
    author.value = '';
  };
}

const availableBook = new Book();

document.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line
  availableBook.displayItem();
});

addBtn.addEventListener('click', availableBook.addBook);

displaySection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetId = +e.target.getAttribute('id');
    availableBook.deleteBook(targetId);
  }
});