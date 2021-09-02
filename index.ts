import Axios from 'axios';
import Car from './1';

const url = 'https://jsonplaceholder.typicode.com/todos/4';

interface todo {
    id: number,
    title:string,
    completed: boolean
}

Axios.get(url).then(resp => {
    const todo = resp.data as todo

    const id = todo.id;
    const title = todo.title;
    const complete = todo.completed;

    log(id, title, complete)
})

const car = new Car()
console.log(car.color)


const log = (id: number, title: string, complete: boolean) => {
    console.log(`
    ID: ${id}
    title: ${title}
    finished: ${complete}
`)
}



