import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
        <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">Profile</a></li>
        <li><a href="#contact">Suitors</a></li>
        <li><a href="#about">Logout</a></li>
      </ul>
    );
  }
}

export default Navbar;