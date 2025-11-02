export default function IngredientsList (props) {
    return (
         <section>
        { props.ingredients.length > 0 && <div>
            <h2>Ingredients on hand:</h2>
            <ul>
            {props.ingredient}
          </ul>
            </div> }
          {props.ingredients.length > 3 && <div className="recepie"> 
            <div ref={props.ref}>
            <h3>Ready for a recipie?</h3>
            <p>generate a recepie from the list of ingredient</p> 
            </div>
            
            <button onClick={props.showReceipe}>Get a recipie</button>
          </div>}
        </section>
    )
}