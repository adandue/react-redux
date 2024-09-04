import { createRoot } from 'react-dom/client'
import { pokemonsReducer } from './reducers/pokemons.jsx'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { featuring, logger } from './middlewares/index.jsx'
import App from './App.jsx'
import './index.css'

const composedEnhancers = compose(
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
    applyMiddleware(logger, featuring)
    );

const store = createStore(pokemonsReducer, composedEnhancers);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)