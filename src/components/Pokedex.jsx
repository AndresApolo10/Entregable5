import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './Pokedex/PokemonCard'
import { useSelector } from 'react-redux'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import HeaderPoke from './shared/HeaderPoke'
import './styles/pokedex.css'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
      if(optionType !== 'All'){
        const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
        axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
        })
        .catch(err => console.log(err)) 
      } else if(pokeSearch){
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

        const obj = {
          results: [{url}]
        }
        setPokemons(obj)
      } else {
        const URL = 'https://pokeapi.co/api/v2/pokemon'
        axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
      }
  }, [pokeSearch, optionType])

  const nameTrainer = useSelector(state => state.nameTrainer)

  return (
    <div>
      <HeaderPoke />
      <h2 className='title__h2'>Welcome {nameTrainer}, <span className='title__span'>Catch them all.</span></h2>
      <div className='cards__searchs'>
        <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
        <SelectType 
          setPokeSearch={setPokeSearch} 
          optionType={optionType} 
          setOptionType={setOptionType}/>
      </div>
      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex