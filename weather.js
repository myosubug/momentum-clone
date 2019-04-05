const COORDS = 'coords';
const API_KEY = "1f366cd0c316581ff087c2f2f92fea51";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(function(response){
        return response.json();
    }).then(function(json){
        const weatherStatus = json.weather[0].description;
        const place = json.name;
        console.log(json);
        weather.innerText = `${weatherStatus} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj = {
        latitude : lat,
        longitude : lon
    };
    saveCoords(coordsObj);
    getWeather(lat, lon);
}

function handleGeoError(){
    console.log("can't access location!");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
};


init();