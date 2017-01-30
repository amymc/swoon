import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Menu from './menu';
import Popup from './popup';
import Products from './products';
import '../styles/modules/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_logged_in: false,
      showLogin: false,
      showPopup: true,
      showProducts: false
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onProductsClick = this.onProductsClick.bind(this);
    this.onPopupClick = this.onPopupClick.bind(this);
  }

  onLoginClick(e) {
    e.preventDefault();

    this.setState({
      showLogin: true,
      showProducts: false
    });
  }

  onLoginSuccess() {
    this.setState({
       is_logged_in: true
    });
  }

  onPopupClick(e) {
    if(e) {
      e.preventDefault();
    }

    this.setState({
      showPopup: false
    });
  }

  onProductsClick(e) {
    e.preventDefault();

    this.setState({
      showLogin: false,
      showProducts: true
    });
  }

  render() {
    return (
      <div className="app">
        <Menu onLoginClick={this.onLoginClick} onProductsClick={this.onProductsClick}/>
        {this.state.showLogin ?
          <Login onLoginSuccess={this.onLoginSuccess} is_logged_in={this.state.is_logged_in}/> :
          null
        }
        {this.state.showProducts && this.state.is_logged_in ?
          <Products products={this.props.products}/> :
          null
        }
        {this.state.showProducts && !this.state.is_logged_in ?
          <p>Please log in</p> :
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

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  null
)(App);
