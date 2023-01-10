class AwsomeBooks {
  booksListArr;

  constructor(booksListArr) {
    this.booksListArr = ['test-array'];
    this.booksListArr.push({ title: 2, author: 3 });
    console.log('array', this.booksListArr);
    this.newBook = document.querySelector('.booksList');
    this.addButton = document.querySelector('#add-button');
    this.addButton.addEventListener('click', () => this.addBook());
  }

  display() {
    this.newBook.innerHTML = this.booksListArr
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

  addBook() {
    console.log('Here ok');
    const bookTitle = document.querySelector('.title').value;
    const bookAuthor = document.querySelector('.author').value;
    this.booksListArr.push({ title: bookTitle, author: bookAuthor });
    const str = JSON.stringify(this.booksListArr);
    localStorage.setItem('bookListStorage', str);
    this.display();
  }
}
const myBook = new AwsomeBooks();

window.addEventListener('load', () => {
  myBook.display();
});

// function removeBook(title) {
//   let removed = null;
//   booksListArr = booksListArr.filter((x) => {
//     if (x.title === title && !removed) {
//       removed = !null;
//       return null;
//     }
//     return !null;
//   });
//   const str = JSON.stringify(booksListArr);
//   localStorage.setItem('bookListStorage', str);
//   displayBooks();
// }