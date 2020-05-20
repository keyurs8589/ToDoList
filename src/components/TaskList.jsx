import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function TaskList({ task, setTaskCompleted, updateTask, deleteTask }) {
  const [editedTask, setEditedTask] = useState(task.toDoTask);
  const [editFlag, setEditFlag] = useState(false);
  const editTaskHandler = (e) => setEditedTask(e.target.value);
  const saveEditTaskHandler = () => {
    editedTask.trim() !== "" && updateTask(editedTask.trim());
    setEditedTask(task.toDoTask);
    setEditFlag(false);
  };
  return (
    <InputGroup size="lg">
      <InputGroup.Prepend>
        <InputGroup.Checkbox
          checked={task.taskCompleted}
          onChange={setTaskCompleted}
        />
      </InputGroup.Prepend>
      <FormControl
        value={editedTask}
        readOnly={!editFlag}
        onClick={() => setEditFlag(true)}
        onChange={editTaskHandler}
        onBlur={saveEditTaskHandler}
        style={{ textDecoration: task.taskCompleted ? "line-through" : "" }}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={deleteTask}>
          DELETE
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskList;
