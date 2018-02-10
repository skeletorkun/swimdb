import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase from 'firebase'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { fbConfig, rrfConfig } from './firebase'

const configureStore = (initialState = {}) => {

    firebase.initializeApp(fbConfig);
    console.log('Firebase initialized');

    const middlewares = [thunk.withExtraArgument(getFirebase)];
       
    const store = createStore(
        rootReducer, 
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares),
            reactReduxFirebase(firebase, rrfConfig)
        )
    );

    return store;
}

export default configureStore;