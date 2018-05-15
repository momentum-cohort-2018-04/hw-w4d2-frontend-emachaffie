import request from 'superagent'

// function onLoad to display _______ 
function onLoad (event) {
  event.preventDefault()
  // make request to github using requestData, then another function to draw HTML
  // more
}

// function to request data from API
function requestData () {
  request.get(`https://api.github.com/users/emachaffie`)
    .then(function (result) {
      console.log(result.body)
      var user = result.body
      document.getElementById('')
      // html result.body
    })
}

// function to output section into appropriate place in HTML

window.addEventListener('load', onLoad)

// function onSubmit (event) {
//   event.preventDefault()
//   console.log('submitted!')
//   const query = document.getElementById('query').value
//   requestData(query)
// }

// function requestData (query) {
//   if (query === '') { return }
//   console.log('query', query)
//   request.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
//     .then(function (result) {
//       console.log('result', result)
//       displayResults(result.body.items)
//     })
// }

// function displayResults (books) {
//   const booksAsHTML = books.map(book => createBookHTML(book))
//   document.getElementById('results').innerHTML = booksAsHTML.join('')
// }

// function createBookHTML (book) {
//   return `
//   <div class="book row">
//     <div class="col">
//       <h2>${book.volumeInfo.title}</h2>
//       <dl>
//         <dt>Author</dt>
//         <dd>${book.volumeInfo.authors.join(', ')}</dd>
//         <dt>Publisher</dt>
//         <dd>${book.volumeInfo.publisher}</dd>
//       </dl>
//     </div>
//     <div class="col">
//       <img src="${book.volumeInfo.imageLinks.smallThumbnail}">
//     </div>
//   </div>
//   <hr />
//   `
// }