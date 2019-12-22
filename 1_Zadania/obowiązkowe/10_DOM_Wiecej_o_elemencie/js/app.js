document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     const ex5 = document.getElementsByClassName("ex5")[0];

     const ex5children = ex5children[1].children;

     for(let i = 0; i < ex5children.lemgth; i++) {
         if(i % 2 === 0)
            ex5children[i].style.backgroundColor = "green";

         if(i % 3 === 0)
            ex5.style.textDecoration;
     }
});