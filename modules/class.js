/* eslint-disable */ 
import { title, author } from './navigation.js';
import { displayItem } from './display.js';
import { saveToLocalStorage, getFromLocalStorage } from './storage.js';

export default class Book {
  availableBooks;

  constructor() {
    this.availableBooks = getFromLocalStorage();
  }
  
  addBook = (e) => {
  e.preventDefault();
  const addedBook = {
    title: title.value,
    author: author.value,
  };

  this.availableBooks.push(addedBook);
  this.clear();
  saveToLocalStorage(this.availableBooks);
  displayItem();
};

  deleteBook = (i) => {
  this.books = getFromLocalStorage();
  const filterBooks = this.availableBooks.filter((availableBook) => availableBook !== this.availableBooks[i]);
  saveToLocalStorage(filterBooks);
  displayItem();
};

clear = () => {
    title.value = '';
    author.value = '';
  };
}