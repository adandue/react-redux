import { createRoot } from 'react-dom/client'
import { pokemonsReducer } from './reducers/pokemons.jsx'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import App from './App.jsx'
import './index.css'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = compose(applyMiddleware(thunk))

const store = createStore(pokemonsReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(), composedEnhancers)

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)