import React from 'react';
import '../styles/modules/login.css';

class Login extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      invalidEmail: false,
      showSignup: false
    };

    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onSignupClick = this.onSignupClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  onRegisterClick(e) {
    e.preventDefault();

     this.setState({
      showSignup: true
    });
  }

  onSignupClick(e) {
    e.preventDefault();

    this.validateEmail();

    //  this.setState({
    //   showSignup: true
    // });
  }

  validateEmail() {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(this.state.email)) {
      this.setState({
        invalidEmail: true
      });
    } else {
      this.setState({
        invalidEmail: false
      });
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login__inner-wrapper">
          <h1 className="login__title">Log in</h1>
          <div className="login__error-wrapper">
            {this.state.invalidEmail ?
              <p className="login__error">A valid email is required</p> :
              null
            }
          </div>
          <input className={"login__input" + (this.state.invalidEmail ? " login__input--error" : "")} type="email" placeholder="E-mail address"/>
          {this.state.showSignup ?
            <button className="button button--standard" onClick={(e) => this.onSignupClick(e)}>Sign up</button> :
            <button className="button button--standard">Log in</button>
          }
          <button className="button button--text" onClick={(e) => this.onRegisterClick(e)}>Don't have an account? Register here</button>
        </div>
      </div>
    );
  }
}

export default Login;

