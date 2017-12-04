export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const DATA_ADDED = 'DATA_ADDED';
export const CARD_SELECTED = 'CARD_SELECTED';
export const CARD_DELETE_REQUESTED = 'CARD_DELETE_REQUESTED';

export const updateFilters = (filters) => ({
        type: UPDATE_FILTERS,
        filters
});

export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
        console.log('adding a swim ' + JSON.stringify(swim));
        const dataRef = getFirebase().database().ref().child('data');
        var newSwimRef = dataRef.push();
        newSwimRef.set(swim);
        console.log('Success in firebase call. Added a new Swim ' + newSwimRef);        
}

export const selectCard = (id) => ({
        type: CARD_SELECTED,
        id: id
});

export const deleteCard = (id) => (dispatch, getState, getFirebase) => {

        try {                
                const isAdmin = getState().firebase.profile.isAdmin;
                const swimRef = getFirebase().database().ref().child('data').child(id);
                if (isAdmin) {                        
                        swimRef.remove();
                        console.log('User is an admin, deleting swim')
                } else {
                        console.log('Only admins can remove data.');                            
                }
        } catch (err) {
                console.error('Sth went wrong during deletion ' + err);
        }
}