const root = document.getElementById('root');

const changePage = () =>{
const parent = root.parentNode;
root.parentNode.removeChild(root);
let div = document.createElement('div');
div.innerHTML = "🎉🎉🎉🥳    HI   🥳🎉🎉🎉";

div.style.backgroundColor = '#08F7FE';
div.style.left = '50%';
div.style.left = '50%';
div.style.height = "1000px";
div.style.width = '100%';
parent.appendChild(div);
}

chrome.action.setIcon({ "path: /assets/32party-icon.gif" });

root.addEventListener('click',changePage);

// div.body.style.backgroundImage = "handsome-squid";
