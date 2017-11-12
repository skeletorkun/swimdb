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
    
export const fetchData = () => (dispatch, getState, getFirebase) => {   
        const dataRef  = getFirebase().database().ref().child('data');
        dataRef.on('value', 
                (response) => {        
                        console.log('Success in firebase call. Fetched data');
                        dispatch(receiveData(response.val()));
                }, 
                (error) => {
                        console.error(error);
                });
};

export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
        console.log('adding a swim ' + JSON.stringify(swim));
        const dataRef  = getFirebase().database().ref().child('data');
        var newSwimRef = dataRef.push();
        newSwimRef.set(swim);
        console.log('Success in firebase call. Added a new Swim ' + newSwimRef);        
}