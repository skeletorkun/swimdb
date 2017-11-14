
const countryFilter = (swimLocation, value) =>{
    
    return swimLocation.toLowerCase().includes(value.toLowerCase());
}

export const getFilteredDataRows = (data, filters) => {
    console.log('getFilteredDataRows ' + JSON.stringify(filters));
    const distanceMin = parseInt(filters.distanceMin, 10) || 0;
    const distanceMax = parseInt(filters.distanceMax, 10) || 9999999999;
    const location = filters.location || '';

    var values = []
    for(var key in data){
        values.push({...data[key], id: key});
    };

    return (
        values
        .filter((swim) => countryFilter(swim.location.country, location))
        .filter((swim) => swim.distance > distanceMin)
        .filter((swim) => swim.distance < distanceMax)
    );
}