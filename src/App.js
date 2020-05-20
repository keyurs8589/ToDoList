import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddToDo from "./components/AddToDo";
import TaskList from "./components/TaskList";

function App() {
  const [toDo, setToDo] = useState([]);
  const addToDoTask = (toDoTask) => {
    !toDo.find((task) => task.toDoTask.toUpperCase() === toDoTask.toUpperCase())
      ? setToDo(
          toDo.concat({ id: toDo.length, toDoTask, taskCompleted: false })
        )
      : alert("Alert!!! Task previously assigned!!!");
  };
  return (
    <div className="App">
      <Header />
      <AddToDo addToDoTask={addToDoTask} />
      {toDo.map((task) => (
        <TaskList key={task.id} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
