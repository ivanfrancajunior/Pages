import React from 'react'

const GameScreen = ({verifyLetter}) => {
  return (
    <div>
    
      <div className='game'>
        <p className='poins'> <span>Pontuação</span></p>
        <h1>Adivinhe a palavra!</h1>
        <h3>Dica sobre a palavra: <span>Dica...</span></h3>
        
        <button onClick={verifyLetter}>Finalizar</button>
      </div>
      <div className='wordcontainer'>
        <span className='letter'>Asadasdasds</span>
        <span className='blackSquare'></span>
      </div>
      <div className='letterContainer'>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name='letter' maxLength={1} required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className='wrongletters'>
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default GameScreen