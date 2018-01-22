import { CARD_EDIT_REQUESTED } from '../actions/actions'
import { combineForms } from 'react-redux-form'

export const formEditReducer = (swim = {}, action) => {
    switch(action.type){
//         case CARD_EDIT_REQUESTED:
//             return action.swim;
        default:
            return {competition: 'stuff'};
    }
}

export const formReducer = combineForms({
    swimToEdit : formEditReducer
});