import React, {useState} from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function TaskList({task, setTaskCompleted}) {
    const [localTask, setLocalTask] = useState(task.toDoTask)
  return (
    <InputGroup size="lg">
      <InputGroup.Prepend>
        <InputGroup.Checkbox checked={task.taskCompleted}  onChange={setTaskCompleted}/>
      </InputGroup.Prepend>
      <FormControl value={localTask} style={{textDecoration: task.taskCompleted ? "line-through" : ""}} />
      <InputGroup.Append>
        <Button variant="outline-secondary">DELETE</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskList;
