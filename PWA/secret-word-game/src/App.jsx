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

  //area dos estágios do game (paginação)
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //area das letras escolhidas
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setpPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  //area da dica x chances x pontuação
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  const pickWordAndCategory =()=>{
    //pega uma categoria aleatória
    const categories = Object.keys(words)
    const category = 
     categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    console.log(category)
    
    //pega uma palavra aleatória
    const word = 
    words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

     
     return {word, category}
    }
    
    
    
    
    //começa o game
    const startGame = ()=>{
      const {word, category} = pickWordAndCategory();
      
      //criando array de letras
      let wordLetters = word.split('');
      wordLetters = wordLetters.map((l) => l.toLowerCase()); // retarna tudo minuscolo ;)

      console.log(word, category);
      console.log(wordLetters);

      //fill states
      setPickedWord(word);
      setpPickedCategory(category);
      setLetters(wordLetters);


     setGameStage(stages[1].name)
    }
  
  //process the letter input
  const verifyLetter =(letter)=>{
    const normalizedLetter = letter.toLowerCase()

    //verificação caso letra ja utilizada

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    //push a geuessed letter or remve a guess
    if(letters.includes(normalizedLetter)){
        setGuessedLetters((actualGuessedLetters) =>[...actualGuessedLetters,normalizedLetter,])
      
      }else{
        
        setWrongLetters((actualWrongLetters) =>[...actualWrongLetters,normalizedLetter,])
      }
      console.log(guessedLetters,wrongLetters)

      setGuesses((actualGuesses)=>actualGuesses - 1)
    };

    const clearLetterStates = () =>{
      setGuessedLetters([])
      setWrongLetters([])
    }

    useEffect(() => {
      if(guesses <=0){

        setGameStage(stages[2].name)
        clearLetterStates()
      }
    },[guesses])

    //restart the game
  const retry =()=>{
    setScore(0)
    setGuesses(5)
    setGameStage(stages[0].name)

  }



  return (
    <div className="App flex items-center md:items-center justify-center md:justify-center text-center md:text-center w-screen md:w-screen h-screen md:h-screen bg-gradient-to-bl from-blue-600 via-indigo-700 to-blue-900 text-white ">
     

     {gameStage ==='start' && <StartScreen startGame={startGame}/>}

     {gameStage ==='game' && <GameScreen verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score = {score} />}

     {gameStage ==='end' && <EndGameScreen retry={retry}/>}
    </div>
  )
}

export default App
