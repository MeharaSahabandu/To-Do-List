import React, { useEffect } from 'react';
import ToDo from './components/ToDo';
import './index.css';
import { useState } from 'react';
import { getAllToDo } from './utils/HandleApi';
import axios from 'axios';


function App() {

  const [toDo, setToDo] = useState([]);

  /*useEffect(() => {
    getAllToDo(setToDo);
  }, []);*/

  useEffect(() => {
    axios.get('http://localhost:8070/')
      .then((getData) => {
        setToDo(getData.data);
      })
  })



  return (
    <div className="App">

      <div className="container">

        <center>
          <h1>To-Do List</h1>
          <br></br>
          <br></br>

          <div className='top'>
            <input className='inputTask' type="text" placeholder="Enter a task" />
            <div className='add'>ADD</div>
          </div>

          <div >
            {toDo.map((item) => <ToDo key={item._id} text={item.text} />)}
          </div>

        </center>
      </div>

    </div>
  );
}

export default App;
