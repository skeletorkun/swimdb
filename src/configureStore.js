import { createStore } from 'redux'
import filterReducer from './reducers/filterReducer'
import { saveState, loadState } from './localStorage'
import throttle  from 'lodash/throttle'
import data from '../data/data'

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    if(!console.group){
        return rawDispatch;
    }

    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color:gray', store.getState());
        console.log('%c action', 'color:blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color:green',store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}

const configureStore = () => {
    const defaultState = loadState() || {filters: {}, data: data, filteredData: data}
    const store = createStore(filterReducer, defaultState);
    
    if(process.env.NODE_ENV !== 'production'){
        store.dispatch = addLoggingToDispatch(store);
    }
    
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