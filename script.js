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
      document.getElementById('basicsHTML').innerHTML = `
        <ul>
          <li>Name <span class = "basicText">${result.body.name}</span></li>
          <li>GitHub URL <span class = "basicText"><a href = "${result.body.html_url}">emachaffie</a></span></li>
          <li>Company <span class = "basicText">${result.body.company}</span></li>
          <li>Website <span class = "basicText"><a href = "${result.body.blog}">bowmeowlogy.wordpress.com</a></span></li>
        </ul>`
      document.getElementById('storyHTML').innerHTML = `
        <p>${result.body.bio}</p>
      </div>`
      document.getElementById('gravatar').innerHTML = `
        <img src="${result.body.avatar_url}" alt="github avatar">
      </div>`
    })
}

function onClick () {
  var x = document.getElementById('catVid')
  x.style.display = 'block'
}

window.addEventListener('load', onLoad)
document.getElementById('eggPic').addEventListener('click', onClick)
