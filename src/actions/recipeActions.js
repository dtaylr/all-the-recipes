import * as types from '../types'
import api from '../utils/api'
import axios from 'axios'

//get favorites from local storage
export const getFavorites = favs => dispatch =>{
    // let meals = favs
    if(localStorage.getItem('favedMeals')){
        favs = JSON.parse(localStorage.getItem('favedMeals'));
    }else{
        favs = 'No meals could be found'
        return favs
    }
   return dispatch({type: types.GET_FAVORITES, payload: favs})
}

//select recipe by ID
export const getRecipe = idMeal => dispatch => {
    return dispatch({type: types.GET_RECIPE, payload: idMeal})
}


export const getRecipes = () => dispatch =>{
    try {
        axios.get(api.random)
        .then((res) => res.data.meals)
        .then((data) => {
            dispatch({type: types.GET_RECIPES, payload: data })        
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

//opens modal
export const toggleModal = idMeal => dispatch => {
    return dispatch ({type: types.TOGGLE_MODAL, payload: idMeal})}

export const closeModal = () => dispatch => {
    return dispatch({type: types.CLOSE_MODAL, payload: false})
}

export const setLoading = () => dispatch => {
    return dispatch({type: types.SET_LOADING})
}

//search for a recipe
export const searchIt = text => async dispatch =>{  
    if(!text){
        alert('Type in the name of a recipe to search!')
    }else try{
        setLoading()
        axios.get(`${api.search}${text}`)
        .then((res) => res.data)
        .then((data) =>  dispatch({type:types.SEARCH_RECIPES, payload: data.meals})
        )

    }catch (err){
        console.log('meal error found')
        alert('No meals found for your search!')
        dispatch({type:types.SEARCH_ERROR, payload: err})  
    } 
}

export const setRecipes = (spoons, err) => async dispatch =>{
    return dispatch({type: types.SET_RECIPES, payload: spoons})
}

//adds to favorites via local storage

export const addToFavorites = (favs, spoon) => dispatch =>{
    const favedMeals = favs.slice();
    
    let liked = false
    favedMeals.forEach(meal => {
        if(meal.idMeal === spoon.idMeal){
            liked = true;
        }
    });

    if(!liked){
        favedMeals.push({...spoon, favs})
    }

    localStorage.setItem('favedMeals', JSON.stringify(favedMeals));
    alert(`Stored ${spoon.strMeal} to Favs`);
    return dispatch ({type:types.ADD_FAVORITE, payload:{
        favedMeals: favedMeals
    } })
}

export const removeFavorite = favs => dispatch => {
     favs.filter((recipe) => recipe.idMeal !== favs.idMeal)
     return dispatch ({type: types.REMOVE_FAVORITE, payload: favs })
}
