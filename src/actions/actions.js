import data from './../../data/data';

const receiveData = data => ({
        type: 'RECEIVE_DATA',
        data
});

export const fetchData = () => {
        console.log('fetching data');
        const startingState = {filters: {}, data: data, filteredData: data};
        return receiveData(startingState);
};
    
export const updateFilters = filters => ({
        type : 'UPDATE_FILTERS',
        filters
});
    