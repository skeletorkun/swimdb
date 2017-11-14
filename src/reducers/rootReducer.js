import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { filterReducer } from './filterReducer'
import { formReducer } from './formReducer'
import { cardReducer } from './cardReducer'

const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    filters: filterReducer,
    form: formReducer,
    selectedId: cardReducer
});

export default rootReducer;