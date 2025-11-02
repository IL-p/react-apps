import { useState, useRef, useEffect } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function () {

  function generateTenNewDice() {
    const die = new Array(10).fill({
        isHeld : false,
        value: 0,
    }).map((dex) => {
        return {...dex,  id: nanoid(), value: Math.ceil(Math.random()  * 6)}
    })
     return die
  }

  const [Dice, setDice] = useState(generateTenNewDice());

  function Hold (id) {
    setDice(prevDice => prevDice.map(newDie => 
      id === newDie.id ? {...newDie, isHeld: !newDie.isHeld} : newDie))
    
  }
 
  const Rabbi = Dice.map(six => <Die value={six.value} key={six.id} isHeld={six.isHeld} id={six.id} Hold={() => {Hold(six.id)}}/>);

  const gameWon = Dice.every( Die => Dice[0].value === Die.value) && Dice.every(Die => Die.isHeld);
  const bRef = useRef(null);

console.log(bRef);

useEffect(()=> {
  if(gameWon) {
    bRef.current.focus()
  }
}, [gameWon])

  function Roll () {

    if(!gameWon) {

       setDice(prevDice => prevDice.map(newDie => { 
    return  newDie.isHeld ? newDie :  {...newDie, value: Math.ceil(Math.random()  * 6)} 

    }))
  } else{
     setDice(generateTenNewDice())
  }
    }
   

  
 
    return (
       <main className="container">
          {gameWon && <Confetti/>}
        <div className="header">
           <h1>Tenzies Roll Dice</h1>
             <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
          
        <section>
           {Rabbi}
        </section>

       <div className="Bcontainer">
        <button ref= {bRef} onClick={Roll}className="rollButton">{gameWon ? "New Game" : "Roll"}</button>
        </div> 
       </main>
    )
};