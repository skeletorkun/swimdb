export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const DATA_ADDED = 'DATA_ADDED'
export const CARD_SELECTED = 'CARD_SELECTED'
export const ADD_CARD_REQUESTED = 'ADD_CARD_REQUESTED'
export const CARD_EDIT_REQUESTED = 'CARD_EDIT_REQUESTED'
export const SHOW_DELETE_DIALOG = 'SHOW_DELETE_DIALOG'
export const HIDE_DELETE_DIALOG = 'HIDE_DELETE_DIALOG'

export const updateFilters = (filters) => ({
  type: UPDATE_FILTERS,
  filters
});

export const selectCard = (id) => ({
  type: CARD_SELECTED,
  id
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

export const flagCard = (id) => (dispatch, getState, getFirebase) => {
  try {
    const swimRef = getFirebase().database().ref().child('data').child(id);
    swimRef.isFlagged = true;
    swimRef.update({ isFlagged: true });
    console.log('Swim is flagged');
  } catch (err) {
    console.error('Sth went wrong during flagging ' + err);
  }
}

export const editCard = (swim) => ({
  type: CARD_EDIT_REQUESTED,
  swim
});

export const addCardRequest = () => {
  return {
    type: ADD_CARD_REQUESTED,
    swim : {}
  }
}

export const showDeleteDialog = (swimId) =>({
    type: SHOW_DELETE_DIALOG,
    modalType: 'DELETE',
    modalProps: { 
        open : true,
        swimId,
    }
})
