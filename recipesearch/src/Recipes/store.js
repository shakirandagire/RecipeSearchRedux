import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
        // composeWithDevTools(
        //     applyMiddleware(thunk)
        //   )
    )
}