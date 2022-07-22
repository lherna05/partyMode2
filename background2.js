const root = document.getElementById('root');

const changePage = () =>{
const parent = root.parentNode;
root.parentNode.removeChild(root);
let div = document.createElement('div');
div.innerHTML = "🎉🎉🎉🥳    YOU FIGURED IT OUT! NOW IT'S TIME TO PARTY!   🥳🎉🎉🎉";
div.style.backgroundColor = '#08F7FE';
// div.style.fontSize = 'x-large';
// div.style.fontFamily = 'Impact,Charcoal,sans-serif';
// div.style.color = '#FE53BB00';

div.style.left = '50%';
div.style.left = '50%';
div.style.height = "1000px";
div.style.width = '100%';
parent.appendChild(div);
}

// chrome.action.setIcon({ path: "/assets/16party.jpeg" });

root.addEventListener('click',changePage);

// div.body.style.backgroundImage = "handsome-squid";
