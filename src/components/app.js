import React, { Component } from 'react';
import Login from './login';
import Menu from './menu';
import Popup from './popup';
import '../styles/modules/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: true,
      showLogin: false
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onPopupClick = this.onPopupClick.bind(this);
  }

  onLoginClick(e) {
    e.preventDefault();

    this.setState({
      showLogin: true
    });
  }

  onPopupClick(e) {
    e.preventDefault();

    this.setState({
      showPopup: false
    });
  }

  render() {
    return (
      <div className="app">
        <Menu onLoginClick={this.onLoginClick}/>
        {this.state.showLogin ?
          <Login /> :
          null
        }
        {this.state.showPopup ?
          <Popup onClick={this.onPopupClick} /> :
          null
        }
      </div>
    );
  }
}

export default App;
