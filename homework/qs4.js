let total = 0

function addExpense() {
     const input = document.getElementById("expenseInput")
    const value = Number(input.value)

    if (!isNaN(value) && value > 0) {
        total += value;
        document.getElementById("total").textContent = `Total: $${total}`
        input.value = ""
    } else {
        alert("Please enter a valid number.")
    }
}