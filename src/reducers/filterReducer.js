import {UPDATE_FILTERS} from '../actions/actions'

const defaultFilters = {
    location: '',
    distance: [],
    month: ''
};

export const filterReducer = (filters = defaultFilters, action) => {
    switch(action.type){
        case UPDATE_FILTERS:
            const newFilters = Object.assign({}, filters, action.filters);
            return newFilters;            
        default:
            return filters;
    }
}
