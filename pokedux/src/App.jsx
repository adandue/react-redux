import { useEffect } from 'react'
import { Col, Spin } from 'antd'
import { Searcher } from './Components/Searcher'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PokemonList from './Components/PokemonList'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import './App.css'

function App() {
const logo = 'https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg'

const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
// const loading = useSelector(state => state.ui.loading)
const loading = false
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchPokemonsWithDetails())
}, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {
        loading ? (
          <Col offset={12}>
            <Spin spinning size='large' />
      </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  )
}



export default App
