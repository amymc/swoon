import React from 'react';
import '../styles/modules/login.css';

class Login extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    };

    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  onRegisterClick(e) {
    e.preventDefault();

     this.setState({
      showSignup: true
    });
  }


  render() {
    return (
      <div className="login">
        <div className="login__inner-wrapper">
          <h1 className="login__title">Log in</h1>
          <input className="login__input" type="email" placeholder="E-mail address"/>
          {this.state.showSignup ?
            <button className="button">Sign up</button> :
            <button className="button">Log in</button>
          }
          <p className="login__text" onClick={(e) => this.onRegisterClick(e)}>Don't have an account? Register here</p>
        </div>
      </div>
    );
  }
}

export default Login;

