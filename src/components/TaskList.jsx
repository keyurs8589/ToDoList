import React, {useState} from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function TaskList({task}) {
    const [localTask, setLocalTask] = useState(task.toDoTask)
  return (
    <InputGroup size="lg">
      <InputGroup.Prepend>
        <InputGroup.Checkbox />
      </InputGroup.Prepend>
      <FormControl value={localTask}/>
      <InputGroup.Append>
        <Button variant="outline-secondary">+</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskList;
