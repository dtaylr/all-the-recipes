import React, {useEffect} from 'react'
import RecipeCard from '../components/RecipeCard';
// import Loading from '../components/Loading';
import {useSelector, useDispatch}from 'react-redux'
import { setRecipes} from '../actions/recipeActions';
import Search from '../components/Search';

const Filtered = () => {

    const dispatch = useDispatch()

    const queriedRecipes = useSelector(state=> state.recipes.queriedRecipes);
    const loading = useSelector(state=> state.recipes.loading);
    const favs = useSelector(state=> state.recipes.favorites);


    useEffect(() => {
        dispatch(setRecipes(queriedRecipes))
        // eslint-disable-next-line
    }, [dispatch])

    
    return (
            <div>
              <Search/>
              <h1 
                style={{
                  textAlign: 'center', 
                  marginTop: '40px'
                }}
              >Available recipes </h1>

              {/*recipes returned from search */}
                <section id='meals'>
                    {loading || !queriedRecipes ? (
                    <h1 className='empty-query'>No Meals Found</h1>):(
                      queriedRecipes.map(recipe=> (
                        <RecipeCard 
                            key={recipe.idMeal} 
                            recipe={recipe}
                            favs={favs}/>
                        )))
                  }
                </section>
            </div>
      
    )
}

export default Filtered