import React from 'react'
import './style/searchInput.css'

const SearchInput = ({setPokeSearch, setOptionType}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input className='input__search' placeholder='Search Pokemon' id='searchText' type="text" />
        <button className='search__btn'>Search</button>
    </form>
  )
}

export default SearchInput