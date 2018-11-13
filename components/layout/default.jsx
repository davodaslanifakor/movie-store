import React, { Component } from "react";
import Navbar from '../ui/navbar/index'
import '~/css/main.styl'
class Layout extends Component {
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

export default Layout;
