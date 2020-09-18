document.getElementById("submitExpense").addEventListener("click", function() {
        makeTableRow();
    })

// document.getElementById('deleteButton').addEventListener("click", deleteExpense())

function deleteExpense(e) {
  
}

function makeTableRow() {
    let dateUserInput = document.getElementById('dateInput').value;
    const typeUserInput = document.getElementById('typeInput').value;
    const amountUserInput = document.getElementById('amountInput').value;
    const nameUserInput = document.getElementById('nameInput').value;
    let tableRef = document.getElementById('expenseTable');

    let newRow = `
        <tr>
            <td id='td1'>${dateUserInput}</td>
            <td id='td2'>${typeUserInput}</td>
            <td id='td3'>${nameUserInput}</td>
            <td id='td4'>${amountUserInput}</td>
            <td> <input onclick='deleteExpense()' id= 'deleteButton' type= 'button' value='Delete'/></td>
        </tr>
        `
    tableRef.innerHTML += newRow
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(inputs => inputs.value = "");
    }