const bodyEl = document.getElementsByTagName('body')[0]
const searchFormEl = document.getElementById('search-form')
const searchInputEl = document.getElementById('search-input')
const searchSubmitEl = document.getElementById('search-submit')
const invertColorsLabelEl = document.getElementById('invert-colors-label')
const invertColorsIconEl = document.getElementById('invert-colors-icon')
const disqusThread = document.getElementById('disqus_thread')

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
  if (
    e.relatedTarget &&
    (e.relatedTarget.classList.contains('search-button') ||
      e.relatedTarget.classList.contains('search-input'))
  )
    return
  searchFormEl.classList.remove('show')
}

const invertColors = (toTheme = null) => {
  let fromTheme = null
  if (toTheme) {
    fromTheme = toTheme === 'light' ? 'dark' : 'light'
  }

  const theme = fromTheme || bodyEl.getAttribute('theme')
  if (theme === 'light') {
    bodyEl.setAttribute('theme', 'dark')
    invertColorsLabelEl.innerText = 'Tryb jasny'
    invertColorsIconEl.classList.remove('icofont-night')
    invertColorsIconEl.classList.add('icofont-sun')
  } else {
    bodyEl.setAttribute('theme', 'light')
    invertColorsLabelEl.innerText = 'Tryb ciemny'
    invertColorsIconEl.classList.remove('icofont-sun')
    invertColorsIconEl.classList.add('icofont-night')
  }

  if (disqusThread) {
    DISQUS.reset({ reload: true })
  }
}
