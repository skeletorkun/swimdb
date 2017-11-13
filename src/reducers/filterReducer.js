import {UPDATE_FILTERS} from '../actions/actions'

export const filterReducer = (filters = {}, action) => {
    switch(action.type){
        case UPDATE_FILTERS:
            const newFilters = Object.assign({}, filters, action.filters);
            return newFilters;            
        default:
            return filters;
    }
}
