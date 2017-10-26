export const loadState = () => {
    try{
        console.log('loaded state');
        const serializedState = localStorage.getItem('state');
        if(serializedState === null)
        {
            return undefined;
        }
        const state = JSON.parse(serializedState);        
        console.log('state loaded from local storage ' + serializedState);
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