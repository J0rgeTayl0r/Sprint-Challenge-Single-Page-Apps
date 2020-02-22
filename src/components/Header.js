import React from "react";
import {Link}from "react-router-dom";
import { Navbar, NavItem, Nav } from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Navbar color= "light" light expand="md"  >
      <Nav className= "ml-auto nav" navbar  >
      <NavItem className="link">
      <Link to="/">Home</Link>
      </NavItem>
      <Link to="/characters">Choose Character</Link>
      </Nav>
      </Navbar>
    </header>
  );
}
