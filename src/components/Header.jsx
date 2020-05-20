import React from "react";
import { Navbar, Badge } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-5">
      <Navbar.Brand>
        <h1>
          <Badge>To Do List</Badge>
        </h1>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
