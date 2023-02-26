import React from 'react'

const EndGameScreen = ({retry,score}) => {
  return (
    <div>
    <h1>Fim de jogo!</h1>
    <h2>A sua pontação foi: <span className='text-pink-300 font-bold text-xl'>{score}</span></h2>

        <button onClick={retry}>Recomeçar</button>
    </div>
  )
}

export default EndGameScreen