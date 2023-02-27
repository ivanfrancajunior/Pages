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

  const pickWordAndCategory =useCallback(()=>{
    //pega uma categoria aleatória
    const categories = Object.keys(words)
    const category = 
     categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    
    
    //pega uma palavra aleatória
    const word = 
    words[category][Math.floor(Math.random() * words[category].length)]
    

     
     return {word, category}
    },[words])
    
    
    
    
    //começa o game
    const startGame = useCallback(()=>{
      clearLetterStates()
      const {word, category} = pickWordAndCategory();
      
      //criando array de letras
      let wordLetters = word.split('');
      wordLetters = wordLetters.map((l) => l.toLowerCase()); // retarna tudo minuscolo ;)

      

      //fill states
      setPickedWord(word);
      setpPickedCategory(category);
      setLetters(wordLetters);


     setGameStage(stages[1].name)
    },[pickWordAndCategory])
  
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
        setGuesses((actualGuesses)=>actualGuesses - 1)
      }
      
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

    //check win condition
    useEffect(() => {
      const uniqueLetters = [...new Set(letters)];

      //win condition
      if(guessedLetters.length === uniqueLetters.length && gameStage===stages[1].name){
        setScore((actualScore) => actualScore += 100)
        
        
        //restart game whith new word
        startGame()
      }


    },[guessedLetters,letters,startGame])


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

     {gameStage ==='end' && <EndGameScreen retry={retry} score={score}/>}
    </div>
  )
}

export default App
