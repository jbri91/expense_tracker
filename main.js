// expense;
// // date = new Date();
// type;
// name;
// amount;

document.getElementById("submitExpense").addEventListener("click", function(e) {
        inputDate(e);
        typeInput(e);
        nameInput(e);
        amountInput(e);
    })

function inputDate(e) {
    let dateUserInput = document.getElementById('dateInput').value;
    let tableRef = document.getElementById('expenseTable');
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(dateUserInput);
    newCell.appendChild(newText);
}

function typeInput(e) {
    const typeUserInput = document.getElementById('typeInput').value;
    document.getElementById('td2').innerHTML = typeUserInput;
    // let tableRef = document.getElementById('expenseTable');
    // let newRow = tableRef.insertRow(-1);
    // let newCell = newRow.insertCell(0);
    // let newText = document.createTextNode(typeUserInput);
    // newCell.appendChild(newText);

  
}

function nameInput(e) {
    const nameUserInput = document.getElementById('nameInput').value;
    document.getElementById('td3').innerHTML = nameUserInput;
    console.log(nameUserInput);
  
}

function amountInput(e) {
    const amountUserInput = document.getElementById('amountInput').value;
    document.getElementById('td4').innerHTML = amountUserInput;
    console.log(amountUserInput);
  
}

function deleteExpense(e) {
  console.log("It deletes!");
}
