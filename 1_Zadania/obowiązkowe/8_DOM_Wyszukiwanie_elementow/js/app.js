document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //Zadanie #0
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

});
