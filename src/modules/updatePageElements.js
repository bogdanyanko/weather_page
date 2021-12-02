function updateElementNoDescr(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function updateElementWithDescr(elementId, description, value, scaleValue) {
    const element = document.getElementById(elementId);
    element.innerText = `${description}: ${value}${scaleValue}`;
    
}

function updatePageElements(weatherData) {
    
    updateElementNoDescr('cityname', weatherData.name);
    updateElementNoDescr('description', weatherData.weather[0].description);

    updateElementWithDescr('temperature', 'Temperature', weatherData.main.temp, '°C');
    updateElementWithDescr('tempFeelsLike', 'Feels like', weatherData.main.feels_like, '°C');
    updateElementWithDescr('humidity', 'Humidity', weatherData.main.humidity, '%');
    updateElementWithDescr('windSpeed', 'Wind speed', weatherData.wind.speed, 'm/s');
    updateElementWithDescr('pressure', 'Pressure', weatherData.main.pressure, 'hPa');
}

export { updatePageElements };