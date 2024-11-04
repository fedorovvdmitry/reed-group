window.addEventListener('scroll', function () {
  const header = document.querySelector('header')
  if (window.scrollY > 500) {
    header.classList.add('scrolled') // Добавляем класс при прокрутке более 100px
  } else {
    header.classList.remove('scrolled') // Убираем класс, если прокрутка меньше 100px
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('current-year').textContent = new Date().getFullYear()
})
