import React from "react";
import Claudrecipie from "./claudRecipie.jsx";
import IngredientsList from "./IngredientList.jsx";
import { getRecipeFromMistral } from "./ai.js";
import ReactMarkdown from "react-markdown"

console.log(import.meta.env.VITE_API_TOKEN);
export default function Body () {
    const [ingredients, setStateIngredients] = React.useState([]);
    const [recepieShown, setRecepieShown] = React.useState("");
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (recepieShown !== '' && ref.current !== null) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [recepieShown])
    console.log(ref)
    const ingredient = ingredients.map((ingredient, index) => {
       return (
        <li key={index}>{ingredient}</li>
       );
    });
    
    function onSubmithandler (formData) {
      //  alert('form submitted');
        const newIngredient = formData.get("ingredient");
        ingredient.push(newIngredient);
        //alert(newIngredient);
        setStateIngredients(prevStateIngredientds => [...prevStateIngredientds, newIngredient])

    };
    async function showReceipe () {
      const recepieMarkdown =  await getRecipeFromMistral(ingredients)
      setRecepieShown(recepieMarkdown); 

     //  setRecepieShown(Recepie => !Recepie);
        //setRecepieShown(true)
    }
    return (
        <main>
            <form action={onSubmithandler}onSubmit={onSubmithandler}>
            <input className= "text" type="text" name="ingredient" id="" placeholder="eg.oregano" aria-label="Add ingrdient" defaultValue="yam"/>
            <button className="btn">+ Add ingredient</button>
            </form>
     
        
        {<IngredientsList ingredients={ingredients} ingredient={ingredient} showReceipe={showReceipe} ref={ref}/> }
      

        { recepieShown && <Claudrecipie recipie={recepieShown} /> }
        </main>
        
    )
}