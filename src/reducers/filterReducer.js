// function getFilteredDataRows(filters, data){
//     console.log('getFilteredDataRows ' + JSON.stringify(filters));
//     const distanceMin = parseInt(filters.distanceMin) || 0;
//     const distanceMax = parseInt(filters.distanceMax) || 9999999999;
//     const location = filters.location.toLowerCase();
//     return (
//         data
//         .filter((swim) => swim.location.toLowerCase().includes(location))
//         .filter((swim) => swim.distance > distanceMin)
//         .filter((swim) => swim.distance < distanceMax)
//     );
// }

// const defaultState = {
//     filters : {
//         location: '',
//         distanceMin: 0,
//         distanceMax: 999999
//     },
//     data : [],
//     displayedData : []
// };
// const filteredData = getFilteredDataRows(newFilters, state.data)   


const filterReducer = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_FILTERS':
            console.log('filterChanges are propagated ' + JSON.stringify(action.filters)); 
            const newFilters = Object.assign({}, state.filters, action.filters);
            
            return {filters : newFilters}
        default:
            return state
    }
}

export default filterReducer;