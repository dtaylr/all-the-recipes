import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
const middleware =[thunk]

// eslint-disable-next-line
const initialState = {};
// if(localStorage.getItem('favedMeals')){
// 	initialState.meals = {favs: JSON.parse(localStorage.getItem('favedMeals'))};
//     console.log(initialState.meals)
// }

const store = createStore(
    rootReducer,
    compose( 
        applyMiddleware(...middleware),
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined' ?
        a => a:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store