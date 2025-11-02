import { button } from "./button.js";
import { use, useState } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';
import { useRef, useEffect } from "react";


export default function Main () {

    function generateTenRandomDice () {
        /**
         *  IMPERATIVE WAY OF WRITING THIS
const randoM = [];

 for (let i = 0; i < 10; i++) {

const ranNum = Math.floor(Math.random() * 6) + 1;
 randoM.push(ranNum)

  };

console.log(randoM)
         */
        //REACT IMPERATIVE WAY OF WRITING THIS
        return new Array(10)
            .fill({
                value: 0,
                isHeld: false,
              
            })
            .map((desk) => ({...desk,   id:nanoid(), value: Math.ceil(Math.random() * 6)}))
            //Math.ceil rounds up while random rounds downward so you do not need to add 1;
        
    
   
};
 const [Dice, SetDice] = useState( () => generateTenRandomDice());




 //More concise and easier to use than the function game()
const buttonRef = useRef(null);

const gameWon = Dice.every(die => die.isHeld) &&
        Dice.every(die => die.value === Dice[0].value)

 useEffect(() => {
    if(gameWon) {
        buttonRef.current.focus()
    }
 }, [gameWon])


        
/** 
 *  function game (Dice) {

    let gamewon = false

       
         if (Dice.every(die => die.isHeld) &&
        Dice.every(die => die.value === Dice[0].value)) {

            gamewon = true

             console.log("Game won")
         }
         
         return gamewon
    }
*/



/**  .every is a method that loops through the array and returns a true boolean value for every object, 
 * while map loops the array and returns an object.
*/

console.log(generateTenRandomDice());

   
     function Hold (id) {

    SetDice((prevDice) => {
        return prevDice.map((die) => {
             return die.id === id ? {...die, isHeld: !die.isHeld } : die
        })
       
    })
    
   }

    const buttonG = Dice.map((die) => {

        
        return (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} Hold={() => {Hold(die.id)}}/>
    )
    });
     
    function Roll () {

        if(!gameWon) {

               SetDice(prevRoll => prevRoll.map( newDie=> 
              newDie.isHeld ?  newDie : {...newDie, value: Math.ceil(Math.random() * 6)
       }))

        } else {
            SetDice(generateTenRandomDice())
        }
     
    };

    function Rollbutton (props) {
        const style = {
        width: 'auto',
        whiteSpace: 'no-wrap',
        height: '60px',
        color: 'black',
        backgroundColor: 'blue',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
        padding: '6px 21px'
    }
        return(
             <button  ref={buttonRef} onClick={Roll} style={style}className='rollDice'>{gameWon ? "New Game" : "Roll"}</button>
        )
    };


     
    return(
       
        <main className="main">
            <div className="sr-only" aria-live="polite">
                {gameWon && <p>Congratulations, you've won!, click New game to Start again</p>}
            </div>
            { gameWon && <Confetti/>}
            <section>
                 {buttonG}
            </section>

            <div className="rollContainer">
                  <Rollbutton/>
            </div>

          
          

        </main>
    )
}

/**
 * useRef(): refs are very similar to state but they are exceptions, for one you can mutate refs directly, with props and with state we know that they are immutable, And the second exception, is that changing a refs doesn't rerender the page, refs are commonly used for accessing dom nods without the need of assigning ids to them and run dom manipulation command like document.getELementById(), ref gives us a way to access those dom nodes.
 * Creating a ref and using it in a combination with a ref prop gives us a chance to do those manual manipulation tasks
 */