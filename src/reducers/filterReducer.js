function getFilteredDataRows(filters, data){
    console.log('getFilteredDataRows ' + JSON.stringify(filters));
    const distanceMin = parseInt(filters.distanceMin) || 0;
    const distanceMax = parseInt(filters.distanceMax) || 9999999999;
    const location = filters.location || '';
    return (
        data
        .filter((swim) => swim.location.toLowerCase().includes(location.toLowerCase()))
        .filter((swim) => swim.distance > distanceMin)
        .filter((swim) => swim.distance < distanceMax)
    );
}

const filterReducer = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_FILTERS':
            // console.log('filterChanges are propagated ' + JSON.stringify(action.filters)); 
            const newFilters = Object.assign({}, state.filters, action.filters);
            // console.log('filters are now' + JSON.stringify(newFilters));       
            // console.log('filteredData are now' + JSON.stringify(filteredData));           
            return { filters : newFilters, data: state.data, filteredData: getFilteredDataRows(newFilters, state.data)};
            
        case 'DATA_RECEIVED':
            return {filters : state.filters, data: action.data, filteredData: getFilteredDataRows(state.filters, action.data)};
        default:
            return state
    }
}


export default filterReducer;