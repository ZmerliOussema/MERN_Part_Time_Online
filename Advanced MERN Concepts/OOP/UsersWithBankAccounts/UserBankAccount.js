class BankAccount {
    constructor(intRate, balance, id) { 
        this.accountId = id
        if (balance) {
            this.accountBalance = balance
        }else {
            this.accountBalance = 0
        }
        this.interestRate = intRate / 100
        
    }
}

class UserBankAccount {
    constructor(username, email){
        this.username = username
        this.email = email
        this.accounts = []
    }

    addAccount(intRate, balance, id) {
        const newAccount = new BankAccount(intRate, balance, id)
        this.accounts.push(newAccount)
    }

    makeDeposit(amount, accountId) {
        const _account = this.accounts.find((account => account.accountId === accountId))
        _account.accountBalance+= amount;
        return this
    }

    findAccount(accountId) {
        const _account = this.accounts.find((account => account.accountId === accountId))
        console.log(_account)
    }

    makeWithDrawal(amount, accountId) {
        const _account = this.accounts.find((account => account.accountId === accountId))
        _account.accountBalance -= amount;
        return this
    }

    displayBalance() {
        console.log(`${this.username} have in his accounts ${this.accounts.forEach(account => { account.accountBalance})}`)
    }
}

// Create a User
const user1 = new UserBankAccount('Oussema', 'oussema@gamil.com')
console.log(user1)

// Add an Account to the User
user1.addAccount(8, 100, 'account1')
console.log(user1)

// Add another Account to the user
user1.addAccount(8,0,'account2')
console.log(user1)

// Make a Deposit in a specific Account
user1.makeDeposit(50, 'account1')
console.log(user1)

// Make a Retry from a specific account
user1.makeWithDrawal(50, 'account1')
console.log(user1)


