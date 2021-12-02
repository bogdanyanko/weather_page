async function getWeatherData(locationName) {
    const apiKey = '2cd4b26c587c936bef17fb4d3f5c6686';
    const apiAdress = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=${apiKey}`;
    const response = await fetch(`${apiAdress}`, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

export { getWeatherData };