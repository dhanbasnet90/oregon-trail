class Traveler {
    constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
    }

    hunt() {
        this.food +=2;
    }

    eat() {
        if(this.food === 0) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
        }
    }

class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length;
    }

    join(traveler) {
        if (this.getAvailableSeatCount() >=1) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        for(let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false) {
                return true
            }
        }
        return false
    }
    
    totalFood() {
        let totalFood = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            totalFood += this.passengers[i].food;
}
return totalFood;
        
    }
}