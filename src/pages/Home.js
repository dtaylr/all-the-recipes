import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {getRecipes} from '../actions/recipeActions';
// import Pagination from '../components/Pagination';
import RecipeCard from '../components/RecipeCard'
import Search  from '../components/Search';

const Home = () => {

    const dispatch = useDispatch();

    const recipes = useSelector(state => state.recipes.randomRecipes);
    const favs = useSelector(state => state.recipes.favorites)

    //pagination set up
    
    // const pgNumbers = useSelector(state => state.meals.pgNumbers)
    // const mealsPpg = useSelector(state => state.meals.mealsPpg)
    // const currentPage = useSelector(state => state.meals.currentPage)

    // const indexPrevMeal = currentPage * mealsPpg; //index of last meal should give 5 sets ppg ex 1 * 5 = 5, 2*5=10 ...
    // const indexFirstMeal = indexPrevMeal - mealsPpg; //can get 0 if on 1st pg but should still work? or 1 since 0 based
    // const currentMeals = filter.slice(indexFirstMeal, indexPrevMeal) // n(0, 5)
    // const nextPage = () => setPage(pages)

    useEffect(()=>{
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <div>
          <Search/>
            <h1 className='randoms-title'>Recipes of the Day</h1>
            <section id='meals'>
                {recipes.slice(0,5).map(recipe => (
                    <RecipeCard 
                        key={recipe.idMeal} 
                        recipe={recipe} 
                        favs={favs}
                    />)
                    )
                }
            </section>
                {/* {pgNumbers ? (
                    <Pagination 
                        mealsPpg={mealsPpg} 
                        totalMeals={pgNumbers.length} 
                        nextPage={nextPage}/>):null} */}
                {/* <Pagination mealsPpg={mealsPpg} totalMeals={pgNumbers.length} nextPage={nextPage}/> */}
        </div>
    )
}
export default Home