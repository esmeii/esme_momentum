//화면에 날씨를 출력
//navigator.geolocation.gecurrentposition()


const API_KEY = "6486086fd76ee69ff4d0a30743e5c034";

function onGeoOk(position){
    navigator.geolocation.getCurrentPosition();
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        const weather = document.querySelector("#weather spam:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Can't fnd you. No weather for you");
}
//openweather.org 에서 계정을 만들고 api를 생성한다. 
