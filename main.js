const submitBtn = document.getElementById('submit-expense');
submitBtn.addEventListener("click", () => createExpense());

function deleteExpense(e) {
  if (e.target.id === "deleteButton") {
    e.target.parentElement.parentElement.remove();
  }
}

function createExpense() {
  let tableRef = document.getElementById("expense-table");

  let date = document.getElementById("date").value;
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  let amount = document.getElementById("amount").value;

  let newRow = `
        <tr>
            <td id='td1'>${date}</td>
            <td id='td3'>${name}</td>
            <td id='td2'>${type}</td>
            <td id='td4'>$${amount}</td>
            <td> 
            <button class='delete' id='deleteButton'>Delete</button>
            </td>
        </tr>
        `;

  if (
    date.length > 2 &&
    type.length > 2 &&
    name.length > 2 &&
    amount.length > 2
  ) {
    tableRef.innerHTML += newRow;
  } else {
    alert("Please Enter An Expense");
  }
  const inputs = document.querySelectorAll(".input");
  inputs.forEach((inputs) => (inputs.value = ""));

  tableRef.addEventListener("click", deleteExpense);
}
