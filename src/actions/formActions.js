import ReactGA from 'react-ga'

export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
  
  ReactGA.event({
    category: 'Action',
    action: 'addSwim',
  });

  console.log('adding a swim ' + JSON.stringify(swim));
  const dataRef = getFirebase().database().ref().child('data');
  var newSwimRef = dataRef.push();
  newSwimRef.set(swim)
    .then(console.log('Success in firebase call.'))
    .catch(error => console.error('Error updating firebase.'));
};

export const updateSwim = (swim) => (dispatch, getState, getFirebase) => {

  ReactGA.event({
    category: 'Action',
    action: 'updateSwim',
  });

  console.log('updating a swim ' + JSON.stringify(swim));
  const dataRef = getFirebase().database().ref().child('data');
  dataRef.child(swim.id).update(swim)
    .then(console.log('Success in firebase call.'))
    .catch(error => console.error('Error updating firebase.'));
};

