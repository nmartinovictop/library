let myLibrary = [];

function Book(title, author,pages,isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead
}

function addBookToLibrary(title,author,pages,isRead) {
  myLibrary.push(new Book(title,author,pages,isRead))
}


const form = document.querySelector('.addBook')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')


function runner() {
    myLibrary.push(new Book(title.value,author.value,pages.value,isRead.value));
    
    form.reset()
    modal.style.display = "none"
}


form.addEventListener('submit',runner)



let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}