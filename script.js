const container = document.querySelector('#container')
const editBtn = document.querySelector('#editBtn')

const r = document.querySelector(':root')
const START_NUMBER_OF_SQUARES = getComputedStyle(r).getPropertyValue('--n')

createGrid(START_NUMBER_OF_SQUARES)

console.log(1 / parseInt(getComputedStyle(r).getPropertyValue('--n')))

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
    e.target.style = 'background-color: black'
})

editBtn.addEventListener('click', (e) => {
    let n = prompt("Enter the number of squares (per side)\nMaximum: 100")
    while(n > 100) {
        alert("Maximum is 100!")
        n = prompt("Enter the number of squares (per side)\nMaximum: 100")
    }
    createGrid(n)
    console.log(1 / parseInt(getComputedStyle(r).getPropertyValue('--n')))

})