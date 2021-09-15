import React from 'react'
import { useSelector} from 'react-redux'


const RecipeDetail = () => {

    const recipe = useSelector(state => state.recipes.selectedRecipe)

    const {strMeal, strArea, strCategory, strMealThumb, strInstructions} = recipe

    const formatRecipe = () => {
        
        const ingredients = Object.entries(recipe).filter(([k, v]) => {
         return k.startsWith('strIngredient')
        });

        const measurements = Object.entries(recipe).filter(([k, v]) => {
            return k.startsWith('strMeasure')
        })

        const formattedRecipe = measurements.map((e, i) => {
            return [e[1], ingredients[i][1]]
        }).filter( key => key.indexOf("") < 0 || null )

        return formattedRecipe;
       }

       const listIngredients = (listedIngredients = []) => {
           const ingredients = listedIngredients.map(( ingredient, i) => {
            return <li key={`ingredient${i}`}>{`${ingredient[0]} ${ingredient[1]}`}</li>

           })
           return <ul>{ingredients}</ul>
       }

       const listDirections = () => <p>{strInstructions}</p>

    // let back = e => {
    //     e.stopPropagation();
    //     history.goBack();
    //   };  

    return (
        <div className='detail-container'>
        <h1 className='detail-title'>{strMeal}</h1>
            <section className='detail-head'>
                <div className='top-section'>
                    <div className='img-container'>
                        <img 
                            className='detailPhoto' 
                            alt={`pic of ${strMeal}`} 
                            src={strMealThumb}
                        />
                    </div>
                    <article className='detail-desc'>
                        <p>Type: {strCategory}</p>
                        <p>Nationality: {strArea}</p>
                    </article>
                </div>
            <section className='ingredients'>
                <h4>Ingredients</h4>
                    <ul className='recipe-list'>
                        {listIngredients(formatRecipe())}
                    </ul>
            </section>
            </section>  
                <section className='instruct-container'>
                    <h4 className='instruct-title'>Recipe</h4>
                    {listDirections()}
                </section>  
            </div>
    )
}

export default RecipeDetail