import { createStore, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise'
import filterReducer from './reducers/filterReducer'
import { saveState, loadState } from './localStorage'
import throttle  from 'lodash/throttle'

const configureStore = () => {

    const startingState = loadState() || {filters: {}, data: [], filteredData: []};

    const middlewares = [promise];
    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger());
    }

    const store = createStore(
        filterReducer, 
        startingState, 
        applyMiddleware(...middlewares)
    )
    ;
    store.subscribe(throttle(()=>{
        saveState({
            data: store.getState().data,
            filteredData: store.getState().data, // render all, ignore
            filters: {} //ignore
        });
    }, 1000));

    return store;
}

export default configureStore;