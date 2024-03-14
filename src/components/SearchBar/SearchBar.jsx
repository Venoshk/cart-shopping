import React, {useState} from "react";
import { BsSearch } from 'react-icons/bs';
import "./SearchBar.css"

function SearchBar(){

    const [searchValue, setSearchValue] = useState('')

    return(
        <form className="search-bar">
        <input
        onChange={({target}) => setSearchValue(target.value)}
        value={searchValue}
        type="search" 
        placeholder='Buscar produtos'
        className='search__input'
        required
        />
        <button type="submit" className='search__button'>
            <BsSearch/>
        </button>
            
    </form>

    
    )
}

export default SearchBar;