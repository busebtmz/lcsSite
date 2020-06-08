const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#C9EAF3', '#FFCEA2', '#E9E9C0']

body.style.backgroundColor = 'white'
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}