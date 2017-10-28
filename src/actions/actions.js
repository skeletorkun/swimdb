import data from './../../data/data';

export const DATA_RECEIVED = 'DATA_RECEIVED';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';


const receiveData = data => ({
        type: DATA_RECEIVED,
        data
});

export const fetchData = () => {
        console.log('fetching data');
        return receiveData(data);
};
    
export const updateFilters = filters => ({
        type : UPDATE_FILTERS,
        filters
});
    