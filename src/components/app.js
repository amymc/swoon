import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Menu from './menu';
import Popup from './popup';
import Products from './products';
import ProductDetail from './productdetail';
import '../styles/modules/app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_logged_in: false,
      showLogin: false,
      showPopup: true,
      showProducts: false,
      showProductDetail: false,
      currentProduct: null
    };

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onProductsClick = this.onProductsClick.bind(this);
    this.onPopupClick = this.onPopupClick.bind(this);
    this.renderProductDetail = this.renderProductDetail.bind(this);
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

  renderProductDetail(title) {
    console.log('render', title);

     this.setState({
      showProductDetail: true,
      showProducts: false,
      currentProduct: title
    });
  }

  render() {
    const { products } = this.props;
    const currentProduct = products.filter(product => product.name === this.state.currentProduct)[0];

    return (
      <div className="app">
        <Menu onLoginClick={this.onLoginClick} onProductsClick={this.onProductsClick}/>
        {this.state.showLogin ?
          <Login onLoginSuccess={this.onLoginSuccess} is_logged_in={this.state.is_logged_in}/> :
          null
        }
        {this.state.showProducts && this.state.is_logged_in ?
          <Products products={products} onClick={this.renderProductDetail}/> :
          null
        }
        {this.state.showProducts && !this.state.is_logged_in ?
          <p className="text box">Please log in</p> :
          null
        }
        {this.state.showProductDetail ?
          <ProductDetail product={currentProduct}/> :
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
