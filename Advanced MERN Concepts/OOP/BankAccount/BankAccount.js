class BankAccount {
    constructor(intRate, balance) { 
        if (balance) {
            this.accountBalance = balance
        }else {
            this.accountBalance = 0
        }
        this.interestRate = intRate / 100
    }
    deposit(amount) {
	this.accountBalance += amount;
    return this;
    }
    withdraw(amount) {
    if(this.accountBalance > 0){
        this.accountBalance -= amount;
        return this;
    }else {
        console.log(`Insufficient funds: Charging a 5$ fee`)
        this.accountBalance -= 5
        console.log(`The new Balance: ${this.accountBalance} $`)
        return this;
    }
    }
    displayAccountInfo() {
	console.log(`Balance ${this.accountBalance} $`)
    }
    yieldInterest() {
    if(this.accountBalance > 0) {
        this.accountBalance += this.accountBalance*this.interestRate
        return this;
    }else {
        console.log(`Your Balance is Negative`)
        console.log(`Balance: ${this.accountBalance} $`)
    }
    }
}

//Instanciate accounts
const account1 = new BankAccount(2)
console.log(account1)
// const account2 = new BankAccount(1, 100)

//Display accounts Infos
// account1.displayAccountInfo()
// account2.displayAccountInfo()

//Account1 Operations
// account1.deposit(100).deposit(100).deposit(100).withdraw(50).yieldInterest()
// account1.displayAccountInfo()

//Account2 Operations
// account2.deposit(50).deposit(50).withdraw(50).withdraw(50).withdraw(100).withdraw(100).yieldInterest()
// account2.displayAccountInfo()
