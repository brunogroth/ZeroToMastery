var user = {
    username: "bruno.groth",
    password: "bruno123"
};

var database = [
    {
        username: "bruno.groth",
        password: "bruno123"
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

function signIn(username, password){
    if(username === database[0].username && password === database[0].password){
        alert("Congrats! You are logged in.");
        console.log(newsfeed);
    }else{
        alert("Any username is registered with this credentials. Check your informations and try again.");
    }
}

signIn(usernamePrompt, passwordPrompt);