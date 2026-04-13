// Dummy data (you can later connect backend)
let customers = 0;
let transactions = 0;
let balance = 0;

function updateUI() {
    document.getElementById("customers").innerText = customers;
    document.getElementById("transactions").innerText = transactions;
    document.getElementById("balance").innerText = "₹ " + balance;
    document.getElementById("avg").innerText = "₹ " + (customers ? balance / customers : 0);
}

updateUI();