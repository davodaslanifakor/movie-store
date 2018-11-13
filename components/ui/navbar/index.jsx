
// import "./style.styl"
import React, { Component } from 'react';  
import Logo from './logo' 
class Navbar extends Component {
    state = {  }
    render() { 
        return (
        <nav className="navbar">
           <Logo/>
        </nav>
        );
    }
}
 
export default Navbar;