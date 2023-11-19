import React, { Component } from "react";
import "./Avatar.styles.css";

class Avatar extends Component {
  render() {
    const { username, email, age, birthDate } = this.props.userInfo;

    return (
      <div id="avatar_container">
        <h1>User Info</h1>
        <div>
          <p>Username: {username}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>Birth Date: {birthDate}</p>
        </div>
      </div>
    );
  }
}

export default Avatar;
