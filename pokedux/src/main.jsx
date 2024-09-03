import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.jsx'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import './index.css'

const store = createStore(pokemonsReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
