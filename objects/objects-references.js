let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount;
otherAccount.income = 1000;
otherAccount = {}

let addExpense = function (account, amount) {
    // account = {}
    account.expenses = account.expenses + amount;
    // console.log(account);
}

// addIncome

// resetAccount

//getAccountSummary
//Account for Andrew has $900. $1000 is income. $100 in expenses. 

//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary

addExpense(myAccount, 2.50);
console.log(myAccount);