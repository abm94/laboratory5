//Lab5.js
let green =document;
let list = document.getElementById("list");
let addButton = document.getElementById("addButton");
let inputItem = document.getElementById("itemInput");
let itemNumber = 0;
itemNumber=Number(itemNumber);
let newListItems=[];
let newCheckButtons=[];
let newDeleteButtons=[];
let newTextBoxes = [];
//It needs a unique id generator


addButton.addEventListener('click',(event) => {
    event.preventDefault();
    
    list.innerHTML +=
        `<li class="listItem" id="listItem${itemNumber}">
            <div id="LIContent${itemNumber}">${inputItem.value}</div> <br/>
            <button type="submit" class="listItemButton checkButton" onclick="strikeThrough(${itemNumber})" id="check${itemNumber}">
                check
            </button>
            <button type="submit" class="listItemButton checkButton" onclick = "deleteParent(${itemNumber})" id="delete${itemNumber}">
                delete
            </button>
         </li>`; /*test if this works: string + number = "string4"*/ 
    console.log("added block ",inputItem," at itemNumber ",itemNumber);
    inputItem.value="";
    //add new checkbox to array
    newCheckButtons[itemNumber]=document.getElementById(`check${itemNumber}`);
    newTextBoxes[itemNumber]   =document.getElementById(`LIContent${itemNumber}`);
    newCheckButtons[itemNumber].switched=false;
   
    
    itemNumber++;
});


function strikeThrough(input){
    console.log(`striking through ${input}`);
    
    var parentText=document.getElementById(`LIContent${input}`);
    if(!parentText.matches(".strikeThrough")){
        parentText.classList.add("strikeThrough");
    }
    else{
        parentText.classList.remove("strikeThrough");
    }
}

function deleteParent(input){
    console.log(`deleting ${input}`);
    document.getElementById(`listItem${input}`).remove();
}