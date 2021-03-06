import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { filterReducer } from './filterReducer'
import { formReducer } from './formReducer'
import { cardReducer } from './cardReducer'
import { dialogReducer } from './dialogReducer';

const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    filters: filterReducer,
    formData: formReducer,
    selectedId: cardReducer,
    dialogState: dialogReducer
});

export default rootReducer;