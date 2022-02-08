document.querySelector("#black-white").addEventListener('click', colorSelect)
document.querySelector("#rainbow").addEventListener('click', colorSelect)
function colorSelect(){

    let bwColor = getComputedStyle(this).getPropertyValue('background-color')
    console.log(bwColor)
    if (this.id == 'black-white' && bwColor == 'rgb(36, 36, 36)') {
        squareColor = 'white'
    } else if (this.id == 'black-white' && bwColor == 'rgb(255, 255, 255)'){
        squareColor = 'black'
    } else {
        squareColor = randomColor
    }
}

function randomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}


let squareColor = 'black'
function changeColor(){
    if (squareColor == 'black' || squareColor == 'white'){
        this.style.backgroundColor = squareColor
    } else {
        this.style.backgroundColor = squareColor()
    }
}

//Initial painting squares (16x16)
const sketchGrid = document.querySelector("#sketch-grid");
for (i = 0; i <= 256; i++){
    let paintArea = document.createElement('div')
    paintArea.addEventListener('mouseenter', changeColor)
    paintArea.classList.add('paintArea')
    sketchGrid.appendChild(paintArea)
}


//erases the entire grid and creates one with a new amount of squares
document.querySelector("#erase").addEventListener('click', erase)
function erase(){
    document.querySelectorAll('.paintArea').forEach(e => e.style.backgroundColor = 'white')

    let squareNumber = -1
    while (squareNumber < 0 || squareNumber > 100){
        squareNumber = Number(prompt("Enter a new value for the amount of squares per side (must be more than 0 and less than 100)."))
    } 

    sketchGrid.innerHTML = ''
    for (i = 0; i <= squareNumber**2; i++){
        let paintArea = document.createElement('div')
        paintArea.addEventListener('mouseenter', changeColor)
        paintArea.classList.add('paintArea')
        sketchGrid.appendChild(paintArea)
    }

    sketchGrid.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`
    sketchGrid.style.gridTemplateRows = `repeat(${squareNumber}, 1fr)`

}






// button effects
document.querySelectorAll('.option').forEach(e => e.addEventListener('mousedown', buttonClickDown));
document.querySelectorAll('.option').forEach(e => e.addEventListener('mouseup', buttonClickUp));
document.querySelectorAll('.option').forEach(e => e.addEventListener('mouseout', buttonClickUp));
function buttonClickDown(){
    this.classList.add('option-click')
    if (this.id == "black-white" && this.style.backgroundColor != 'rgb(36, 36, 36)') {
        this.style.backgroundColor = 'rgb(36, 36, 36)'
    } else if(this.id == "black-white") {
        this.style.backgroundColor = 'white'
    }
}
function buttonClickUp(){
    this.classList.remove('option-click')
}

