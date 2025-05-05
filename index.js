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
        [
            'name','name','name',
            '','','',
            '','',''
        ], [
            '','','',
            'name','name','name',
            '','',''
        ], [
            '','','',
            '','','',
            'name','name','name',
        ],[
            'name','','',
            'name','','',
            'name','','',
        ], [
            '','name','',
            '','name','',
            '','name','',
        ], [
            '','','name',
            '','','name',
            '','','name',
        ], [
            'name','','',
            '','name','',
            '','','name',
        ], [
            '','','name',
            '','name','',
            'name','','',
        ]

        
     ]
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

function checkForWinner() {
    
}


Players.Fred.placeStone(2)
Players.Franzi.placeStone(5)
Players.Fred.placeStone(8)
Players.Franzi.placeStone(3)
Players.Fred.placeStone(4)
Players.Franzi.placeStone(6)
Players.Fred.placeStone(1)


console.log(Game);
