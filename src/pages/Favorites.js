import React from 'react';
import RecipeCard from '../components/RecipeCard'
import { useSelector} from 'react-redux'

const Favorites = () => {

    let favs = useSelector(state => state.recipes.favorites);

    return (
        <div>
            <h1 className='randoms-title'>Your Favorites</h1>
            <section id='meals'>
                {favs.length > 0 ? (favs.map(recipe=> (
                    <RecipeCard 
                        key={recipe.idMeal} 
                        recipe={recipe}/>
                    ))):(null)}
            </section>
        </div>
      
    )
}

export default Favorites