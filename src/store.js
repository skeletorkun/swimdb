import {createStore} from 'redux';
import filterReducer from './reducers/filterReducer';
import data from '../data/data'

const defaultState = {filters: {}, data}
const store = createStore(filterReducer, defaultState);

export default store;