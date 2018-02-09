import { CARD_EDIT_REQUESTED } from '../actions/actions'
import { combineForms, actions } from 'react-redux-form'

export const swimToEditReducer = (swim = {}, action) => {
    switch(action.type){
        case CARD_EDIT_REQUESTED:
            return action.swim;
        default:
            return swim;
    }
}

export const formReducer = combineForms( {
    swimToEdit : swimToEditReducer
}, 'formData');