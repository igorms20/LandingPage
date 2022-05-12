
const header = document.querySelector('header')
const body = document.querySelector('body')
const logoText = document.querySelector('.logo p')
const themeButton = document.querySelector('#themeButton')

const habContainer = document.querySelector('#habContainer')

function changeTheme() {
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    logoText.classList.toggle('dark')
    themeButton.classList.toggle('dark')
}

document.addEventListener('scroll', () => {
    habContainer.classList.add('slide-animation')
})