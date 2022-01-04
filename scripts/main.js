let books = [];
const addButton = document.querySelector('#add-button');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

const saveLocalStorage = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const loadLocalStorage = () => {
  const localBooks = JSON.parse(localStorage.getItem('books'));
  if (localBooks) { books = localBooks; }
};

const addBook = (bookTitle1, bookAuthor1) => {
  const id = books.length === 0 ? 1 : books[books.length - 1].id + 1;
  books.push({ id, title: bookTitle1, author: bookAuthor1 });
  bookTitle.value = '';
  bookAuthor.value = '';
  saveLocalStorage();
};

const removeBook = (book) => {
  books = books.filter((b) => b.id !== book.id);
  saveLocalStorage();
};

const renderBooks = () => {
  const booksList = document.querySelector('.books-list');
  booksList.innerText = '';
  books.forEach((book) => {
    const article = document.createElement('article');
    article.classList.add('book-article');
    const h2 = document.createElement('h2');
    h2.classList.add('b-title');
    h2.innerText = book.title;
    const h3 = document.createElement('h3');
    h3.classList.add('b-author');
    h3.innerText = book.author;
    const button = document.createElement('button');
    button.classList.add('remove-button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => {
      removeBook(book);
      renderBooks();
    });
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(button);
    booksList.appendChild(article);
  });
};

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);
  renderBooks();
});

window.addEventListener('load', () => {
  loadLocalStorage();
  renderBooks();
});
