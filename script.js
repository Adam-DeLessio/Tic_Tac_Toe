let redTurn = true
let displayRed = document.querySelector('.red-turn')
let displayBlue = document.querySelector('.blue-turn')
let displayWinner = document.querySelector('.display-winner')

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
	displayWinner.style.display = 'none'
}

let redArray = []
let blueArray = []

function changeColor(event) {
	if (redTurn === true && event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = 'red'
		displayBlue.style.display = 'block'
		displayRed.style.display = 'none'
		redArray.push(Number(event.target.getAttribute('data-id')))

		checkWin()
		redTurn = false
	} else if (redTurn === false && event.target.style.backgroundColor === 'white') {
		event.target.style.backgroundColor = 'blue'
		displayRed.style.display = 'block'
		displayBlue.style.display = 'none'
		blueArray.push(Number(event.target.getAttribute('data-id')))


		checkWin()
		redTurn = true
	}
}

let winningCombos = [
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
	let redWin = null
	let blueWin = null
	winningCombos.forEach(check => {
		if (redArray.includes(check[0]) && redArray.includes(check[1]) && redArray.includes(check[2])) {
			redWin = true
			playAgain()
		} else if (blueArray.includes(check[0]) && blueArray.includes(check[1]) && blueArray.includes(check[2])) {
			blueWin	= true
			playAgain()
		} else if ((redArray.length + blueArray.length === 9) && redWin != true && blueWin != true)
			alert("it's a tie")
	})
}

function playAgain() {
	displayWinner.style.display = 'block'
	document.querySelector('.button').addEventListener('click', newGame)
}

// Reset button
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




