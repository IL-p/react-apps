import Joke from "./joke.jsx"
import jokeData from "./jokeData.js"

export default function App () {
   const jokesCrack = jokeData.map(joke =>
       <Joke  id={joke.id}
               setup = {joke.setup}
               punchline={joke.punchline}
               />)
 return (
   <main>
      {jokesCrack}
      </main>
 )
}
