import { SortInterface } from "../interfaces/SortInterface";
import { Sorter } from "./Sorter"

export class CharactersCollection extends Sorter implements SortInterface {
    constructor(public data: string) {
        super()
    }

    length(): number {
        return this.data.length 
    }

    compare(leftIndex: number, rightIndex:number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex: number, rightIndex:number): void {

        const characters = this.data.split('')
        const el1 = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = el1

        this.data = characters.join('')
    }
}