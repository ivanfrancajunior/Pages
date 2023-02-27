import React,{useState,useRef} from 'react'

const GameScreen = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {

  const [letter,setLetter] = useState('')
  const letterInputRef = useRef(null)

  const handleSubmit = (e) =>{
    e.preventDefault();

    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus()

    
  }

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
        (<span className='letter flex text-5xl border-4  border-black bg-white text-black p-1 h-16 md:h-24 w-16 md:w-24 uppercase justify-center items-center ' key={i}>{letter} </span> ):
          
          (<span className='blackSquare flex text-5xl border-4  border-black bg-white text-black p-1 h-16 md:h-24  w-16 md:w-24 uppercase justify-center items-center ' key={i}></span>)
        )}
        
        
      </div>

      <div className='letterContainer  '>
        <p>Tente adivinhar uma letra da palavra:</p>

        <form className='flex items-center justify-center' onSubmit={handleSubmit}>
          
          <input type="text" name='letter' maxLength={1} required  className='letter flex text-5xl border-4  border-black bg-white text-black w-14 md:w-16 h-14 md:h-16 uppercase justify-center items-center  pl-1.5 md:pl-3  mx-2' onChange={(e)=>setLetter(e.target.value) }  value={letter} ref={letterInputRef}/>

          <button className='px-12 font-bold rounded-full my-4 transition duration-500 hover:bg-green-400'>Jogar!</button>
        </form>
      </div>

      <div className='wrongletters my-2'>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter,i)=>(<span key={i} className='text-2xl text-red-500 font-bold'>{letter}, </span>))}
      </div>
      
    </div>
  )
}

export default GameScreen