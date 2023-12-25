class Ninja {
    constructor(name, health){
        this.name = name,
        this.health = health
        this.speed = 3,
        this.strength = 3
    }
    sayName() {
        console.log(`Ninja name is ${this.name}`)
    }
    showStats() {
        console.log(`Ninja properties : 
            Name: ${this.name} 
            Health: ${this.health}
            Speed: ${this.speed}
            Strength: ${this.strength}
        `)
    }
    drinkSake() {
        this.health += 10
    }
}

const ninja = new Ninja('Naruto', 2)
ninja.sayName()
ninja.showStats()
ninja.drinkSake()
ninja.showStats()
