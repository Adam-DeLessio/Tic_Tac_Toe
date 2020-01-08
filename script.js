let redTurn = true

let grid = document.querySelector('.grid-container')
function startGame() {
	for (let i = 0; i < 9; i++) {
		let square = document.createElement('div')
		square.setAttribute('class', 'square')
		square.setAttribute('id', 'grid' + i)
		square.setAttribute('data-id', 0)
		square.style.backgroundColor = 'white'
		square.addEventListener('click', changeColor)
		grid.appendChild(square)
	}
}

function changeColor(event) {
	if (redTurn === true && event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = 'red'
		redTurn = false
	} else if (redTurn === true && event.target.style.backgroundColor === 'blue') {
		changeColor()
	} else if (redTurn === false && event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = 'blue'
		redTurn = true
	} else {
		changeColor()
	}
}

/// Reset button
document.querySelector('.reset').addEventListener('click', newGame)

function newGame() {
	let removeSquare = document.querySelectorAll('.square')
	for (let i = 0; i < removeSquare.length; i++) {
		removeSquare[i].remove()
	}
	startGame()
}

startGame()





















