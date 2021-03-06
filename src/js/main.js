const bodyEl = document.getElementsByTagName('body')
const searchFormEl = document.getElementById('search-form')
const searchInputEl = document.getElementById('search-input')

const toggleNav = () => {
  bodyEl[0].classList.toggle('expand-nav')
}

const showSearch = () => {
  searchFormEl.classList.add('show')
  searchInputEl.focus()
}

const closeSearch = () => {
  searchFormEl.classList.remove('show')
}
