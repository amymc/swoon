import React, { Component } from 'react';
import '../styles/modules/popup.css';

class Popup extends Component {

  render() {
    return (
      <div className="popup">
        <span className="popup__close-btn" onClick={(e) => this.props.onClick(e)}>X</span>
        <h1 className="popup__title">Heading</h1>
        <p className="popup__body">Sed lobortis justo vitae nisi fermentum, dapibus dictum eros malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae tellus et purus faucibus vehicula. Morbi felis tellus, ultrices vel pellentesque ut, efficitur vitae orci. Quisque sit amet sem vitae neque molestie finibus sit amet suscipit leo. Vivamus mattis sagittis blandit. Maecenas eget tortor blandit, venenatis ipsum ac, semper tortor.</p>
      </div>
    );
  }
}

export default Popup;
