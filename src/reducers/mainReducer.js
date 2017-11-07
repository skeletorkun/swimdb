import {UPDATE_FILTERS, DATA_RECEIVED, DATA_ADDED} from '../actions/actions'

export const getFilteredDataRows = (data, filters) => {
    console.log('getFilteredDataRows ' + JSON.stringify(filters));
    const distanceMin = parseInt(filters.distanceMin) || 0;
    const distanceMax = parseInt(filters.distanceMax) || 9999999999;
    const location = filters.location || '';

    var values = []
    for(var key in data){
        values.push({...data[key], id: key});
    };

    return (
        values
        .filter((swim) => swim.location.toLowerCase().includes(location.toLowerCase()))
        .filter((swim) => swim.distance > distanceMin)
        .filter((swim) => swim.distance < distanceMax)
    );
}

export const swims = (data = {}, action) => {
    switch(action.type){
        case DATA_RECEIVED:
            return action.data;
        default:
            return data;
    }
}

export const filters = (filters = {}, action) => {
    switch(action.type){
        case UPDATE_FILTERS:
            const newFilters = Object.assign({}, filters, action.filters);
            return newFilters;            
        default:
            return filters;
    }
}
