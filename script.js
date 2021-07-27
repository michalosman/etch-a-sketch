const gridContainer = document.getElementById('grid')
window.addEventListener('load', setDefaultGrid)

const sizePicker = document.getElementById('sizePicker')
sizePicker.addEventListener('change', (e) => rangeSlide(e.target.value))
sizePicker.addEventListener('mousemove', (e) => rangeSlide(e.target.value))

function rangeSlide(value) {
  document.getElementById('rangeValue').innerHTML = `Size: ${value} x ${value}`
}

function setDefaultGrid() {
  setGridSize(16)
  fillGrid(16)
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.addEventListener('mouseover', changeColor)
    gridContainer.appendChild(gridElement)
  }
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function changeSize() {
  let newSize = prompt('Enter new size')

  if (newSize !== null) {
    newSize = parseInt(newSize)
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert('Enter a number from 1-64 range')
      changeSize()
    } else {
      clearGrid()
      setGridSize(newSize)
      fillGrid(newSize)
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes)
  gridArray.forEach((element) => {
    gridContainer.removeChild(element)
  })
}
