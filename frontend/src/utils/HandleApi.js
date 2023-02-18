import axios from 'axios';
import '../index.css';

const baseUrl = 'http://localhost:8070'

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data--->', data);
            setToDo(data);
        })
}


export { getAllToDo }