const bodyEl = document.getElementsByTagName('body')[0]
const searchFormEl = document.getElementById('search-form')
const searchInputEl = document.getElementById('search-input')
const searchSubmitEl = document.getElementById('search-submit')
const mobileToggleEl = document.getElementById('mobile')
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

const setCookie = (name, val) => {
  if (navigator.cookieEnabled) {
    const cookieName = encodeURIComponent(name)
    const cookieVal = encodeURIComponent(val)
    const data = new Date()
    data.setTime(data.getTime() + 365 * 24 * 60 * 60 * 1000)
    const cookieText = `${cookieName}=${cookieVal}; expires=${data.toGMTString()}; path=/`
    document.cookie = cookieText
  } else {
    alert('Aby korzystać z wszystkich funkcji strony, należy włączyć obsługę ciasteczek.')
  }
}

const invertColors = (toTheme = null) => {
  let fromTheme = null
  if (toTheme) {
    fromTheme = toTheme === 'light' ? 'dark' : 'light'
  }

  const theme = fromTheme || (bodyEl.classList.contains('light') ? 'light' : 'dark')
  if (theme === 'light') {
    bodyEl.classList.remove('light')
    bodyEl.classList.add('dark')
    invertColorsLabelEl.innerText = 'Tryb jasny'
    invertColorsIconEl.classList.remove('icofont-night')
    invertColorsIconEl.classList.add('icofont-sun')
    setCookie('theme', 'dark')
  } else {
    bodyEl.classList.remove('dark')
    bodyEl.classList.add('light')
    invertColorsLabelEl.innerText = 'Tryb ciemny'
    invertColorsIconEl.classList.remove('icofont-sun')
    invertColorsIconEl.classList.add('icofont-night')
    setCookie('theme', 'light')
  }

  if (disqusThread) {
    DISQUS.reset({ reload: true })
  }
}

const images = document.getElementsByTagName('img')

for (let i = 0; i < images.length; i++) {
  const img = images[i]
  const isLoaded = img.complete && img.naturalHeight !== 0
  if (!isLoaded) {
    img.addEventListener('load', function () {
      this.classList.add('show')
    })
  } else {
    img.classList.add('instant')
    img.classList.add('show')
  }
}
