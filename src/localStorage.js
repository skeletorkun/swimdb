export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null)
        {
            console.log('state not found in local storage');
            return undefined;
        }
        const state = JSON.parse(serializedState);        
        console.log('state loaded from local storage ');
        return state;
    }
    catch(err){
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        console.log('saving state');
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch(err){
        //ignore
    }
}