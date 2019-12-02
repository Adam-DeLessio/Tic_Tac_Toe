
let counter = 1

let redTurn = document.querySelector('.red-turn')
let blueTurn = document.querySelector('.blue-turn')

function startGame() {
	bluePlayer()
}

let grid = document.querySelectorAll('.grid-item')
for (let i = 0; i < grid.length; i++) {
	grid[i].addEventListener('click', function() {changeColor(grid[i])})
}

function changeColor(grid) {
	this.grid = grid

	if (counter % 2 === 0) {
		counter += 1
		bluePlayer(grid)
	} else if (counter % 2 === 1) {
		counter += 1
		redPlayer(grid)
	}
}

function redPlayer(grid) {
	this.grid = grid
	blueTurn.style.display = 'block'
	redTurn.style.display = 'none'
	grid.style.backgroundColor = 'red'
}

function bluePlayer(grid) {
	this.grid = grid
	redTurn.style.display = 'block'
	blueTurn.style.display = 'none'
	grid.style.backgroundColor = 'blue'
}	



/// Reset button
let reset = document.querySelector('.reset')
reset.addEventListener('click', newGame)

function newGame() {
	let gridWhite = document.querySelectorAll('.grid-item')
	for (let i = 0; i < gridWhite.length; i++) {
		gridWhite[i].style.backgroundColor = 'white'
		counter = 0
	}
	startGame()
}


startGame()























