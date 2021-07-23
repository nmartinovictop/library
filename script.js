let myLibrary = [];

const COLORS = ['#cbc0d3','#EFD3D7','#FEEAFA','#32CBFF']





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
const shelf = document.querySelector('.shelf')

function htmlBook() {

return `<h3 class="book-title"><span class="close-btn-title">    ×</span></h3><p class="book-author"></p><p class='book-pages'></p><p class='book-isRead'>Read?</p><div class="toggle"><label class="switch">
    <input type="checkbox" class='toggle-read'>
    <span class="slider"></span>
  </label>`

}

function runner() {
  const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const isRead = document.querySelector('input[name="isRead"]:checked').value === 'true';

    myLibrary.push(new Book(title.value,author.value,pages.value,isRead));
    
    form.reset()
    modal.style.display = "none"
    addBookToShelf()
}



// Update Toggle
// const slider = document.querySelector('.slider')
// const toggle = document.querySelector('.toggle')
// const label = document.querySelector('.switch')


// const toggleRead = document.querySelector('.toggle-read')

// toggleRead.addEventListener('click', () => console.log('toggleRead'))
// slider.addEventListener('click',() => console.log('slider'))
// toggle.addEventListener('click',() => console.log('toggle'))
// label.addEventListener('click', (e) => console.log('label'))
// const book = document.querySelector('.book')
// book.addEventListener('click',() =>console.log('book'))


if (localStorage.length > 0 ) {
  myLibrary = JSON.parse(localStorage['library'])
  addAllBooksToShelf()
}


form.addEventListener('submit',runner)



function addBookToShelf() { 
    const div = document.createElement('div')
    div.classList.add('book')
    div.style.backgroundColor = COLORS[myLibrary.length % 4]
    div.innerHTML = htmlBook()
    // div.firstChild.innerHTML = myLibrary[myLibrary.length-1].title + div.firstChild.innerHTML
    div.firstChild.insertAdjacentHTML('afterbegin',myLibrary[myLibrary.length-1].title)
    div.children[1].textContent = myLibrary[myLibrary.length-1].author
    div.children[2].textContent = myLibrary[myLibrary.length-1].pages

    localStorage.setItem('library',JSON.stringify(myLibrary))
    const toggleRead = div.querySelector('.toggle-read')
    
    if (myLibrary[myLibrary.length-1].isRead) {
    toggleRead.checked = true
    }
    shelf.appendChild(div)

    toggleRead.addEventListener('click',changeReadStatus)

    const deleteBook = div.querySelector('.close-btn-title')
    deleteBook.addEventListener('click',deleteBookFunc)

}

function deleteBookFunc() {
  const parent = this.closest('.book')
  const indexToDelete = (myLibrary.findIndex( (book) => book['title'] == parent.firstChild.firstChild.textContent))
  myLibrary.splice(indexToDelete,1)
  localStorage.setItem('library',JSON.stringify(myLibrary))

  shelf.removeChild(parent)
}


function changeReadStatus() {
  const parent = this.closest('.book')
  if (this.checked === true) {
  myLibrary[(myLibrary.findIndex( (book) => book['title'] == parent.firstChild.firstChild.textContent))]['isRead'] = true
  } else {
    myLibrary[(myLibrary.findIndex( (book) => book['title'] == parent.firstChild.firstChild.textContent))]['isRead'] = false
  }
} 


function addAllBooksToShelf() {myLibrary.forEach(bookObj => {

    const div = document.createElement('div')
    div.classList.add('book')
    div.style.backgroundColor = COLORS[(myLibrary.findIndex( tbook => tbook == bookObj) + 1) % 4]
    div.innerHTML = htmlBook()
    // div.firstChild.innerHTML = myLibrary[myLibrary.length-1].title + div.firstChild.innerHTML
    div.firstChild.insertAdjacentHTML('afterbegin',bookObj.title)
    div.children[1].textContent = bookObj.author
    div.children[2].textContent = bookObj.pages
    const toggleRead = div.querySelector('.toggle-read')

    if (bookObj.isRead) {
      toggleRead.checked = true
      }

      shelf.appendChild(div)

      toggleRead.addEventListener('click',changeReadStatus)
  
      const deleteBook = div.querySelector('.close-btn-title')
      deleteBook.addEventListener('click',deleteBookFunc)

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