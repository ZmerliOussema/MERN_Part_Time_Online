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

class Sensei extends Ninja {
    constructor (name, health=200, speed=10, strength=10) {
        super(name, health = 200)
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkSake()
        console.log('What One programmer can do in one month, two programmers can do in two months.')
    }
}

const superSensei = new Sensei('Master Splinter')
superSensei.speakWisdom()
superSensei.showStats()