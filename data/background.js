let color = '#3aa757';

//create function assigned to an array of preset party color 
//LINK TO COLOR PALLETTE: https://www.shutterstock.com/blog/neon-color-palettes
const colors = ['#08F7FE', '#09FBD3', '#FE53BB', '#F5D300'];

//create function that changes background by iterating through color array

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});





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