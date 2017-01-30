import React, { Component } from 'react';
import Popup from './popup';
import '../styles/modules/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.showPopup ?
          <Popup onClick={this.handleClick} /> :
          null
        }
      </div>
    );
  }
}

export default App;
