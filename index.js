// Write your code here!

let elementToRemove = document.querySelector("main#main");
elementToRemove.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Andy is the champion!";
