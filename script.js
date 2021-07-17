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
const shelf = document.querySelector('.shelf')

function htmlBook() {

return `<h3 class="book-title"><span class="close-btn-title">×</span></h3><p class="book-author"></p><p class='book-pages'></p><p class='book-isRead'>Read?</p><div class="toggle"><label class="switch">
    <input type="checkbox" class='toggle-read'>
    <span class="slider"></span>
  </label>`

}

function runner() {
    myLibrary.push(new Book(title.value,author.value,pages.value,isRead.value));
    
    form.reset()
    modal.style.display = "none"
    addBookToShelf()
}



// Update Toggle
const slider = document.querySelector('.slider')
const toggle = document.querySelector('.toggle')
const label = document.querySelector('.switch')


const toggleRead = document.querySelector('.toggle-read')

toggleRead.addEventListener('click', () => console.log('toggleRead'))
slider.addEventListener('click',() => console.log('slider'))
toggle.addEventListener('click',() => console.log('toggle'))
label.addEventListener('click', (e) => console.log('label'))
const book = document.querySelector('.book')
book.addEventListener('click',() =>console.log('book'))

// toggleRead.forEach(book => {
//     book.addEventListener('click',() => console.log(this))
// })


form.addEventListener('submit',runner)





function addBookToShelf() { 
    const div = document.createElement('div')
    div.classList.add('book')
    div.innerHTML = htmlBook()
    div.firstChild.textContent = myLibrary[myLibrary.length-1].title + div.firstChild.textContent
    div.children[1].textContent = myLibrary[myLibrary.length-1].author
    div.children[2].textContent = myLibrary[myLibrary.length-1].pages

    shelf.appendChild(div)

    const toggleRead = div.querySelector('.toggle-read')
    toggleRead.addEventListener('click',() => console.log(this))

}

function addAllBooksToShelf() {myLibrary.forEach(bookObj => {
    const div = document.createElement('div')
    div.classList.add('book')
    shelf.appendChild(div)
})}

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
    console.log(this)
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