import React from 'react'

const EndGameScreen = ({retry,score}) => {
  return (
    <div>
    <h1 className='text-xl md:text-5xl font-bold m-3' >Fim de jogo!</h1>
    <h2 className='text-xl  md:text-5xl font-bold m-3'>Você fez <span className='text-pink-400 font-bold text-xl md:text-5xl'>{score} pontos!</span></h2>

        <button onClick={retry} className='px-12 font-bold rounded-full my-4 transition duration-500 hover:bg-green-400 '>Recomeçar</button>
    </div>
  )
}

export default EndGameScreen