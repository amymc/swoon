import React, { Component } from 'react';
import Menu from './menu';
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
      showPopup: false
    });
  }

  render() {
    return (
      <div className="app">
        <Menu />
        {this.state.showPopup ?
          <Popup onClick={this.handleClick} /> :
          null
        }
      </div>
    );
  }
}

export default App;
