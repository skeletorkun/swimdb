import {CARD_SELECTED} from '../actions/actions'

export const cardReducer = (selectedId = '', action) => {
    switch(action.type){
        case CARD_SELECTED:
            return selectedId !== action.id ? action.id : '';
        default:
            return selectedId;
    }
}