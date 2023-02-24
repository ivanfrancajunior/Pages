import React from 'react'

const EndGameScreen = ({retry}) => {
  return (
    <div>
    <h1>perdeu ou ganhou... Restart?</h1>

        <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default EndGameScreen