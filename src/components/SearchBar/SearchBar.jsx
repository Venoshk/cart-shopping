import React, {useState, useContext} from "react";
import { BsSearch } from 'react-icons/bs';
import "./SearchBar.css"
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../context/AppContexts";

function SearchBar(){

    const {setProducts, setLoading} = useContext(AppContext);
    
    const [searchValue, setSearchValue] = useState('');

    const hendleSearch = async(e) =>{
        e.preventDefault()

        setLoading(true);

        const products = await fetchProducts(searchValue);
    
        setProducts(products);
        setLoading(false);
        setSearchValue('');
    }

    return(
        <form className="search-bar" onSubmit={hendleSearch}>
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