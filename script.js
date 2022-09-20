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
        <p>${availableBook.author}</p></div>`;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove');
      displaySection.appendChild(removeBtn);

      const deleteBtn = document.querySelector('.remove');
      deleteBtn.addEventListener('click', () => {
        deleteBook(i);
      });
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
  };

  availableBooks.push(addedBook);
  clear();
  saveToLocalStorage(availableBooks);
  displayItem();
};

const deleteBook = (i) => {
const filterBooks = availableBooks.filter((availableBook) => availableBook !== availableBooks[i]);
saveToLocalStorage(filterBooks);
displayItem();
};

addBtn.addEventListener('click', addBook);

document.addEventListener('DOMContentLoaded', () => {
// eslint-disable-next-line
  displayItem();
});