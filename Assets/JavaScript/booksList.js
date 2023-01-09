let booksListArr = [];

const newBook = document.querySelector('.booksList');

function displayBooks() {
  newBook.innerHTML = booksListArr
    .map(
      (x) => `
    <section class="booksList">
    <p>${x.title}</p>
    <p>${x.author}</p>
    <button onclick="removeBook('${x.title}', '${x.author}')">remove</button>
    <hr></hr>
    <section>
    `,
    )
    .join('');
}
// eslint-disable-next-line no-unused-vars
function addBook() {
  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  booksListArr.push({ title: bookTitle, author: bookAuthor });
  displayBooks();
}

// eslint-disable-next-line no-unused-vars
function removeBook(title, author) {
  booksListArr = booksListArr.filter(
    (x) => x.title !== title || x.author !== author,
  );
  displayBooks();
}
