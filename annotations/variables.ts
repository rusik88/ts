let n1: number = 50
let n2: string = 'test'
let n3: boolean = true

let n4: null = null
let n5: undefined = undefined

let n6: Date = new Date()

//arrays

let n7: string[] = ['red', 'orange']
let n8: number[] = [10, 20]
let n9: boolean[] = [true, false]


//Classes
class Car {

}

const car: Car = new Car()

//Objects

let user: {age: number; name: string} = {
    age: 20,
    name: 'Ivan'
}

//Functions

const n10: (i: number) => void = (i) => {
    console.log(i)
}