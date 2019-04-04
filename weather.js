const COORDS = 'coords';
const API_KEY = "1f366cd0c316581ff087c2f2f92fea51";

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

    }
}

function init(){
    loadCoords();
};


init();