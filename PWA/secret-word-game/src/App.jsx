//CSS
import './App.css'
//data
import {wordsList} from './data/words.js'

//react 
import { useCallback,useEffect,useState } from 'react'

//components
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import EndGameScreen from './components/EndGameScreen'

const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'end'},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  //starts a game
  const startGame = ()=>{
    setGameStage(stages[1].name)
  }
  
  //process the letter input
  const verifyLetter =()=>{
    setGameStage(stages[2].name)
  }
  const retry =()=>{
    setGameStage(stages[0].name)
  }



  return (
    <div className="App flex items-center md:items-center justify-center md:justify-center text-center md:text-center w-screen md:w-screen h-screen md:h-screen bg-gradient-to-bl from-blue-600 via-indigo-700 to-blue-900 text-white ">
     

     {gameStage ==='start' && <StartScreen startGame={startGame}/>}
     {gameStage ==='game' && <GameScreen verifyLetter={verifyLetter} />}
     {gameStage ==='end' && <EndGameScreen retry={retry}/>}
    </div>
  )
}

export default App