
const countryFilter = (swimLocation, value) =>{
    return swimLocation.toLowerCase().includes(value.toLowerCase());
};

const monthFilter = (swimMonth, value) => (value === '' || value === 'Any' || swimMonth === value);

const distanceFilter = (swimDistances, filterDistance) => {
    
    const [min, max] = filterDistance;
    const filterMin = parseInt(min, 10) || 0;
    const filterMax = parseInt(max, 10) || 9999999999;

    const distances = swimDistances.split(',').map(v => parseInt(v, 10)).sort().filter(v => !isNaN(v));
    
    // if any of the distances is within range of the filters, return true
    for(var i in distances){
        if(filterMin <= distances[i] && filterMax >= distances[i])
            return true;
    }
    
    return false;
};

export const getFilteredDataRows = (data, filters) => {
    console.log('getFilteredDataRows ' + JSON.stringify(filters));

    const location = filters.location || '';

    var values = [];
    for(var key in data){
        values.push({...data[key], id: key});
    };

    return (
        values
        .filter((swim) => countryFilter(swim.location.country, location))
        .filter((swim) => distanceFilter(swim.distance, filters.distance))     
        .filter((swim) => monthFilter(swim.month, filters.month))
    );
};