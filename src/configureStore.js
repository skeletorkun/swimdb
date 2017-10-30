import { createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { saveState, loadState } from './localStorage'
import throttle  from 'lodash/throttle'

const configureStore = () => {

    const startingState = loadState() || {filters: {}, data: []};

    const middlewares = [thunk];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger());
    }

    const store = createStore(
        rootReducer, 
        startingState, 
        applyMiddleware(...middlewares)
    )
    ;
    store.subscribe(throttle(()=>{
        saveState({
            data: store.getState().data,
            filters: {} //ignore
        });
    }, 1000));

    return store;
}

export default configureStore;