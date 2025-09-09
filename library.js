let library = [];

function book(title, author, pageNum){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pageNum = document.querySelector("#pageNum").value;

    const newBook = new book(title, author, pageNum);
    library.push(newBook);
}

let addBook = document.querySelector(".openModal");
let closeForm = document.querySelector(".cancel");
let modal = document.querySelector(".modal");
let submitBook = document.querySelector(".submit");

addBook.addEventListener('click', () => {
    modal.showModal();
});

closeForm.addEventListener('click', () => {
    modal.close();
});

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    modal.close();
    displayBooks();
});

function displayBooks() {
    let display = document.querySelector(".display");
    display.innerHTML = "";
    
    library.forEach((book) => {
        let row = display.insertRow();
        row.dataset.id = book.id;

        row.insertCell(0);
        row.insertCell(1).textContent = book.title;
        row.insertCell(2).textContent = book.author;
        row.insertCell(3).textContent = book.pageNum;

        let deleteCell = row.insertCell(4);
        let deleteBook = document.createElement("button");
        deleteBook.textContent = "Remove";
        deleteCell.appendChild(deleteBook);

        
        deleteBook.addEventListener('click', () => {
            library = library.filter((b => b.id != book.id )); 
            displayBooks(); 
        });
    });
}

const form = document.querySelector(".modalForm");
const title = document.querySelector("#title").value;
const author = document.querySelector("#author").value;
const pageNum = document.querySelector("#pageNum").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [title, author, pageNum];

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      allValid = false;
      console.log(`${input.id} is invalid: ${input.validationMessage}`);
    } else {
      console.log(`${input.id} is valid!`);
    }
  });
});