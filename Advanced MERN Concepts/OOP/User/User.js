class User {
    constructor(username, emailAddress) {
        this.name = username,
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithDrawal(amount) {
        this.accountBalance -= amount;
    }

    displayBalance() {
        console.log(`${this.name} have in his account ${this.accountBalance}`)
    }

    transfertMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
    }
}

const user1 = new User('User1', 'user1@gmail.com')
const user2 = new User('User2', 'user2@gmail.com')
const user3 = new User('User3', 'user3@gmail.com')

user1.makeDeposit(100)
user1.makeDeposit(100)
user1.makeWithDrawal(50)
user1.displayBalance()

user2.makeDeposit(100)
user2.makeDeposit(100)
user2.makeWithDrawal(50)
user2.makeWithDrawal(50)
user2.displayBalance()

user3.makeDeposit(200)
user3.makeWithDrawal(50)
user3.makeWithDrawal(50)
user3.makeWithDrawal(50)
user3.displayBalance()

user1.transfertMoney(user3, 50)
user1.displayBalance()
user3.displayBalance()