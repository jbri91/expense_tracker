expense;
date = new Date();
type;
name;
amount;

document.getElementById("submitExpense").addEventListener("click", function(e) {
        dateInput(e);
        typeInput(e);
        nameInput(e);
        amountInput(e);
    })

function dateInput(e) {
    const dateInput = document.getElementById('dateInput');
date = document.createElement('tr');
date.innerText = dateInput;
date.id = 'expenseDate';
date.appendChild(dateInput);
  
}

function typeInput(e) {
    const typeInput = document.getElementById('typeInput');

  
}

function nameInput(e) {
    const nameInput = document.getElementById('nameInput');

  
}

function amountInput(e) {
    const amountInput = document.getElementById('amountInput');

  
}

function deleteExpense(e) {
  console.log("It deletes!");
}
