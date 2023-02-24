import React from 'react'

const StartScreen = ({startGame}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold my-8'>SECRET WORD</h1>
        <p className='text-xl text-yellow-300 my-8'>Clique abaixo para começar a jogar</p>
        <button className='p-3 font-bold text-green-500 my-8 hover:text-white transition duration-700 hover:uppercase' onClick={startGame}>começar o jogo</button>
    </div>
  )
}

export default StartScreen