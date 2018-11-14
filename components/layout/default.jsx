import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../ui/navbar/index";
import "~/css/main.styl";
class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Head>
          <title>Movie Store</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        <link rel="stylesheet" href="/static/fonts/flaticon/flaticon.css"/>
        </Head>
        <Navbar />
        {this.props.children}
        <footer>FOoTER</footer>
      </div>
    );
  }
}

export default Layout;
