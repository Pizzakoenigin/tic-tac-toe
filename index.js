// createGame()
    Game = {board: ['','','','','','','','',''], }
    Players = {Fred : createPlayer('Fred', 'X'), Franzi : createPlayer('Franzi', '0')}


// function createGame() {


//     return {Game, Players}
// }
    


function createPlayer(name, symbol) {
    // const name = name
    const score = 0
    const giveScore = () => score++
    const placeStone = position => {
        Game.board[position] = symbol
    }

    return { name, score, giveScore, placeStone}
}


Players.Fred.placeStone(2)

console.log(Game);
