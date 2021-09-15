import * as types from '../types';

const initialState = {
    randomRecipes: [],
    selectedRecipe: {},
    showModal: false,
    search: '',
    recipeModal: '',
    err: false,
    favorites: [],
    queriedRecipes: [],
    mealsPpg: 5,
    pgNumbers: [],
    currentPage: 1,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, {payload, type}){
    switch(type){
        case types.GET_RECIPES:
            return{
                ...state,
                randomRecipes: payload,
            }
        case types.GET_RECIPE:
            return{
            ...state,
            selectedRecipe: payload
        }
        case types.SEARCH_RECIPES:
            return{
                ...state,
                // search: payload,
                queriedRecipes: payload,
                pgNumbers: payload
            }
        case types.SET_RECIPES:
            return{
                ...state,
                loading: false,
            }
        case types.TOGGLE_MODAL:
            return {
                ...state,
                showModal: true,
                selectedRecipe: payload
            }
        case types.CLOSE_MODAL:
            return {
                showModal: false,
            }    
        case types.REMOVE_FAVORITE:
            return {
                ...state,
                favs: payload
            }
        // case types.NEXT_PAGE:
        //     return{
        //         ...state,
        //         currentPage: payload
        //     }
        case types.ADD_FAVORITE:
            return{
                ...state,
                favorites: payload.favedMeals
            }
        case types.GET_FAVORITES:
            return{
                ...state,
                favorites: payload
            }
        case types.SET_LOADING:
            return{
                ...state,
                loading: !false
            }
        case types.BLANK_SEARCH:
            return{
                ...state
            }
        case types.SEARCH_ERROR:
            return{
                ...state,
                err: true
            }
            default:
                return state;
    }
}