const bodyEl = document.getElementsByTagName('body')[0]
const searchFormEl = document.getElementById('search-form')
const searchInputEl = document.getElementById('search-input')
const searchSubmitEl = document.getElementById('search-submit')
const invertColorsLabelEl = document.getElementById('invert-colors-label')

const toggleNav = () => {
  bodyEl.classList.toggle('expand-nav')
}

const showSearch = () => {
  searchFormEl.classList.add('show')
  searchInputEl.focus()
}

searchInputEl.addEventListener('blur', (e) => closeSearch(e))
searchSubmitEl.addEventListener('blur', (e) => closeSearch(e))
const closeSearch = (e) => {
  const { relatedTarget } = e
  if (
    relatedTarget &&
    (relatedTarget.classList.contains('search-button') ||
      relatedTarget.classList.contains('search-input'))
  )
    return
  searchFormEl.classList.remove('show')
}

const invertColors = () => {
  const theme = bodyEl.getAttribute('theme')
  if (theme === 'light') {
    bodyEl.setAttribute('theme', 'dark')
    invertColorsLabelEl.innerText = 'Tryb jasny'
  } else {
    bodyEl.setAttribute('theme', 'light')
    invertColorsLabelEl.innerText = 'Tryb ciemny'
  }
}
