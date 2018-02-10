import { CARD_EDIT_REQUESTED, ADD_CARD_REQUESTED } from '../actions/actions'
import { combineForms } from 'react-redux-form'

const swimToEditReducer = (swim = {}, action) => {
    switch(action.type){
        case CARD_EDIT_REQUESTED:
            return action.swim;
        case ADD_CARD_REQUESTED:
            return {}; //clear swimToEdit, form data
        default:
            return swim;
    }
}

export const formReducer = combineForms( {
    swimToEdit : swimToEditReducer
}, 'formData');