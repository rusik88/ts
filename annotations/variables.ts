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

//When to use type annotations

const json = '{"x":10, "y":20, "z":25}';
const coordinates: {x:number; y:number; z:string} = JSON.parse(json)
console.log(coordinates)

//When we declare variable on one line and initialize it later

let words = ['one', 'two', 'three']
let isTwo: boolean = false

for(let i = 0; i < words.length; i++) {
    if(words[i] === 'two') {
        isTwo = true
    }
        
}

// Variables whoes type can't be interred

let myNumbers = [-10,20,-5]
let positiiveNumber: boolean | number = false

for(let i = 0; i < myNumbers.length; i++) {
    if(myNumbers[i] > 0) {
        positiiveNumber = myNumbers[i]
    }
}



