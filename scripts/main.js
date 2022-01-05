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
    this.saveLocalStorage();
  };

  removeBook = (book) => {
    this.books = this.books.filter((b) => b.id !== book.id);
    this.saveLocalStorage();
  };

  renderBooks = () => {
    const booksList = document.querySelector('.books-list');
    booksList.innerText = '';
    this.books.forEach((book) => {
      const div = document.createElement('div');
      div.classList.add('col-sm-12', 'col-md-4', 'mb-4');
      const divCard = document.createElement('div');
      divCard.classList.add('card', 'bg-card');
      const divCardBody = document.createElement('div');
      divCardBody.classList.add('card-body');
      const h2 = document.createElement('h2');
      h2.classList.add('card-title');
      h2.innerText = `${book.title}`;
      const h3 = document.createElement('h3');
      h3.classList.add('card-subtitle', 'mb-2', 'text-muted');
      h3.innerText = `${book.author}`;
      const anchor = document.createElement('a');
      anchor.classList.add('btn', 'btn-danger');
      anchor.innerText = 'Remove';
      anchor.addEventListener('click', () => {
        this.removeBook(book);
        this.renderBooks();
      });
      divCardBody.appendChild(h2);
      divCardBody.appendChild(h3);
      divCardBody.appendChild(anchor);
      divCard.appendChild(divCardBody);
      div.appendChild(divCard);
      booksList.appendChild(div);
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
  bookTitle.value = '';
  bookAuthor.value = '';
});

window.addEventListener('load', () => {
  bookList.loadLocalStorage();
  bookList.renderBooks();
});
