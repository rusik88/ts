import { Sorter } from './classes/Sorter'
import { NumbersCollection } from './classes/NumbersCollection'
import { CharactersCollection } from './classes/CharactersCollection' 
import { LinkedListCollection } from './classes/LinkedListCollection'

const collection  = new NumbersCollection([-1, -10, 4, 2])
collection.sort()
console.log(collection.data) 
//compare.const collectionStr  = new CharactersCollection('Testba')

//const sorter = new Sorter(collectionStr)
//sorter.sort()
//console.log(sorter.collection)

//const linkedList = new LinkedListCollection()
//comparelinkedList.add(100)
//linkedList.add(20)
//linkedList.add(-2)
//linkedList.add(4)

//const sorter2 = new Sorter(linkedList)
//sorter2.sort()
//linkedList.printr()


