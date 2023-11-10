document.addEventListener("DOMContentLoaded", function () {
    const kaydetButton = document.getElementById("kaydetbtn");
    const incomeInput = document.getElementById("income");
    const incomeTotalElement = document.getElementById("income-total");
    const ekleBtn = document.getElementById("ekle-btn");
  
  
  
    function updateIncomeTotal() {
      const currentIncomeTotal =
        parseFloat(incomeTotalElement.textContent) || 0;
      const newIncome = parseFloat(incomeInput.value) || 0;
      const updatedIncomeTotal = currentIncomeTotal + newIncome;
      incomeTotalElement.textContent = updatedIncomeTotal.toFixed(2); 
    }
  
    ekleBtn.addEventListener("click", function () {
      if (parseFloat(incomeInput.value) <= 0) {
        alert("Please enter a valid income amount.");
        return;
      }
  
    
      updateIncomeTotal();
  
     
      incomeInput.value = "";
    });
  
    kaydetButton.addEventListener("click", function () {
      const dateValue = document.getElementById("date").value;
      const quantityValue = document.getElementById("quantity").value;
      const spendTypeValue = document.getElementById("spendtype").value;
  
  
  
      if (!dateValue || !quantityValue || !spendTypeValue) {
        alert("Please fill in all the fields.");
        return;
      }
  
      const expenseTable = document.getElementById("expense-table");
  
      const newRow = expenseTable.insertRow();
  
      const dateCell = newRow.insertCell(0);
      const spendTypeCell = newRow.insertCell(1);
      const quantityCell = newRow.insertCell(2);
      const actionCell = newRow.insertCell(3);
  
      dateCell.textContent = dateValue;
      spendTypeCell.textContent = spendTypeValue;
      quantityCell.textContent = quantityValue;
      actionCell.innerHTML = '<button class="btn btn-danger">Delete</button>';
  
      document.getElementById("date").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("spendtype").value = "";
  
  
    });
  
  
  });