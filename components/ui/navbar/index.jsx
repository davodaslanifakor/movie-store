
// import "./style.styl"
import React, { Component } from 'react';  
import Logo from './logo' 
import Avatar from './avatar' 
import ItemNav from './item-nav' 
class Navbar extends Component {
    state = {  }
    render() { 
        return (
        <nav className="navbar">
           <Logo/>
           <ItemNav/>
           <Avatar/>
        </nav>
        );
    }
}
 
export default Navbar;