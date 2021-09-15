import React, {Fragment, useEffect} from 'react'
import {getFavorites} from '../actions/recipeActions';
import {useSelector} from'react-redux';
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import hero from '../assets/home-background.jpeg';

const Navbar = () => {

    const dispatch = useDispatch()

    const favs = useSelector(state=> state.recipes.favorites)    

    useEffect(() => {
        dispatch(getFavorites(favs))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    return (
      <Fragment>
      <div className='heroContainer'>
        <img 
          className='hero'
          src={hero}
          alt='visual-of-food'
        />
      </div>
       
      <nav id='navbar'>
        <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
          {favs && favs.length ? 
              (<NavLink to='/favorites'>
                  Favorites
        </NavLink>):null
            }
        </div>
      </nav>
      </Fragment>
       
    )
}

export default Navbar
    