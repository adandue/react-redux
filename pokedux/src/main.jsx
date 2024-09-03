import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import './index.css'

const store = createStore(pokemonsReducer)

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
