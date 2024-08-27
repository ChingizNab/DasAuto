// Пожалуйста, не меняй код ниже. Он необходим для правильной настройки позиционирования элементов :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

// Функция, которую нужно вызвать при клике на стрелку
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

// Исправь ошибки, допущенные при обработке события
let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// функция для смены темы
function switchTheme() {
   let header = document.querySelector('header')
   header.style.background = 'url(/uploads/2022/11/bg_space.png)'
   header.style.backgroundSize = 'cover'
}
let btn = document.querySelector('.switch-theme-button')
btn.addEventListener('click', switchTheme)


// фУНКЦИЯ ДЛЯ ОБРАБОТКИ 
function make_transparent() {
   send_btn.style.backgroundColor = 'transparent'
}
function make_colorful() {
   send_btn.style.backgroundColor = '#C2AB99'
}
let send_btn = document.querySelector('.submit-btn-send')
send_btn.addEventListener('mouseover', make_transparent)
send_btn.addEventListener('mouseout', make_colorful)

