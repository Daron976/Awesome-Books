const availableBooks = [
  {
    id: 0,
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    id: 1,
    title: 'The Mark',
    author: 'Edyth Bulbring'
  }
];

function book(id, title, author) {
    this.id = id,
    this.title = title,
    this.author = author
}

function addBook(id, title, author) {
  let addedBook = new book(id, title, author);
  availableBooks.push(addedBook);
}



function removeBook(index) {
  availableBooks.splice(index, 1);
}

let mapLoop = availableBooks.map((i) => {
  return `
  <article class="book-item">
      <p class="title">${i.title}</p>
      <p class="author">${i.author}</p>
      <button type="button" class="remove-btn">Remove</button>
  </article>`
})

let htmlDisplay = 
`
  <div class="books">
  ${mapLoop}
  </div>
  <hr>
  <div class="add-books">
      <input type="text" id="title" name="title" placeholder="Book Title" required>
      <input type="text" id="author" name="author" placeholder="Author" required>
      <button type="button" class="add-btn">Add</button>
  </div>
`;

const displaySection = document.querySelector('.initial-header');
displaySection.insertAdjacentHTML('afterend', htmlDisplay);

const addBtn = document.querySelector('.add-btn');
const titleText = document.getElementById('title');
const authorText = document.getElementById('author');


addBtn.addEventListener('click', addBook((availableBooks.length), titleText.value, authorText.value));