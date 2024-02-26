import logo from './logo.svg';
import './App.css';
import ToDo from './components/toDoMain/ToDo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddToDo from './components/addtodo/AddToDo';
import { useState } from 'react';
import ToDoItem from './components/ToDoItem.jsx';

function App() {
  const [tasks, setTasks] = useState([{name : "go outside",completed: false, description: "go outside and exercise", priority:'medium'}, 
  {name: "read", completed: true, description: "read for an hour", priority:'medium'},
  {name: "eat", completed: false, description: "eat your favorite food", priority:'medium'},
  {name: "sleep", completed: true, description: "go to bed at 12pm", priority:'medium'}

  ])


  function removeTasks(name1){
    // let target = e.target.value;
    console.log(name1)
    setTasks(oldValue => {
      return oldValue.filter((item) => item.name!==name1)
    })
    console.log(tasks)
  }

  let changeStatus = (name, completed) => {
    let itemName = name;
    let itemCompleted = completed;
    console.log(name)
    setTasks(prevState => {
        return prevState.map((item) => {
            return itemName == item.name ? {...item, completed: !item.completed} : item;
        })
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index  element={<ToDo tasks={tasks} setTasks={setTasks} removeTasks={removeTasks} changeStatus={changeStatus}/>}></Route>
          <Route path="add" element={<AddToDo setTasks={setTasks}/>}></Route>
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
