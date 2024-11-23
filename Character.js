class Character {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    apresentation() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    taunt() {
        console.log(`${this.name} taunts you.`);
        switch (this.type) {
            case 'warrior':
                console.log("You don't know how to use swords? Bastard, take your honor!");
                break;
            case 'mage':
                console.log("Haha, your magic is so weak! Poor man without wisdom...");
                break;
            case 'monk':
                console.log("⁠Strength is meaningless without skill, if you know what I mean.");
                break;
            case 'ninja':
                console.log("Shh... Your silence allows me to think better, caution is not your skill, is it?");
                break;
            default:
                console.log("Hehe, stupid.");
                break;
        }
    }

    attack() {
        let attack;

        switch (this.type) {
            case 'warrior':
                attack = "sword";
                break;
            case "mage":
                attack = "magic";
                break;
            case "monk":
                attack = "martial arts";
                break;
            case "Ninja":
                attack = "shuriken";
                break;
            default:
                attack = "an unknown attack";
                break;
        }

        console.log(`The ${this.type} attack using ${attack}`)
    }

    defend() {
        let defense;

        switch (this.type) {
            case 'warrior':
                defense = "shield";
                break;
            case 'mage':
                defense = "magical barrier";
                break;
            case 'monk':
                defense = "deflecting the attack with martial arts";
                break;
            case 'ninja':
                defense = "dodging swiftly";
                break;
            default:
                defense = "an unknown defense";
                break;
        }

        console.log(`${this.name} defends using ${defense}`);
    }
}

export default Character;