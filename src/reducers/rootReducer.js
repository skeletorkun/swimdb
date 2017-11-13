import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { filterReducer } from './filterReducer'
import { dataReducer } from './dataReducer'
import { formReducer } from './formReducer'
import { cardReducer } from './cardReducer'

const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    filters: filterReducer,
    data: dataReducer,
    form: formReducer,
    selectedId: cardReducer
});

export default rootReducer;