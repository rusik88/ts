const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number]
type NS = number | string

const cola: Drink = ['brown', true, 40] 
const test: NS = 25
cola[0] = 'test'