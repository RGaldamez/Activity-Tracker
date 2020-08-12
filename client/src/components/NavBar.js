import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LoginButton from "./LoginButton";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='thick-navbars'
    >
      <LinkContainer to='/'>
        <Navbar.Brand>MyFocus</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav>
          <Nav.Link>
            <LoginButton />
          </Nav.Link>

          <LinkContainer to='/About'>
            <Nav.Link className='nav-center-item'>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
