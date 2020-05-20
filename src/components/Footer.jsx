import React from "react";
import { Navbar, Badge } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="light" variant="light" sticky="bottom" className="mt-5">
      <Navbar.Brand>
        <Badge>
          &copy; {new Date().getFullYear()} Copyright: www.ToDoList.com
        </Badge>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
