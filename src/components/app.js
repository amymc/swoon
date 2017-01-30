import React, { Component } from 'react';
import Login from './login';
import Menu from './menu';
import Popup from './popup';
import '../styles/modules/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_logged_in: false,
      showPopup: true,
      showLogin: false
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onPopupClick = this.onPopupClick.bind(this);
  }

  onLoginClick(e) {
    e.preventDefault();

    this.setState({
      showLogin: true
    });
  }

  onLoginSuccess() {
    console.log('login sucess');
    this.setState({
       is_logged_in: true
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
          <Login onLoginSuccess={this.onLoginSuccess} is_logged_in={this.state.is_logged_in}/> :
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
