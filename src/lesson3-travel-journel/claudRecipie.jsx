import ReactMarkdown from 'react-markdown'
export default function Claudrecipie (prop) {
    return (
     <section>
    <h2>Chef Claude Recommends:</h2>
    
         <article className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>
                 {prop.recipie}
            </ReactMarkdown>
      
    </article>
   
   
</section>
    )
}