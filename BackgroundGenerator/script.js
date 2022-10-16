var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var title = document.getElementById("h2");
var button = document.createElement("button");

//Starting project setting input colors
setInputColor();
setBackgroundColor();
randomColorButton();

function setInputColor(){
    color1.value = "#ff0000";
    color2.value = "#ffff00";
    
}

//Setting background
function setBackgroundColor(){
    //changes body color
    body.style.background = "linear-gradient(to right, " + color1.value
    + "," 
    + color2.value + ")"; 

    //changes button
    button.style.background = "linear-gradient(to right, " + color1.value
    + "," 
    + color2.value + ")"; 

    css.textContent = body.style.background + ";";
}

//Setting a random color
function randomColorButton(){
    //First, creates the "Random Color" button
    p = document.createElement("p");
    p.appendChild(button);
    title.appendChild(p);
    button.innerHTML='Random Color';
    button.setBackgroundColor;

    //Generates two random colors and set them
    button.addEventListener("click", function(){
        color1.value = "#" + Math.floor( Math.random()*16777215).toString(16);

        color2.value = "#" + Math.floor( Math.random()*16777215).toString(16);

        setBackgroundColor();
    });

}

color1.addEventListener("input", setBackgroundColor);

color2.addEventListener("input", setBackgroundColor);

