const quotes = [ //object array
    {
        quote: "sample1",
        author: "pes",
    },
    {
        quote: "sample2",
        author: "pes",
    },
    {
        quote: "sample3",
        author: "pes",
    },
    {
        quote: "sample4",
        author: "pes",
    },
    {
        quote: "sample5",
        author: "pes",
    },
    {
        quote: "sample6",
        author: "pes",
    },
    {
        quote: "sample7",
        author: "pes",
    },
    {
        quote: "sample8",
        author: "pes",
    },
    {
        quote: "sample9",
        author: "pes",
    },
    {
        quote: "sample10",
        author: "pes",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//0 부터 6까지 랜덤하게 접근하는 함수가 필요하다

Math.random()*10;
Math.round(); //소수점을 제거해 준다.
Math.ceil(1.1); //2
Math.ceil(1.0) //1
Math.floor(1.9) //1

Math.floor(Math.random()*10);
const todayQuoate = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todayQuoate.quote;
author.innerText=todayQuoate.author;


