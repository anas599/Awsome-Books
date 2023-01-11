let booksListArr = [];

const newBook = document.querySelector('.booksList');
const retData = JSON.parse(localStorage.bookListStorage);
booksListArr = retData;

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
window.addEventListener('load', () => {
  displayBooks();
});
// eslint-disable-next-line no-unused-vars
function addBook() {
  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  booksListArr.push({ title: bookTitle, author: bookAuthor });
  const str = JSON.stringify(booksListArr);
  localStorage.setItem('bookListStorage', str);
  displayBooks();
}

// eslint-disable-next-line no-unused-vars
function removeBook(title) {
  let removed = null;
  booksListArr = booksListArr.filter((x) => {
    if (x.title === title && !removed) {
      removed = !null;
      return null;
    }
    return !null;
  });
  const str = JSON.stringify(booksListArr);
  localStorage.setItem('bookListStorage', str);
  displayBooks();
}