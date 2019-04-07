const body = document.querySelector("body");


function paintImage(imgNum){
    const image = new Image();
    image.src = `img/${imgNum}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function generateRandom(){
    const number = Math.floor(Math.random() * 9);
    return number;
}   

function init(){
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

init();