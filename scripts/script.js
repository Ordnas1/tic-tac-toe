// Tic tac toe

const gameBoard = (() => 
{
    let gameState = [["X","O","X"],["O","X","O"],["X","X","O"]];

    const getGameState = () => gameState;
    const setSymbol = () => {};
    const resetGameState = () => {};

    return {getGameState, setSymbol, resetGameState}
})()

const gameController = (() => 
{
    let currentTurn = "";

    const changeTurn = () => {};
    const getCurrentTurn = () => {};
    const startGame = () => {};
    const restartGame = () => {};
    const checkWinCondition = () => {};

    return {changeTurn, getCurrentTurn, startGame, restartGame, checkWinCondition}
})()

const displayController = (() => 
{
    const setEventListerner = () => {};
    const render = () => 
    {
        const container = document.getElementById("game");
        const currentGameState = gameBoard.getGameState()
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                const currentCell = container.querySelector(`[data-row="${i}"][data-col="${j}"]`)

                currentCell.textContent = currentGameState[i][j]
                if (currentGameState[i][j] == "X")
                {
                    currentCell.classList.add('app-game__cel--cross')
                } else
                {
                    currentCell.classList.add('app-game__cel--o')
                }
            }
        }
    };

    return {render}
})()


const playerFactory = (name, symbol) => 
{
    this.name = name;
    this.symbol = symbol;
    let isCurrentTurn = false;
    
    const playTurn = () => {};

    return {name, symbol, playTurn}
}
