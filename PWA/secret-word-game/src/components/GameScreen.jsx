import React from 'react'

const GameScreen = ({verifyLetter}) => {
  return (
    <div>
        <h1>Game rolando</h1>

        <button onClick={verifyLetter}>Finalizar</button>
    </div>
  )
}

export default GameScreen