
export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
  console.log('adding a swim ' + JSON.stringify(swim));
  const dataRef = getFirebase().database().ref().child('data');
  var newSwimRef = dataRef.push();
  newSwimRef.set(swim)
    .then(console.log('Success in firebase call.'))
    .catch(error => console.error('Error updating firebase.'));
}

export const updateSwim = (swim) => (dispatch, getState, getFirebase) => {
  console.log('updating a swim ' + JSON.stringify(swim));
  const dataRef = getFirebase().database().ref().child('data');
  dataRef.child(swim.id).update(swim)
    .then(console.log('Success in firebase call.'))
    .catch(error => console.error('Error updating firebase.'));
}

