document.getElementById("submitExpense").addEventListener("click", function () {
  makeTableRow();
});

function deleteExpense(e) {
  if (e.target.id === "deleteButton") {
    e.target.parentElement.parentElement.remove();
  }
}

function makeTableRow() {
  let dateUserInput = document.getElementById("dateInput").value;
  const typeUserInput = document.getElementById("typeInput").value;
  let amountUserInput = document.getElementById("amountInput").value;
  const nameUserInput = document.getElementById("nameInput").value;
  let tableRef = document.getElementById("expenseTable");
  const inputs = document.querySelectorAll(".input");

  let checkFor$ = amountUserInput.indexOf("$");
  if (checkFor$ !== -1) {
    amountUserInput = amountUserInput;
  } else {
    amountUserInput = "$" + amountUserInput;
  }

  let newRow = `
        <tr>
            <td id='td1'>${dateUserInput}</td>
            <td id='td3'>${nameUserInput}</td>
            <td id='td2'>${typeUserInput}</td>
            <td id='td4'>${amountUserInput}</td>
            <td> 
            <button class='delete' id='deleteButton'>Delete</button>
            </td>
        </tr>
        `;

  if (
    dateUserInput.length > 2 &&
    typeUserInput.length > 2 &&
    nameUserInput.length > 2 &&
    amountUserInput.length >= 2
  ) {
    tableRef.innerHTML += newRow;
    inputs.forEach((inputs) => (inputs.value = ""));
  } else {
    window.alert("Please Enter An Expense");
  }

  tableRef.addEventListener("click", deleteExpense);
}