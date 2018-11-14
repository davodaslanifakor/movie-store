import React, { Component } from "react";
var avatarStyle = {
  backgroundImage: 'url(https://picsum.photos/30/30/?random)',
};
class Avatar extends Component {
  
  render() {
    return (
      <div className="avatar">
        <div className="avatar-edit">
            <i className="flaticon-edit"></i>
        </div>
        <div className="avatar-name">
          Davod Fakor
        </div>
        <div className="avatar-box">
          <span className="avatar-image" style={avatarStyle}></span>
        </div>
      </div>
    );
  }
}

export default Avatar;
