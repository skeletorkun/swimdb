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
        const dataRef  = getFirebase().database().ref().child('data');
        dataRef.once('value', 
                (response) => {        
                        console.log('Success in firebase call. Fetched data');
                        dispatch(receiveData(response.val()));
                }, 
                (error) => {
                        console.error(error);
                });
};

export const addSwim = (swim) => (dispatch, getState, getFirebase) => {
        const dataRef  = getFirebase().database().ref().child('data');
        var newSwimRef = dataRef.push();
        newSwimRef.set({
                "competition" : "Orkun swim",
                "date" : "05-Jan-2018",
                "distance" : 2300,
                "id" : 1,
                "latitude" : 10.4597466,
                "link" : "http://ucoz.com/tellus/nulla/ut/erat.aspx?hac=sapien&habitasse=in&platea=sapien&dictumst=iaculis&aliquam=congue&augue=vivamus&quam=metus&sollicitudin=arcu&vitae=adipiscing&consectetuer=molestie&eget=hendrerit&rutrum=at&at=vulputate&lorem=vitae&integer=nisl&tincidunt=aenean&ante=lectus&vel=pellentesque&ipsum=eget&praesent=nunc&blandit=donec&lacinia=quis&erat=orci&vestibulum=eget&sed=orci&magna=vehicula&at=condimentum&nunc=curabitur",
                "location" : "AAA",
                "longitude" : -66.5581092
        });
        console.log('Success in firebase call. Added a new Swim ' + newSwimRef);        
}