import React from 'react';
import '../styles/modules/login.css';

class Login extends React.Component {

  render() {
    return (
      <div className="login">
        <div className="login__inner-wrapper">
          <h1 className="login__title">Log in</h1>
          <input className="login__input" type="email" placeholder="E-mail address"/>
          <button className="button">Log in</button>
          <p className="login__text">Don't have an account? Register here</p>
        </div>
      </div>
    );
  }
}

export default Login;

