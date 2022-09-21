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

  getFromLocalStorage = () => {
    this.availableBooks = JSON.parse(localStorage.getItem('availableBooks')) ?? [];
  };
  
  displayItem = () => {
    getFromLocalStorage();
    displaySection.innerHTML = '';
    this.availableBooks.forEach((availableBook, i) => {
      displaySection.innerHTML += `<div class="availableBook">
<<<<<<< HEAD
        <p>${availableBook.title}</p>
        <p>${availableBook.author}</p>
        <button class="remove" id=${i}>Remove</button></div>`;
         });
=======
        <p>"${availableBook.title}" by ${availableBook.author}</p>
        <button class="remove" value=${availableBook.id}>Remove</button>
        </div>`;

      const deleteBtn = document.querySelectorAll('.remove');
      for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteBook);
      };
    });
>>>>>>> 99a829321d660549c27652f8d8bd0d32cd746f7e
  };

  addBook = (e) => {
  e.preventDefault();
  const addedBook = {
    title: title.value,
    author: author.value,
    id: availableBooks.length,
  };

  this.availableBooks.push(addedBook);
  this.clear();
  this.saveToLocalStorage(this.availableBooks);
  this.displayItem();
};

<<<<<<< HEAD
deleteBook = (i) => {
const filterBooks = this.availableBooks.filter((availableBook) => availableBook !== this.availableBooks[i]);
this.saveToLocalStorage(filterBooks);
this.displayItem();
=======
const deleteBook = (e) => {
  const val = e.target.value;
  const filterBooks = availableBooks.filter(function (availableBook) {
    return availableBook.id != val;
  });
  saveToLocalStorage(filterBooks);
  displayItem();
>>>>>>> 99a829321d660549c27652f8d8bd0d32cd746f7e
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
