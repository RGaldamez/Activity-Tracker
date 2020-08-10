import React from "react";
import { Link } from "react-router";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg='dark' expand='md'>
      <Navbar.Brand className='text-white'> MyTime</Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
