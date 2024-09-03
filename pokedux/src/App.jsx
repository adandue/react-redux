import { Col } from 'antd'
import { Searcher } from './Components/Searcher'
import PokemonList from './Components/PokemonList'
import './App.css'

function App() {
const logo = 'https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg'

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  )
}

export default App
