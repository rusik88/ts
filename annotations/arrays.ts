const colors: string[] = ['red', 'green', 'yellow']

const fruitsByColor: string[][] = [
    ['orange'],
    ['apple'],
    ['lemon']
]

//Help with inference extracting values

const color = colors[0]
const color1 = colors.pop()

//Prevent incompatible values

//colors.push(true)

//help with map
colors.map((color: string): string => {
    return color.toUpperCase()
})

//Flexble types

const importantDatabase: (string | number | Date)[] = [new Date(), '2021-11-11', 25];
importantDatabase.push('Test')