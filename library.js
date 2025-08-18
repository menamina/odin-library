let library = [];

function book(title, author, pageNum){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pageNum){
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

submitBook.addEventListener('click', () => {
    addBookToLibrary();
    displayBook() = library.forEach((book) => 
    let display = document.querySelector(".display");
    display.insertCell(0)
    )

});
