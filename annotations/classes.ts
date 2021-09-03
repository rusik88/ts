interface CarInterface {
    color: string
}

class Vehicle {
    constructor(public color: string) {
        
    }

    protected drive(): void {
        console.log("I'm driving")
    }

    protected stop(): void {
        console.log("I'm stopped")
    }
}

class Car extends Vehicle implements CarInterface  {
    drive(): void {
        console.log("I'm a car and I'm driving")
    }
}

const car = new Car('yellow')
console.log(car)