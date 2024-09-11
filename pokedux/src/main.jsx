import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk'
import App from './App.jsx'
import './index.css'
import { rootReducer } from './reducers/rootReducer.jsx'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composeAlt(applyMiddleware(thunk))

const store = createStore(rootReducer, composedEnhancers)

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)