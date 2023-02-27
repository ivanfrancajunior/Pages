import React from 'react'

const StartScreen = ({startGame}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold my-12 md:text-5xl'>SECRET WORD</h1>
        <p className='text-xl text-yellow-400 my-12 md:text-5xl'>Clique abaixo para começar a jogar</p>
        <button className='px-12 font-bold rounded-full my-4 transition duration-500 hover:bg-green-400' onClick={startGame}>começar o jogo</button>
    </div>
  )
}

export default StartScreen