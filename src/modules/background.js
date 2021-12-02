import clearSkyImg from '../img/ClearSky.jpg';
import cloudsImg from '../img/Clouds.jpg';
import mistImg from '../img/Mist.jpg';
import rainImg from '../img/Rain.jpg';
import snowImg from '../img/Snow.jpg';
import thunderImg from '../img/Thunder.jpg';

function backgroundImgSetter(weatherData) {
    let backgroundImg = new Image();
    let $body = document.body;
    let weatherId = weatherData.weather[0].id; 
    
    if (200 <= weatherId && weatherId <= 232) {
        backgroundImg.src = thunderImg;
    }
    else if (300 <= weatherId && weatherId <= 321) {
        backgroundImg.src = rainImg;
    }
    else if (500 <= weatherId && weatherId <= 531) {
        backgroundImg.src = rainImg;
    }
    else if (600 <= weatherId && weatherId <= 622) {
        backgroundImg.src = snowImg;
    }
    else if (701 <= weatherId && weatherId <= 781) {
        backgroundImg.src = mistImg;
    }
    else if (weatherId == 800) {
        backgroundImg.src = clearSkyImg;
    }
    else if (801 <= weatherId && weatherId <= 804) {
        backgroundImg.src = cloudsImg;
    }
    
    $body.style.backgroundImage = `url(${backgroundImg.src})`;
}

export { backgroundImgSetter };