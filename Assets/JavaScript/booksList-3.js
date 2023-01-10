class AwsomeBooks {
    static booksListArr;
    constructor(booksListArr) {
        this.booksListArr = booksListArr;                
        this.newBook = document.querySelector('.booksList');           
        this.addButton = document.querySelector('#add-button');
        this.addButton.addEventListener('click',this.addBook);      
      }

      displayBooks() {
        this.newBook.innerHTML = this.booksListArr.map(
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
        const bookTitle = document.querySelector('.title').value;
        const bookAuthor = document.querySelector('.author').value;

        console.log(this.booksListArr);
        this.booksListArr.push({ title: bookTitle, author: bookAuthor });
        
        /* const str = JSON.stringify(this.booksListArr);
        localStorage.setItem('bookListStorage', str); */
        //this.displayBooks();
      }      
      

}

let myBook = new AwsomeBooks([{author: 'author-1',title: 'title-1'}]);
myBook.displayBooks();