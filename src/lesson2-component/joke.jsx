import { useState } from "react"

export default function Joke (prop) {
  const [isSHown, setIsshown ] = useState(false);
  function Toggle () {
      setIsshown(flipSwitch => !flipSwitch)

  }
  return <>
    {prop.setup && <h3>{prop.setup}</h3>}
    {isSHown && <p>{prop.punchline}</p> 
    // we can also use a tenary operator (isShown ? "<p>{prop.punchline}</p>"  : "null") for the And operator bug, if isShown equals to zero
    /** the && operator is used to run truthy values from left to right, if the first value is true it process the next one,
     *  it only returns a true value if the next one is true, if the value is false, the values will be false if the first value is false
     * it shortens the code and returns a false value, which terminates the programme.
     * make sure your argument equals a boolean value, if not react might give a literal answer and an error/bug might be floating around
     * in your code e.g 
     * const [unread, setUnRead] = React.useState(['a','b'])
     * return ( <div> 
                    {unread.length > 0 && <p>you have {unread.lenght} messages</p>)  
                    this will return a boolen value of true so the code will run
                    {unread.lenght &&  <p>you have {unread.lenght} messages</p> 
                    this assumes that the value of the array is a truthy value but once the array is empty 
                    it will behave absurdly and will display zero(0) instead of an empty div }
                    </div>  */ 
                      
    
    } <hr/>
    <button onClick={Toggle}>{isSHown ? "Punchline" :"Show Punchline"}</button> 
    {/**another way to write this is to duplicate the button and render it with the AND operator depending on the state of isShown useState
     {!isSHown && <button onClick={Toggle}>Show punchline</button>}
    {isSHown && <button onClick={Toggle}>punchline</button>  react will switch the button while rerendering using the And operator} */}
 
    </>
};