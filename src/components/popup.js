import React, { Component } from 'react';
import '../styles/modules/popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);

    this.onPageClick = this.onPageClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.onPageClick);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.onPageClick);
  }

  onPageClick(e) {
    if (e.target !== this.popup && !this.popup.contains(e.target)) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div className="popup__wrapper">
        <div className="popup__overlay"></div>
        <div className="popup" ref={(popup) => { this.popup = popup;}}>
          <span className="popup__close-btn" onClick={(e) => this.props.onClick(e)}>X</span>
          <h1 className="popup__title">Heading</h1>
          <p className="popup__body">Sed lobortis justo vitae nisi fermentum, dapibus dictum eros malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae tellus et purus faucibus vehicula. Morbi felis tellus, ultrices vel pellentesque ut, efficitur vitae orci. Quisque sit amet sem vitae neque molestie finibus sit amet suscipit leo. Vivamus mattis sagittis blandit. Maecenas eget tortor blandit, venenatis ipsum ac, semper tortor.</p>
        </div>
      </div>
    );
  }
}

export default Popup;
