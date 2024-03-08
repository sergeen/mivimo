document.addEventListener('DOMContentLoaded', function () {
  const size = document.querySelector('input')
  const htmlE = document.querySelector('html')

  size.addEventListener('input', () => htmlE.style.fontWeight = `${size.value}`)
})