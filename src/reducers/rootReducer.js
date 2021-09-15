import {combineReducers} from 'redux';
import mealsReducer from './recipeReducer';
// import searchReducer from './searchReducer';

export default combineReducers({
    recipes: mealsReducer,
    // search: searchReducer
})