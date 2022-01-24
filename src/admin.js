import BookList from './book.js';

const addButton = document.querySelector('#add-button');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const formMessage = document.querySelector('.form-message');
const bookList = new BookList();

const validateInputForm = () => {
  formMessage.classList.remove('error-message');

  if (bookTitle.value === '') {
    bookTitle.focus();
    formMessage.textContent = 'Title field is required.';
    formMessage.classList.add('error-message');
    return false;
  }
  if (bookAuthor.value === '') {
    bookAuthor.focus();
    formMessage.textContent = 'Author field is required.';
    formMessage.classList.add('error-message');
    return false;
  }
  if (bookList.hasBook(bookTitle.value)) {
    formMessage.textContent = 'This book is already registered.';
    formMessage.classList.add('error-message');
    return false;
  }
  return true;
};

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateInputForm()) {
    bookList.addBook(bookTitle.value, bookAuthor.value);
    bookList.renderBooks();
    bookTitle.value = '';
    bookAuthor.value = '';
    formMessage.textContent = 'Book added successfully';
  }
  formMessage.classList.add('visible');
  setTimeout(() => {
    formMessage.classList.remove('visible');
  }, 5000);
});

export { bookList, validateInputForm };

// window.addEventListener('load', () => {
//   bookList.loadLocalStorage();
//   bookList.renderBooks();
// });
