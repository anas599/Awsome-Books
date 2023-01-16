export default class AwsomeBooks {
  booksListArr;

  constructor(booksListArr) {
    this.booksListArr = booksListArr;
    this.id = booksListArr.length - 1;
    this.newBook = document.querySelector('.booksList');
    this.displayBooks();
    this.addButton = document.querySelector('#add-button');
    this.addButton.addEventListener('click', () => this.addBook());

    this.removeButtons = document.querySelectorAll('.remove-button');
    for (let j = 0; j < this.removeButtons.length; j += 1) {
      this.removeButtons[j].addEventListener('click', () => this.removeBook(this.removeButtons[j].id));
    }
  }

  changeColor() {
    for (let i = 0; i < this.booksListArr.length; i += 1) {
      const bgColor = document.querySelector(
        `.item-${this.booksListArr[i].id}`,
      );

      if (i % 2 === 0) {
        bgColor.style.backgroundColor = 'gray';
      } else {
        bgColor.style.backgroundColor = 'white';
      }
    }
  }

  displayBooks() {
    this.newBook.innerHTML = this.booksListArr
      .map(
        (x) => `
            <div class="item-${x.id}">
            <p>${x.title} by: ${x.author}</p>
            <input type = "button" class = "remove-button" id='button-item-${x.id}' value="remove">        
            </div>
            `,
      )
      .join('');
    this.changeColor();
  }

  addBook() {
    const bookTitle = document.querySelector('.title').value;
    const bookAuthor = document.querySelector('.author').value;

    this.id += 1;
    this.booksListArr.push({
      id: this.id,
      title: bookTitle,
      author: bookAuthor,
    });

    const newItem = document.createElement('div');
    newItem.className = `item-${this.id}`;
    newItem.innerHTML = `

      <p>Title: ${bookTitle} by:${bookAuthor}</p>      
      <input type = "button" class = "remove-button" id='button-item-${this.id}' value="remove">
      `;
    this.newBook.appendChild(newItem);

    const removeButton = document.querySelector(`
       #button-item-${this.id}`);
    removeButton.addEventListener('click', () => this.removeBook(removeButton.id));

    const str = JSON.stringify(this.booksListArr);
    localStorage.setItem('bookListStorage', str);
    this.changeColor();
  }

  removeBook(itemId) {
    const id = itemId.split('-')[2];
    const result = this.booksListArr.filter((item) => item.id !== Number(id));
    this.booksListArr = result;
    const str = JSON.stringify(this.booksListArr);
    localStorage.setItem('bookListStorage', str);

    const itemToRemove = document.querySelector(`
          .item-${id}`);
    this.newBook.removeChild(itemToRemove);
    this.changeColor();
  }
}
