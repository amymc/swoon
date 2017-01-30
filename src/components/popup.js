import React, { Component } from 'react';
import '../styles/modules/popup.css';

class Popup extends Component {

  render() {
    return (
      <div className="popup">
        <span className="modal__close-btn" onClick={(e) => this.props.onClick(e)}>X</span>
        <h1>Heading</h1>
        <p>Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.</p>
      </div>
    );
  }
}

export default Popup;
