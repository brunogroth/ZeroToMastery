var input = document.getElementById("itemName");
var button = document.getElementById("addItem");
var list = document.getElementById("list");


// Items Creation

function inputLength(){
    return input.value.length;
}

function addItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("listedItem");
    list.appendChild(li);
    input.value = "";
} 

function addItemClick(){
    if(inputLength() > 0){
        addItem()
    }
}

function addItemEnter(event){
    if(inputLength() > 0 && event.key === "Enter"){
        addItem();
    }
}

button.addEventListener("click", addItemClick);
input.addEventListener("keypress", addItemEnter);

// Marking item as done

function MarkAsDone(item){
    item.addEventListener("click", function(){
        item.classList.toggle("done");
    });
}
var listedItem = document.querySelectorAll(".listedItem");

listedItem.forEach(MarkAsDone);
