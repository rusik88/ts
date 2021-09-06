import { SortInterface } from "../interfaces/SortInterface"
import { Sorter } from "./Sorter"

export class NumbersCollection extends Sorter implements SortInterface {
    
    constructor(public data: number[]) {
        super()
    }

    compare(leftIndex: number, rightIndex:number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    length(): number {
        return this.data.length
    }

    swap(leftIndex: number, rightIndex:number): void {
        const el1 = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex]
        this.data[rightIndex] = el1
    }
}