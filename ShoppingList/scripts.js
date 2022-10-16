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
    li.innerHTML = li.innerHTML + " ";
    AddDeleteButton(li);
    MarkAsDone(li);
} 

function addItemClick(){
    if(inputLength() > 0){
        addItem()
    }
}

function addItemEnter(event){
    if(inputLength() > 0 && event.key === "Enter"){
        addItem();
        updateListedItems();
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

//Adding delete button

function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }
  
function AddDeleteButton(item){
    button = document.createElement("button");
    item.appendChild(button);
    button.innerHTML='Delete';
    button.onclick = removeParent;
}

listedItem.forEach(MarkAsDone, AddDeleteButton);

//adding Delete Button in already existents items

var deleteBtns = document.querySelectorAll(".delete");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}
