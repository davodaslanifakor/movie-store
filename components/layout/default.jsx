import React, { Component } from "react";
import Navbar from '../ui/navbar/index'
class home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
        <footer>FOoTER</footer>
      </div>
    );
  }
}

export default home;
