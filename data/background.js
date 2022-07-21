
//invoke addListening on chrome's runtime.onInstalled function (will indicate what to listen for and what functionality to implement)
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


// FEATURE 1: Background Color Change
  //Description: once the partyMode extension is turned on, the app will change the background color. 
    //MVP: Change to 1 specified color
    //Stretch: Have the background continuously alternate colors

///testing 1 color: 
let color = '#3aa757';

//create function assigned to an array of preset party colors 
  //LINK TO COLOR PALLETTE: https://www.shutterstock.com/blog/neon-color-palettes
const colors = ['#08F7FE', '#09FBD3', '#FE53BB', '#F5D300'];

//create function that iterates through 
function randomColor() {
  return '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)
}

function setColor(){
  colors.forEach( el => {
    document.getElementById('div').style.backgroundColor = el;
    setTimeout(setColor, 2000);
  });
 
}

setColor();





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