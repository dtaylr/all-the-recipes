import React, { Fragment } from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import RecipeDetail from './pages/RecipeDetail';
import { Switch, Route, useLocation } from 'react-router';
import './App.scss';
import { ScrollUp } from './components/ScrollUp';
// import ModalWrapper from './components/ModalWrapper';
import QueriedRecipes from './pages/QueriedRecipes';

function App() {

  let location = useLocation()
  console.log(location)
  // let background = location.state && location.state.background;

  return (
    <Fragment>
      <ScrollUp/>
      <Header/>
      <Switch location={location}>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={QueriedRecipes}/>
        <Route exact path='/recipe/:recipe' component={RecipeDetail}/>
        <Route exact path='/favorites' component={Favorites}/>
      </Switch>
    </Fragment>
  );
}

  // Modal using React Router
 // eslint-disable-next-line no-lone-blocks
 {/* <Switch location={background || location}>
        <Route exact path='/' children={<Home/>}/>
        <Route exact path='/meals' children={<Meals/>}/>
        <Route exact path='/search' children={<Filtered/>}/>
        <Route exact path='/meals/:mealId' children={<MealDetail/>}/>
        <Route export path='/favorites' children={<Favorites/>}/>
      </Switch>
			{background && <Route path='/meals/:mealId' children={<ModalWrapper />} />} */}
    // eslint-disable-next-line no-lone-blocks
    {/* </Provider> */}

export default App;