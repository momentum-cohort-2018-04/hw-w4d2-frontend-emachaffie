import request from 'superagent'

function onLoad (event) {
  event.preventDefault()
  requestData()
}

function requestData () {
  request.get(`https://api.github.com/users/emachaffie`)
    .then(function (result) {
      console.log(result.body)
      document.getElementById('headerName').innerText =
      result.body.name
      document.getElementById('container').innerHTML = `
      <div class = "basics">
        <h2>The Basics</h2>
        <ul>
          <li>Name <span class = "basicText">${result.body.name}</span></li>
          <li>GitHub URL <span class = "basicText"><a href = "${result.body.html_url}">emachaffie</a></span></li>
          <li>Company <span class = "basicText">${result.body.company}</span></li>
          <li>Website <span class = "basicText"><a href = "${result.body.blog}">bowmeowlogy.wordpress.com</a></span></li>
        </ul>
      </div>
      <div class = "story">
        <h2>The Story</h2>
        <p>${result.body.bio}</p>
      </div>
      <div class = "image">
        <img src="${result.body.avatar_url}" alt="github avatar">
      </div>`
    })
}

window.addEventListener('load', onLoad)
