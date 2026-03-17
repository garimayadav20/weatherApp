(async function() {
    const url = 'https://weather-api167.p.rapidapi.com/api/weather/forecast?place=London%2CGB&cnt=3&units=standard&type=three_hour&mode=json&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1589af0146msh59f56268357cc3fp1186f4jsn3ee8973c8012',
            'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
})();