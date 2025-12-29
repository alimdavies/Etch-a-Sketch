const container = document.querySelector('#container')
const editBtn = document.querySelector('#editBtn')

const r = document.querySelector(':root')
const START_NUMBER_OF_SQUARES = getComputedStyle(r).getPropertyValue('--n')

createGrid(START_NUMBER_OF_SQUARES)

function createGrid(n) {
    const childrenLength = container.children.length
    for(let i = 0; i < childrenLength; i++) {
        container.removeChild(container.lastChild)
    }

    document.documentElement.setAttribute('style', `--n: ${n}`)

    for(let i = 0; i < n*n; i++) {
        const square = document.createElement('div')
        square.setAttribute('class', 'square')
        container.appendChild(square)
    }
}

container.addEventListener('mouseover', (e) => {
    if(!e.target.classList.contains('square')) return

    const bg = getComputedStyle(e.target).backgroundColor

    if(bg == 'rgba(0, 0, 0, 0)') {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        e.target.style.opacity = '0.1'
    } else {
        const currentOpacity = parseFloat(getComputedStyle(e.target).opacity) || 0
        const nextOpacity = Math.min(1, currentOpacity + 0.1)
        e.target.style.opacity = `${nextOpacity}`
    }
})

editBtn.addEventListener('click', (e) => {
    let n = prompt("Enter the number of squares (per side)\nMaximum: 100")
    while(n > 100) {
        alert("Maximum is 100!")
        n = prompt("Enter the number of squares (per side)\nMaximum: 100")
    }

    createGrid(n)
})