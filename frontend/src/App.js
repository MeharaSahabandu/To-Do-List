import React from 'react';
import ToDo from './components/ToDo';
import './index.css';

function App() {
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

          <div className='list'>
            <ToDo text="Hi"></ToDo>
          </div>

        </center>
      </div>

    </div>
  );
}

export default App;
