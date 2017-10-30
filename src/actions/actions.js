import axios from 'axios'
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const DATA_ADDED = 'DATA_ADDED';

const receiveData = (data) => ({
        type: DATA_RECEIVED,
        data
});

export const updateFilters = (filters) => ({
        type : UPDATE_FILTERS,
        filters
});

const addData = (data) => ({
        type : DATA_ADDED,
        data
});
    
export const fetchData = () => (dispatch, getStore) => {        
        return axios.get('/data').then((response) => {
                console.log('Success in ajax call. Fetched data');
                dispatch(receiveData(response.data));
        });
};

export const addSwim = () => (dispatch) => {
        return axios.post('/add', {}).then((response) => {
                console.log('Success in ajax call. Added a new Swim ' + response.data);
                dispatch(addData(response.data));
        })
}