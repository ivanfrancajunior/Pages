import React from 'react'

const GameScreen = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
  return (
    <div>
    
      <div className='game '>
        <p className='points'> Pontuação: <span className='font-bold text-pink-300'> {score}</span></p>
        <h1 className='text-3xl'>Adivinhe a palavra!</h1>
        <h3>Dica sobre a palavra: <span className='text-yellow-400 font-extrabold'>{pickedCategory}</span></h3>
        <p>Voce ainda tem <span className='text-green-600 font-extrabold'>{guesses}</span> tentativa(s)</p>
    
        
      </div>

      <div className=' wordcontainer flex justify-center items-center ali m-10 p-2.5  border-8 border-yellow-500 '>
        {letters.map((letter,i) => guessedLetters.includes(letter)? 
        (<span className='letter flex text-7xl border-4  border-black bg-white text-black p-1 h-24 w-24 uppercase justify-center items-center ' key={i}>{letter}, </span> ):
          
          (<span className='blackSquare flex text-7xl border-4  border-black bg-white text-black p-1 h-24 w-24 uppercase justify-center items-center ' key={i}></span>)
        )}
        
        
      </div>

      <div className='letterContainer my-1.5 '>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form className='flex items-center justify-center'>
          <input type="text" name='letter' maxLength={1} required  className='letter flex text-7xl border-4  border-black bg-white text-black p-1 h-24 w-24 uppercase justify-center items-center pl-6'/>
          <button>Jogar!</button>
        </form>
      </div>

      <div className='wrongletters my-2'>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter,i)=>(<span key={i}>{letter}, </span>))}
      </div>
      <button onClick={verifyLetter}>Finalizar</button>
    </div>
  )
}

export default GameScreen