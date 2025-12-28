const container = document.querySelector('#container')

for(let i = 0; i < 16; i++) {
    const square = document.createElement('div')
    square.setAttribute('class', 'square')
    container.appendChild(square)
}

container.addEventListener('mouseover', (e) => {
    if(!e.target.classList.contains('square')) return
    e.target.style = 'background-color: black'
})