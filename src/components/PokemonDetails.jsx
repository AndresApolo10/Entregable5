import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import StatPokemon from './Pokedex/StatPokemon'
import './styles/pokemonDetails.css'
import HeaderPoke from './shared/HeaderPoke'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => setPokeInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokeInfo);

  return (
    <article className='card__details'>
      <HeaderPoke />
      <section className='card__pokemon'>
      <header className={`card__pokemon-header bg-${pokeInfo?.types[0].type.name}`}>
        <img className='card__img' src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <h1 className='card__name'>{name}</h1>
      <div className='card__h3'>
        <h3>Height <br /><span className='card__h3-1'>{pokeInfo?.height}</span></h3>
        <h3>Weight <br /><span className='card__h3-1'>{pokeInfo?.weight}</span></h3>
      </div>
      <div className='card__types'>
          <div className='card__types-3'>
          <h3>Type</h3>
          <ul className='card__types-1'>
                  {
                    pokeInfo?.types.map(slot => (
                        <li className='card__type-list' key={slot.type.url}>{slot.type.name}</li>
                    ))
                  }
          </ul>
          </div>
          <div className='card__types-3'>
          <h3>Abilities</h3>
          <ul className='card__types-1'>
                  {
                    pokeInfo?.abilities.map(slot => (
                        <li className='card__type-list-1' key={slot.ability.url}>{slot.ability.name}</li>
                    ))
                  }
          </ul>
          </div>
      </div>
      <div className='card__stats'>
      <h3>Stats<hr className='card__hr1'/></h3>
      </div>
      <ul className='card__list-stats'>
              {
                  pokeInfo?.stats.map(stat => (
                    <StatPokemon
                      key={stat.stat.url}
                      infoStat={stat}
                      color={pokeInfo?.types[0].type.name}
                    />
                    ))
              }
      </ul>
      </section>
      <footer className='card__footer-move'>
        <div className='card__footer1'>
            <h3>Moves<hr className='card__hr1'/></h3>
        </div>
            <ul className='card__ul'>
                    {
                        pokeInfo?.moves.map(move => (
                          <li className='card__move' key={move.move.url}>{move.move.name}</li>
                        ))
                    }
            </ul>
      </footer>
    </article>
  )
}

export default PokemonDetails