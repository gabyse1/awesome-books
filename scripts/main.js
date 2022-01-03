let books = [];

const renderBook = (book) => {
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
  article.appendChild(h2);
  article.appendChild(h3);
  article.appendChild(button);
  return article;
}

const renderBooks = (books) => {
  const booksList = document.querySelector('.books-list');
  booksList.innerText = '';
  books.forEach(book => {
    booksList.appendChild(renderBook(book));
  });
}


const bookForm = document.querySelector('#books-form');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');

const addBook = () => {
  let id;
  if (books.length === 0)
    id = 1;
  else
    id = books[books.length - 1].id + 1;

  books.push({ id: id, title: bookTitle.value, author: bookAuthor.value });
  renderBooks(books);
  bookTitle.value = '';
  bookAuthor.value = '';
}

const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addBook();
});


