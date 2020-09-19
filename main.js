document.getElementById("submitExpense").addEventListener("click", function () {
  makeTableRow();
});

let deleteRow = false;

function deleteExpense(event) {
 deleteRow = true;
let deleteBtn = document.getElementById('deleteButton');
console.log(event.target);
console.log(deleteBtn.parentNode.parentNode)
// deleteBtn.parentNode.parentNode.remove();
if (deleteRow == true) {
  deleteBtn.parentNode.parentNode.remove();
}
}

function makeTableRow() {
  let dateUserInput = document.getElementById("dateInput").value;
  const typeUserInput = document.getElementById("typeInput").value;
  const amountUserInput = document.getElementById("amountInput").value;
  const nameUserInput = document.getElementById("nameInput").value;
  let tableRef = document.getElementById("expenseTable");
  const inputs = document.querySelectorAll(".input");

  let newRow = `
        <tr>
            <td id='td1'>${dateUserInput}</td>
            <td id='td2'>${typeUserInput}</td>
            <td id='td3'>${nameUserInput}</td>
            <td id='td4'>${amountUserInput}</td>
            <td> 
            <button class='delete' id='deleteButton'>Delete</button>
            </td>
        </tr>
        `;

  tableRef.innerHTML += newRow;
  inputs.forEach((inputs) => (inputs.value = ""));
  
  const deleteBtn = document.getElementById('deleteButton');
  deleteBtn.addEventListener('click', deleteExpense);
}

