document.getElementById("submitExpense").addEventListener("click", function () {
  makeTableRow();
});


function deleteExpense(r) {
let i = document.getElementsByTagName('tr');
document.getElementById("expenseTable").deleteRow(i);
console.log(i);
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
            <td> <input onclick='deleteExpense()' className = 'delete' id= 'deleteButton' type= 'button' value='Delete'/></td>
        </tr>
        `;

  tableRef.innerHTML += newRow;
  inputs.forEach((inputs) => (inputs.value = ""));
}

