document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]

    //Create Board
    function createBoard() {
        for(let i=0; i < width*width; i++) {
            const square = document.createElement('div')

            //add draggable attribute to swuare
            square.setAttribute('draggable', true)
            square.setAttribute('id', i)

            //get random number between 0 and 5
            let randomColor = Math.floor(Math.random() * candyColors.length)
            //assign each square a color randomly from the array
            square.style.backgroundColor = candyColors[randomColor]
            grid.appendChild(square)
            squares.push(square)
        }
    }

    createBoard()

    //Drag the Candies

    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))


    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        console.log(this.id, 'dragstart')
    }

    function dragOver(e) {
        e.preventDefault()
        console.log(this.id, 'dragover')
    }

    function dragEnter(e) {
        e.preventDefault()
        console.log(this.id, 'dragenter')
    }

    function dragLeave() {
        console.log(this.id, 'dragleave')
    }


    function dragEnd() {
        console.log(this.id, 'dragend')
        //what is a valid move

        let validMoves = [
            squareIdBeingDragged - 1,
            squareIdBeingDragged - width,
            squareIdBeingDragged + 1,
            squareIdBeingDragged + width,
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced)
    }

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
        console.log(this.id, 'dragdrop')
    }


})