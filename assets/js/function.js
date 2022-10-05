const resultado = document.querySelector('#resultado');

//arrow function não acessa 'arguments'

let myFunc = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc.showArguments(
    "BMW",
    "AUDIO", 
    "MERCEDES",
    "BENTLEY", 
    "FERRARI", 
    "LAMBURGHINI"
)


let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

// myFunc.showArguments2(
//     "Corsa",
//     "Escort", 
//     "Uno",
//     "Santana", 
//     "Gol", 
//     "Kombi"
// );

let user = {
    name: "Daniel",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },
    usandoNominal() {
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },
}

user.usandoArrow();
user.usandoNominal();

let soma = (a,b) => {
    console.log(a+b);
};

let soma2 = function (a,b){
    console.log(a+b);
};

//new soma(50,20); // not constructor
new soma2(50,20);