import React, { Component } from "react";
import Layout from 'components/layout/default'
import Slider from 'components/ui/slideshow/slider'
class Home extends Component {
    render() { 
        return (   
          <Layout>
            <Slider/>
          </Layout>);
    }
}
 
export default Home;