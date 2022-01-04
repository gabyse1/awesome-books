class BookList {
  constructor() {
    this.books = [];
  }

  saveLocalStorage = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  loadLocalStorage = () => {
    const localBooks = JSON.parse(localStorage.getItem('books'));
    if (localBooks) { this.books = localBooks; }
  };

  addBook = (bookTitle1, bookAuthor1) => {
    const id = this.books.length === 0 ? 1 : this.books[this.books.length - 1].id + 1;
    this.books.push({ id, title: bookTitle1, author: bookAuthor1 });
    bookTitle.value = '';
    bookAuthor.value = '';
    saveLocalStorage();
  };

  removeBook = (book) => {
    this.books = this.books.filter((b) => b.id !== book.id);
    saveLocalStorage();
  };

  renderBooks = () => {
    const booksList = document.querySelector('.books-list');
    booksList.innerText = '';
    this.books.forEach((book) => {
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
}

const addButton = document.querySelector('#add-button');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookList = new BookList();

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  bookList.addBook(bookTitle.value, bookAuthor.value);
  bookList.renderBooks();
});

window.addEventListener('load', () => {
  bookList.loadLocalStorage();
  bookList.renderBooks();
});
