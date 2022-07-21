///testing 1 color: 
let color = '#08F7FE';

//invoke addListening on chrome's runtime.onInstalled function (will indicate what to listen for and what functionality to implement)
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(color);
  console.log("Does this print?"); 
});


// FEATURE 1: Background Color Change
  //Description: once the partyMode extension is turned on, the app will change the background color. 
    //MVP: Change to 1 specified color
    //Stretch: Have the background continuously alternate colors



//create function assigned to an array of preset party colors 
  //LINK TO COLOR PALLETTE: https://www.shutterstock.com/blog/neon-color-palettes
const colorsArr = ['#08F7FE', '#09FBD3', '#FE53BB', '#F5D300'];

//create function that iterates through 
function changeColor(array){
  //iterate through the colors array 
  array.forEach( el => {
    //on each iteration, update the background color of the 'div' to the color at el of colors array 
    document.getElementById('div').style.backgroundColor = el;
  });
  //use setTimeout to create loop of the colors 
 setTimeout(changeColor, 2000);
}







/* 
NOTES: 
  - Functionality: 
    - randomized, interval color change for background
    - add images (confetti, gifs)
    - add image: PARTY MODE (text or image?)
    - play music 
  - Choice: use the extension icon as START/END button 
    - on click -> begin 
    - on on click -> end 

*/ 