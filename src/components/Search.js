import React, {useState} from 'react'
import { searchIt } from '../actions/recipeActions'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

const Search = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        // if(text === ''){
        //     alert('Enter Text');
        // }else{
            searchIt(text);
            setText({text: ''})
        // }
    }
    return (
        <div className='yeah'>
            <form 
                className='searchCont' 
                onSubmit={onSubmit}
            >
                <input 
                    type='text' 
                    className='searchBar' 
                    onChange={onChange} 
                    value={text} 
                    placeholder='enter a meal' 
                    name='search'
                />
                <Link to={`/search?q=${text}`}>
                    <button 
                        onClick={()=> dispatch(searchIt(text))}
                        className='btn-search'
                        >Search
                    </button>  
                </Link>
            </form>
        </div>
    )
}

export default Search