const images = [
    "0.jpeg", "1.jpeg", "2.jpeg"
];
const todayImage = images[Math.floor(Math.random()*images.length)];
// html에 이미지 추가하기
const bgImge = document.createElement("img");

bgImge.src = `img/${todayImage}`;
//javascript에서 html 요소를 추가하는 방법에 대해 알 수 있다. 
document.body.appendChild(bgImge);