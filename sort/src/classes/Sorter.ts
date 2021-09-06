export class Sorter {
    public collection: number[]

    constructor(arr: number[]) {
        this.collection = arr
    }

    public sort(): void {
        const { length } = this.collection;
        let el1: number
        for(let w = length; w > 0; w--) {
            for(let i = 0; i < w; i++) {
                if(this.collection[i] > this.collection[i + 1]) {
                    el1 = this.collection[i]
                    this.collection[i] = this.collection[i + 1]
                    this.collection[i + 1] = el1
                }
            }
        }
    }
}