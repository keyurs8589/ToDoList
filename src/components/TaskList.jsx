import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function TaskList() {
  return (
    <InputGroup size="lg">
      <InputGroup.Prepend>
        <InputGroup.Checkbox />
      </InputGroup.Prepend>
      <FormControl />
      <InputGroup.Append>
        <Button variant="outline-secondary">+</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskList;
