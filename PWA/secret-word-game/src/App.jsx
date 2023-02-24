//CSS
import './App.css'
//data
import {wordsList} from './data/words.js'

//react 
import { useCallback,useEffect,useState } from 'react'

//components
import StartScreen from './components/StartScreen'

function App() {


  return (
    <div className="App flex items-center md:items-center justify-center md:justify-center text-center md:text-center w-screen md:w-screen h-screen md:h-screen bg-gradient-to-b from-blue-300 via-indigo-500 to-purple-800 text-white ">
     

     <StartScreen />
    </div>
  )
}

export default App
