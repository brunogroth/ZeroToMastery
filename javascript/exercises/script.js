//////////////////////////////////////////////////////FUNCTIONS


function checkDriverAge() {
    alert("THIS IS A KEYLESS CAR. It will only let you drive if you are over 18.");
    var a = prompt("Please inform your age.");
    var age = Number(a);

    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off.");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}
var checkDriverAge2 = function() {
    alert("THIS IS A KEYLESS CAR. It will only let you drive if you are over 18.");
    var a = prompt("Please inform your age.");
    var age = Number(a);

    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off.");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}

function checkDriverAge3(a) {
    console.log("THIS IS A KEYLESS CAR. It will only let you drive if you are over 18.");
    var age = Number(a);

    if (age < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off.");
    } else if (age === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
            console.log("Powering On. Enjoy the ride!");
    }
}

//rodar no terminal:
//checkDriverAge();
//checkDriverAge3(92);


//////////////////////////////////////////////////////ARRAYS


//text array
var array = ["one", "two", "banana", "monkey", "soap", "dinner", "monday"];
console.log(array);

//numbers array
var numbers= [1, 2, 3, 4];
console.log(numbers);

//booleans array
var booleans = [true, false, true, false];
console.log(booleans);

//function array
var functionList = [function apple(){
    console.log("apple");
}];
console.log(functionList);

//everything mixed array
var mixedList = ["apples", 3, undefined, true, function apple(){console.log("applepie")}];
console.log (mixedList);

//ARRAY OF ARRAY

var tuberculos = [
        ["apples", "bananas", "strawberrys", "watermelon", "melon"], // [0][x]
        ["house", "apartment", "streets", "shoppings", "parks"], // [1][x]
        ["january", "february", "march", "april", "may"] // [2][x]
    ];

console.log(tuberculos[0][2]); // strawberrys
console.log(tuberculos[2][2]); // march

//tuberculos.pop();
//tubeculos.sort();
//tuberculos.shift();
//tuberculos.concat();

//---------------------------------OBJETS-----------------------------------------

var person = {
    name:"John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"]
};

// add an position in the object:

// user.favoriteFood = "Strogonoff";
/*
    user = {
    name:"John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
                favoriteFood: "Strogonoff",
}; */

var list = [
    {
        username: "bruno.groth",
        password: "bruno123"

    },
    {
        username: "fabio.dantas",
        password: "fabiofabio987"
    },
]

//função no objeto kkkkkkkkkkk q locura
// CHAMA-SE METHOD.  a method is an function used in an object
var loucuraTotal = {
    name: "coisa doida",
    age:"milenios de anos",
    funcao: function(){
        var idade = prompt("informe a idade aqui");
        if(idade>=18){
            console.log("a tua idade é "+idade+" e vc é maior de idade vai la vai");
        }else{
            console.log("a tua idade é "+idade+" e vc é menor de idade blz?");
        }
    }
}

