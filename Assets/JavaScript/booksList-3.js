class AwsomeBooks {
    static booksListArr;
    id = 0
    constructor(booksListArr) {
      this.booksListArr = booksListArr;
      this.newBook = document.querySelector('.booksList');
      this.addButton = document.querySelector('#add-button');
      this.addButton.addEventListener('click', () => this.addBook());
      this.removeButton.addEventListener('click', () => this.removeBook());
    }

    displayBooks() {
      this.newBook.innerHTML = this.booksListArr
        .map(
          (x) => `
          <section class="booksList">
          <p>${x.title}</p>
          <p>${x.author}</p>
          <input type = "button" id = "${x.id}" value="remove">
        <!-- <button onclick="removeBook('${x.title}', '${x.author}')">remove</button> -->
          <hr></hr>
          <section>
          `,
        )
        .join('');
    }

    addBook() {
      const bookTitle = document.querySelector('.title').value;
      const bookAuthor = document.querySelector('.author').value;

      console.log(this.booksListArr);
      this.id += 1;
      this.booksListArr.push({ id: this.id, title: bookTitle, author: bookAuthor });
      const str = JSON.stringify(this.booksListArr);
      localStorage.setItem('bookListStorage', str);
      this.displayBooks();
    }

    removeBook() {
      let removed = null;
      this.booksListArr = this.booksListArr.filter((x) => {
        if (x.id === title && !removed) {
          removed = !null;
          return null;
        }
        return !null;
      });
    }
}

const myBook = new AwsomeBooks([{ id:0 ,author: 'author-1', title: 'title-1' }]);
myBook.displayBooks();