document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */


//Zadanie 0
     function getDatasInfo(elements){
         console.log(elements);
         let arr = [];
         for(let i = 0; i < elements.length; i++){
             arr.push(elements[i].getAttribute("data-color"));
         }
         console.log(arr);
         return arr;
     }
     getDatasInfo(links);
});

//Zadanie 1
console.log(homeElements);
console.log(childElements);
console.log(banner);
console.log(blocks);
console.log(links);

for(let i = 0; i < childElements.length; i++){
    console.log(childElements[i].tagName);
    console.log(childElements[i].ClassList);
}
for(let i = 0; i < blocks.length; i++){
    console.log(blocks[i].tagName);
    console.log(blocks[i].ClassList);
}
for(let i = 0; i < links.length; i++){
    console.log(links[i].tagName);
    console.log(links[i].ClassList);
}

//Zadanie 2
for(let i = 0; i < blocks.length; i++){
    console.log(blocks[i].innerHTML);
    console.log(blocks[i].outerHTML);
    blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks'
}

//Zadanie 3
var mainFooter = document.getElementById("mainFooter");

function getId(element) {
    console.log(element);
    return element.id;
}

getId(mainFooter);

//Zadanie 4
function getTags(elements) {
    let arr = [];
    for(let i = 0; i < elements.length; i++) {
        arr.push(elements[i].tagName);
    }
    console.log(arr);
    return arr;
}
getTags(childElements);

//Zadanie 5
function getClassInfo(element){
    var classes = [];
    for(let i = 0; i < element.classList.length; i++) {
        classes.push(element.classList[i]);
    }

    return classes;
}
console.log(getClassInfo(banner));

//Zadanie 6
const liElements = document.querySelectorAll('nav li');
const setDataDirection = (elements) => elements.forEach(
    el => el.getAttribute('data-direction') && el.setAttribute('data-direction', 'top')
);
setDataDirection([...liElements]);

function setDataDirection2(elements) {
    for(let i = 0; i < elements.length; i++){
        if(elements[i])
    }
}


