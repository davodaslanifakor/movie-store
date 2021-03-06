import React, { Component } from 'react';

const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
    }
    return <div className="slide"><div className="image"  style={styles}></div></div>
  }
  
  
  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="flaticon-left-arrow" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="flaticon-right-arrow" aria-hidden="true"></i>
      </div>
    );
  }
  
class Slider extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
         "https://picsum.photos/1920/768/?q=1",
         "https://picsum.photos/1920/768/?q=2",
         "https://picsum.photos/1920/768/?q=3",
         "https://picsum.photos/1920/768/?q=4",
         "https://picsum.photos/1920/768/?q=5",
         "https://picsum.photos/1920/768/?q=6",

        ],
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
    componentDidMount(){
      setInterval(e=>{
        this.goToNextSlide()
      },5000)
    }
    componentWillUnmount() {
      console.log("conerrd Unmounted");
    }
    render() {
      return (
        <div className="slider">
  
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </div>
  
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />
  
          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    }
  }
  
export default Slider;
  