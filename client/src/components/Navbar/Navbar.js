import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
        <ul>
        <li onClick={this.props.matchPage}><a class="active" href="#home">Matches</a></li>
        <li onClick={this.props.profilePage}><a href="#news">Profile</a></li>
        <li onClick={this.props.suitorPage}><a href="#contact">Suitors</a></li>
        <li><a href="#about">Logout</a></li>
      </ul>
    );
  }
}

export default Navbar;