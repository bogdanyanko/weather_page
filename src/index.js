import './style.css';
import { backgroundImgSetter } from './modules/background';
import { getWeatherData } from './modules/getWeatherData';
import { updatePageElements} from './modules/updatePageElements';

(function() {
    init('Kyiv');
    const searchButton = document.getElementById("searchButton");
    const searchForm = document.getElementById("searchForm");
    searchButton.addEventListener('click', buttonPress);

    function buttonPress() {    
        init(searchForm.value);
        searchForm.value='';
    }

    async function init(locationName) {
        const weatherData = await getWeatherData(locationName);
        if (weatherData.cod != 404) {
            updatePageElements(weatherData);
            backgroundImgSetter(weatherData);
        }
    }
})();