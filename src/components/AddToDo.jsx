import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function AddToDo({ addToDoTask }) {
  const [task, setTask] = useState("");
  const inputTaskHandler = (e) => {
    setTask(e.target.value);
  };
  const saveTaskHandler = () => {
    setTask(task.trim());
    task !== "" && addToDoTask(task);
    setTask("");
  };
  return (
    <InputGroup size="lg" className="mb-5">
      <InputGroup.Prepend>
        <InputGroup.Text>Enter To Do Task</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl onChange={inputTaskHandler} value={task} />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={saveTaskHandler}>
          +
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default AddToDo;
