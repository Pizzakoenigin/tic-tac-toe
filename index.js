// createGame()
Game = {
    board: ['', '', '', '', '', '', '', '',],
    turn: 0
}
Players = {
    Fred: createPlayer('Fred', 'X'),
    Franzi: createPlayer('Franzi', '0')
}
Logic = {
    winCondition: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
}




function checkForWinner() {
    for (let condition of Logic.winCondition) {
        const [a, b, c] = condition;
        if (Game.board[a] && Game.board[a] === Game.board[b] && Game.board[a] === Game.board[c]) {
            console.log(`${Game.board[a]} wins!`);
             ;
        }
    }
    return Game.board.includes('') ? 'No winner yet.' : 'It\'s a draw!';
}

function createPlayer(name, symbol) {
    // const name = name
    const score = 0
    const giveScore = () => score++
    const placeStone = position => {
        Game.board[position] = name
    }

    return { name, score, giveScore, placeStone }
}

Players.Fred.placeStone(2)
Players.Franzi.placeStone(5)
Players.Fred.placeStone(7)
Players.Franzi.placeStone(3)
Players.Fred.placeStone(4)
Players.Franzi.placeStone(6)
Players.Fred.placeStone(1)
checkForWinner()


console.log(Game);
