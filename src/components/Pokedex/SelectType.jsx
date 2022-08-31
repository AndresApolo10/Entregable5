import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style/selectType.css'

const SelectType = ({optionType, setOptionType, setPokeSearch}) => {

  const [listTypes, setListTypes] = useState()
  
  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
        .then(res => setListTypes(res.data.results))
        .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')
  }

  return (
    <select className='option' /*value={optionType}*/ onChange={handleChange}>
        <option value="All">All Pokemons</option>
        {
          listTypes?.map(type => (
            <option key={type.name} value={type.name}>{type.name}</option>
          ))   
        }
    </select>
  )
}

export default SelectType