// Write your code here!

let element = document.getElementById('main')
element.remove()

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Qing is the champion!";

document.body.appendChild(newHeader);

newHeader.style.textAlign = 'center';

newHeader.style.backgroundColor = "Black";
newHeader.style.color = "White";