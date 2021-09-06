import { SortInterface } from '../interfaces/SortInterface'

class NodeClass {
    next: NodeClass | null = null
    data: number
    constructor(data) {
        this.data = data 
    }
}

export class LinkedListCollection implements SortInterface {
    head: NodeClass | null = null

    add(data: number): void {
        const node = new NodeClass(data)
        console.log(this.head)
        if(!this.head) {
            this.head = node
            return
        }

        let tail = this.head
        while(tail.next) {
            tail = tail.next
        }
        tail.next = node
    }

    get length(): number {
        if(!this.head) {
            return 0
        }

        let length = 1
        let node = this.head
        while(node.next) {
            length++
            node = node.next
        }

        return length
     }

     at(index: number): NodeClass {
        if(!this.head) {
            throw new Error('Index is out of bounds')
        }

        let counter = 0
        let node: NodeClass | null = this.head
        while(node) {
            if(counter === index) {
                return node
            }

            counter++
            node = node.next
        }

        throw new Error('Index is out of bounds')

     }

     compare(leftIndex:number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error('List is empty')
        }

        return this.at(leftIndex).data > this.at(rightIndex).data
     }

     swap(leftIndex: number, rightIndex:number): void {
         const leftNode = this.at(leftIndex)
         const rightNode = this.at(rightIndex)

         const el1 = leftNode.data
         leftNode.data = rightNode.data
         rightNode.data = el1
     }

     printr(): void {
         if(!this.head) {
             return;
         }

         let node: NodeClass | null = this.head
         while(node) {
             console.log(node.data)
             node = node.next
         }
     }
}