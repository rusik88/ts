export abstract class Sorter {

    abstract compare(leftIndex: number, rightIndex:number): boolean
    abstract swap(leftIndex: number, rightIndex:number): void
    abstract length(): number

    public sort(): void {
        const length  = this.length();
        for(let w = length - 1; w > 0; w--) {
            for(let i = 0; i < w; i++) {
                if(this.compare(i, i + 1)) {
                    this.swap(i, i + 1)
                }
            }
        }
    }
}