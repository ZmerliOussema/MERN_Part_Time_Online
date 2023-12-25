class User {
    constructor(username, emailAddress) {
        this.name = username,
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    makeWithDrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }

    displayBalance() {
        console.log(`${this.name} have in his account ${this.accountBalance}`);
    }

    transfertMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        return this;
    }
}

const user1 = new User('User1', 'user1@gmail.com')
const user2 = new User('User2', 'user2@gmail.com')
const user3 = new User('User3', 'user3@gmail.com')

user1.makeDeposit(100).makeDeposit(100).makeWithDrawal(50).displayBalance()

user2.makeDeposit(100).makeDeposit(100).makeWithDrawal(50).makeWithDrawal(50).displayBalance()

user3.makeDeposit(200).makeWithDrawal(50).makeWithDrawal(50).makeWithDrawal(50).displayBalance()

user1.transfertMoney(user3, 50)
user1.displayBalance()
user3.displayBalance()