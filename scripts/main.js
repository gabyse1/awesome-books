let books = [
  {
    id: 1,
    title: "Book #1",
    author: "Author #1"
  },
  {
    id: 2,
    title: "Book #2",
    author: "Author #2"
  }
]

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

renderBooks(books);
