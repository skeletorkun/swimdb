import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { filters, swims } from './mainReducer'
import { formReducer } from './formReducer'

const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    filters: filters,
    data: swims,
    form: formReducer,
});

export default rootReducer;