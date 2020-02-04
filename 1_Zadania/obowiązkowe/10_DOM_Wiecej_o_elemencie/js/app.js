document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
     //Zadanie 0
    
     const ex5 = document.getElementsByClassName("ex5")[0];

     const ex5children = ex5children[1].children;

     for(let i = 0; i < ex5children.lemgth; i++) {
         if(i % 2 === 0)
            ex5children[i].style.backgroundColor = "green";

         if(i % 3 === 0)
            ex5.style.textDecoration;
     }
    
    //Zadanie 1

    const ex1 = document.getElementsByClassName('ex1')[1].childNodes;
    let children = [];
    for(let i=0; i<ex1.length; i++) 
        children.push(ex1[i].childNodes);

    children[5][3].style.backgroundImage = "url('assets/img/edge.png')";
    children[7][3].style.backgroundImage = "url('assets/img/firefox.png')";

    children[3][5].textContent ='Chrome';
    children[7][5].textContent = "Firefox";

    children[3][3].style.width = "100px";
    //console.log(children);
    //Kod został dopisany do pliku index.html dzieje się tak, ponieważ ten plik jest plikiem edytowanym
    //nie plik arkuszu

    //Zadanie 2
    const ex2 = document.getElementsByClassName('ex2')[0];
    console.log(ex2);
    const list = ex2.querySelectorAll('span');
    list[0].innerHTML = "Tomasz Orpik";
    list[1].innerHTML = "zielony";
    list[2].innerHTML = "Spaghetti";

    //Zadanie 3

    const ex3 = document.getElementsByClassName('ex3')[0];
    console.log(ex3);
    
    ex3.getElementsByTagName('ul')[0].className = "menu";

    let liEl = ex3.querySelectorAll('li');
    for(let i=0; i<liEl.length; i++) {
        if(liEl[i].className === "error") {
            liEl[i].classList.remove("error");
        }
        liEl[i].classList.add("menuElement");
    }

    //Zadani 4
    const ex4 = document.getElementsByClassName('ex4')[0];
    console.log(ex4);
    
    let list4 = ex4.querySelectorAll('li');
    for(let i=0; i<list4.length; i++)
        list4[i].setAttribute("data-id", i+1);
});
