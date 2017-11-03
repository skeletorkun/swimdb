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
    
export const fetchData = () => (dispatch, getState, getFirebase) => {   
        const rootRef  = getFirebase().database().ref().child('data');
        rootRef.once('value', (response) => {        
                console.log('Success in firebase call. Fetched data');
                dispatch(receiveData(response.val()));
        }, 
        (error) => {
                console.error(error);
        });
};

export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
        return firebase.push('/add', swim).then((response) => {
                console.log('Success in firebase call. Added a new Swim ' + response.data);
                dispatch(addData(response.data));
        })
}