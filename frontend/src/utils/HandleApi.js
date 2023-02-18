import axios from 'axios';

const baseUrl = 'http://localhost:8070'

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log(data); setToDo(data)
        })
}


export { getAllToDo }