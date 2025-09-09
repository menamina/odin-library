class Book {
    constructor(title, author, pageNum){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.id = crypto.randomUUID();
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
}

const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pageNum = document.querySelector("#pageNum").value;

const newBook = new Book(title, author, pageNum);

const myLibrary = new Library();
myLibrary.addBook(newBook);

console.log(myLibrary.books);