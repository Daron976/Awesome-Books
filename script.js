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

const mainContent = document.getElementById('main');
const addition = document.getElementById('add-new-books');
const contact = document.getElementById('contact');
const mainPage = document.getElementsByClassName('main-page');
const additionPage = document.getElementsByClassName('add-books-page');
const contactPage = document.getElementsByClassName('contact-page');

const list = () => {
  mainContent.style.display = 'flex';
  addition.style.display = 'none';
  contact.style.display= 'none';
}

const addNew = () => {
  mainContent.style.display = 'none';
  addition.style.display = 'flex';
  contact.style.display= 'none';
}

const contactUs = () => {
  mainContent.style.display = 'none';
  addition.style.display = 'none';
  contact.style.display= 'flex';
}

for (let i = 0; i < 2; i++) {
  mainPage[i].addEventListener('click', list);
  additionPage[i].addEventListener('click', addNew);
  contactPage[i].addEventListener('click', contactUs);
}