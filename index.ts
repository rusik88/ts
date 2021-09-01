import Axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/4';
Axios.get(url).then(resp => {
    const todo = resp.data

    const ID = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;

    console.log(`
        ID: ${ID}
        title: ${title}
        finished: ${finished}
    `)


})

