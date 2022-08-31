import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './components/Home'
import Pokedex from './components/Pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />

          <Route element={<ProtectedRoutes />} >
            <Route path='/pokedex' element={<Pokedex />}/>
            <Route path='/pokedex/:name' element={<PokemonDetails />} />
          </Route>

        </Routes>
    </div>
  )
}

export default App
