// Zadanie 0
const city = {
    capital: "Warszawa",
    population: 2000000,
    president: "Trzaskowski",
    primeMinister: ["Adam", "Bogdan"]
};
console.log(city.capital + city.population + city.president + city.primeMinister);

const timeMachine = {
    shape: "Portal",
    model: "",
    run : function(date,place){
        console.log("Przeniosłeś sie do ${place} i jest obecnie  ${date}");
    }
};

timeMachine.run("20-11-2030", "Sydney");

//Zadanie 1

const book = {
    title: "Pan Tadeusz",
    author: "test",
    numberofPages: "number"
};
for(const key of book){
    console.log(book[key]);
}

//Zadanie 2

var person = {
    name: 'Leszek',
    age: 27,
    sayHello: function(){
        console.log("hello");
    }
}
console.log(person.name); 
console.log(person.age);
person.sayHello();

//Zadanie 3
const recipe = {
    title: 'Przepis',
    serving: 0

}

recipe.ingredients = [];
recipe.addIngredient = function(ingredient) {
    this.ingredient.push(ingredient);
    this.serving++;
}

recipe.addIngredient('składnik 1');
recipe.addIngredient('składnik 2');

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);


//Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);