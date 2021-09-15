import React from 'react'
import {Link} from 'react-router-dom'
import {getRecipe, addToFavorites, toggleModal} from '../actions/recipeActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch} from 'react-redux';
import RecipeModal from './RecipeModal'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({recipe: spoon, favs}) => {

    const dispatch = useDispatch()
    
    const {strArea, strMeal, strMealThumb, strCategory} = spoon

    // const open = useSelector(state => state.recipes.showModal)

    return (
        <div className='meal-container'>
            <h3 className='meal-title'>{strMeal}</h3>
            <div className='imgContainer'>
                <img 
                    className='meal-viz' 
                    src={strMealThumb} 
                    alt={strMeal}
                />
            </div>
            <article className='card-desc'>
                <p className='meal-cat'>Type: {strCategory}</p>
                <p className='meal-area'>Cuisine: {strArea}</p>
            </article>
            <section className='meal-cntrls'>
                <FontAwesomeIcon 
                    onClick={()=> dispatch(addToFavorites(favs, spoon))} 
                    className='addToFavorites'
                    icon={faHeart}
                    size='2x'
                />
                <button className='btn-detail'>
                    <Link 
                        onClick={()=>dispatch(getRecipe(spoon))}
                        to={`/recipe/${strMeal}`}>Meal View
                    </Link>
                </button>
                <button 
                    className='btn-modal'
                    onClick={()=> dispatch(toggleModal(spoon))}
                > Open Modal
                <RecipeModal spoon={spoon}/>
                
                    {/* initial modal config <Link data-cy='card-modal-btn'
                        onClick={()=>dispatch(getMeal(spoon))}
                        to={{pathname: `/meals/${spoon.idMeal}`,
                            state: {background: location}}}>Quick View
                    </Link> */}
                </button>
            </section>
        </div>
    )
}  



export default RecipeCard