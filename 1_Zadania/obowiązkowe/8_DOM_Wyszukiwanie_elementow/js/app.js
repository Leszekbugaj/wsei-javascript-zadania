document.addEventListener("DOMContentLoaded", function () {
  
    //Zadanie 0
    const titleEl = document.querySelector("div .title");

    function getDataAnimation(element) {
        return element.getAttribute("data-animation");
    }

    console.log(getDataAnimation(titleEl));

    const home = document.querySelector("#home");
    const home2 = document.getElementById("home");
    const liElemet = document.querySelector("li[data-direction]");
    const element = document.querySelector(".block");

    const list = dociment.getElementByTagName("nav li");
    const paragraphs = document.querySelectorAll("div p");
    const divs = document.querySelectorAll("article div");

    console.log(list);
    console.log(paragraphs);
    console.log(divs);


    const article = document.querySelector("article.first");
    let result = article.getElementByTagName("h1");
    console.log(result.length);

    //Zadanie 1
    
    const elementById1 = document.getElementById('home');
    console.log(elementById1);
    const elementById2 = document.querySelector('#home');
    console.log(elementById2);

    const elementByLi = document.getElementsByTagName('li')[0];
    console.log(elementByLi);
    
    const elementByClass = document.getElementsByClassName('block')[0];
    console.log(elementByClass);

    //Zadanie 2
    
    const liElementsInNav = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
    console.log(liElementsInNav);
    
    const divs = document.getElementsByTagName('div');
    let paragraphs = [];
    for(let i=0; i<divs.length; i++) {
        let paragraphInDiv = divs[i].getElementsByTagName('p');
        for(let j=0; j<paragraphInDiv.length; j++)
            paragraphs.push(paragraphInDiv[j]);
    }
    console.log(paragraphs);

    const articleDivs = document.getElementsByTagName('article')[0].querySelectorAll('div');
    console.log(articleDivs);

    //Zadanie 3
    
    const articleInFirst = document.querySelector('article.first').querySelectorAll('h1');
    console.log(articleInFirst.length);
});
