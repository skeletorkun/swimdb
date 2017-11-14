export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const DATA_ADDED = 'DATA_ADDED';
export const CARD_SELECTED = 'CARD_SELECTED';

export const updateFilters = (filters) => ({
        type : UPDATE_FILTERS,
        filters
});
    
export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
        console.log('adding a swim ' + JSON.stringify(swim));
        const dataRef  = getFirebase().database().ref().child('data');
        var newSwimRef = dataRef.push();
        newSwimRef.set(swim);
        console.log('Success in firebase call. Added a new Swim ' + newSwimRef);        
}

export const selectCard = (id) =>({
        type: CARD_SELECTED,
        id : id
});