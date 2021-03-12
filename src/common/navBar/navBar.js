import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import isAuthenticated from "../../services/isAuthenticated";
const NavBar = (props) => {

  const logOut = () => {
    window.location.href ="/login"
    localStorage.clear();
  };

  return isAuthenticated() ? (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </Nav>
      <Navbar.Brand className="cursor-pointer" onClick={() => logOut()}>
        Log out
      </Navbar.Brand>
    </Navbar>
  ) : (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/sign-up" className="nav-link">
          Sign up
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
