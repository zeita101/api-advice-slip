const API_URL = "https://api.adviceslip.com/advice";

function get(url) {return fetch(url).then(resp => resp.json())}

const API = { get }

const fontType = ["Roboto Mono", "Roboto Slab", "Abril Fatface", "Notable", "Bungee"];
const colours = ["#FFCDD2", "#FCE4EC", "#F3E5F5", "#8C9EFF", "#90CAF9", "#80D8FF", "#80DEEA", "#B2DFDB", "#69F0AE", "#AED581", "#AED581", "#FFC400", "#BCAAA4", "#90A4AE"];
const quoteP = document.querySelector("h2#quote");
const bground = document.querySelector("body");

//Run the 'get' method in API object
function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

function addQuote(quote) {
    quoteP.innerText = quote;
    let fontsNum = Math.floor(Math.random()*fontType.length);
    let coloursNum = Math.floor(Math.random()*colours.length);
    quoteP.style.fontFamily = fontType[fontsNum];
    bground.style.backgroundColor = colours[coloursNum]
}

const reloadButton = document.querySelector("button#reload")
reloadButton.addEventListener("click", ()=> getQuotes())


//Button Design
// var $button = document.querySelector('.button');
// $button.addEventListener('click', function() {
//   var duration = 0.3,
//       delay = 0.08;
//   TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
//   TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
//   TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
// });
//End Button Design

document.body.onload = getQuotes


