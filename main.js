expense;
date = new Date();
type;
name;
amount;

document.getElementById("submitExpense").addEventListener("click", addExpense);

function addExpense(e) {
  console.log("It works!");
}

function deleteExpense(e) {
  console.log("It deletes!");
}
