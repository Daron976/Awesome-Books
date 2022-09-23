// save to localStorage
export const  saveToLocalStorage = (addedBooks) => localStorage.setItem('availableBooks', JSON.stringify(addedBooks));
  
// get from localStorage
export const  getFromLocalStorage = () => JSON.parse(localStorage.getItem('availableBooks')) ?? [];