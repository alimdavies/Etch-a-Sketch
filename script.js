const container = document.querySelector('#container')
const editBtn = document.querySelector('#editBtn')
const cleanBtn = document.querySelector('#cleanBtn')

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

function cleanGrid() {
    const childrenLength = container.children.length
    for(let i = 0; i < childrenLength; i++) {
        container.children[i].style.backgroundColor = 'rgba(0, 0, 0, 0)'
        container.children[i].style.opacity = '0'
    }
}

function editGrid() {
    const currentNum = getComputedStyle(r).getPropertyValue('--n')
    let input = prompt("Enter the number of squares (per side)\nMaximum: 100")
    let n = input === null ? currentNum : input
    while(n > 100) {
        alert("Maximum is 100!")
        input = prompt("Enter the number of squares (per side)\nMaximum: 100")
        n = input === null ? currentNum : input
    }

    if(n === currentNum) return
    else createGrid(n)
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

editBtn.addEventListener('click', () => editGrid())

cleanBtn.addEventListener('click', () => cleanGrid())