var user = {
    username: "bruno.groth",
    password: "bruno123"
};

var database = [
    {
        username: "bruno.groth",
        password: "bruno123"
    },
    {
        username: "andrei.hills",
        password: "andreiandrei"
    },
    {
        username: "tomas.payne",
        password: "tompayne*"
    }
];

var newsfeed = [
    {
        username: "Rodrigo Azevedo",
        timeline: "mas que fome pia que hora que é o intervalo"
    },
    {
        username: "Luscas",
        timeline: "ba não sei meu cpf kkkkkk"
    },
    {
        username: "gabriel cardon",
        timeline: "seloco achei que o rodrigão tinha 3m altura"
    }  
];

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("Whats is your password?");

function isUserValid(username, password){
    for(var i = 0; i<=database.length; i++ ){

        if(username === database[i].username
            && password === database[i].password){
             return true;
        }
    }
    return false;
}
function signIn(username, password){
    if(isUserValid(username, password)){
        console.log(newsfeed);
    }else{
        alert("Any username is registered with this credentials. Check your informations and try again.");
    }
}

signIn(usernamePrompt, passwordPrompt);