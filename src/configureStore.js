import { createStore, applyMiddleware, compose} from 'redux'
import { createLogger } from 'redux-logger'
import firebase from 'firebase'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { fbConfig, rrfConfig } from './config'

const configureStore = (initialState = {}) => {

    firebase.initializeApp(fbConfig);
    console.log('Firebase initialized');

    const middlewares = [thunk.withExtraArgument(getFirebase)];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger());
    }
    
    const store = createStore(
        rootReducer, 
        initialState,
        compose(
            applyMiddleware(...middlewares),
            reactReduxFirebase(firebase, rrfConfig)
        )
    );

    return store;
}

export default configureStore;