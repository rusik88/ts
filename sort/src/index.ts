import { Sorter } from './classes/Sorter'

const sorter = new Sorter([5, -4, 7, -3, 4, 9, 10])
sorter.sort()
console.log(sorter.collection)

const str = 'Test'
console.log(str[0])



/*type NS = number | string
const arr = ['Андрей', 'Иван', 'Степан', 'Руслан', "Маусим", "Евгений"]
let sort_arr: number[]
let el1: NS, el2: NS
for(let w = arr.length; w > 0; w--) {
    for(let i = 0; i < w; i++) {
        if(arr[i] > arr[i + 1]) {
            el1 = arr[i]
            el2 = arr[i + 1]
            arr[i] = arr[i + 1]
            arr[i + 1] = el1
        }
    }
}

console.log(arr)*/

