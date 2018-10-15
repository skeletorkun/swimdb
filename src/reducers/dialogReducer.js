import { SHOW_DELETE_DIALOG, HIDE_DELETE_DIALOG } from '../actions/actions'

const initialState = {
    modalType: null,
    modalProps : {}
};
export const dialogReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_DELETE_DIALOG:
            return {
              modalType: action.modalType,
              modalProps: action.modalProps
            };
        case HIDE_DELETE_DIALOG:
            return initialState;
        default:
            return state;
    }
}