
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

//function cleanInputString(str){
   // const strArray = str.split('');
   // const cleanStrArray = [];
   // for(let i=0; i < strArray.length; i++){
        //if (!['+','-',' '].includes(strArray[i]))
       // cleanStrArray.push(strArray[i]);
   // }
//}
function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isValidInput(str){
    const regex = /\d+e\+d/i;
    return str.match(regex);
}

function addEntry(){
    const targetInputContainer= document.querySelectorAll(`#${entryDropdown.value}.input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = `
    <label for ="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber}Name</label>
    <input type="Name />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" id="${entryDropdown.value}-${entryNUmber}-calories placeholder="Calories"/>`
    targetInputContainer.innerHTML += HTMLString;
}