let redTurn = true
let displayRed = document.querySelector('.red-turn')
let displayBlue = document.querySelector('.blue-turn')

let grid = document.querySelector('.grid-container')
function startGame() {
	for (let i = 0; i < 9; i++) {
		let square = document.createElement('div')
		square.setAttribute('class', 'square')
		square.setAttribute('id', 'grid' + i)
		square.setAttribute('data-id', i)
		square.style.backgroundColor = 'white'
		square.addEventListener('click', changeColor)
		grid.appendChild(square)
	}
	displayRed.style.display = 'block'
}

let redArray = []
let blueArray = []

function changeColor(event) {
	if (redTurn === true && event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = 'red'
		displayBlue.style.display = 'block'
		displayRed.style.display = 'none'
		redArray.push(event.target.getAttribute('data-id'))
		checkWin()
		console.log(redArray)
		redTurn = false
	} else if (redTurn === false && event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = 'blue'
		displayRed.style.display = 'block'
		displayBlue.style.display = 'none'
		blueArray.push(event.target.getAttribute('data-id'))
		checkWin()
		console.log(blueArray)
		redTurn = true
	}
}

const winOptions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function checkWin() {
	if (redArray.length + blueArray.length === 9) {
		alert("It's a tie")
	}
}






/// Reset button
document.querySelector('.reset').addEventListener('click', newGame)
function newGame() {
	let removeSquare = document.querySelectorAll('.square')
	removeSquare.forEach(i => {
		i.remove()
	})
	displayRed.style.display = 'block'
	displayBlue.style.display = 'none'
	redArray = []
	blueArray = []
	redTurn = true
	startGame()
}

startGame()



















