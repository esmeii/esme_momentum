const clock = document.querySelector("#clock");

//인터벌 : 매번 일어나야 하는 일,
//setIneterval
function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000); //5초마다 한 번씩 함수를 호출한다.

setTimeout(sayHello, 5000); //5초 후에 이 함수를 호출한다.

//Data object 를 사용해 본다.
//getHours, getMinutes
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getMinutes()).padStart(2,"0");
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //immediately calling clock
setInterval(getClock, 1000);

//padStart(20, "x") //20개의 x 다음에 
