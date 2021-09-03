class Vehicle {
    protected drive(): void {
        console.log("I'm driving")
    }

    protected stop(): void {
        console.log("I'm stopped")
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log("I'm a car and I'm driving")
    }
}

const car = new Car()
car.drive()