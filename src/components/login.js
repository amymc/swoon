import React from 'react';
import '../styles/modules/login.css';

class Login extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false,
      showSignup: false
    };

    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  onRegisterClick(e) {
    e.preventDefault();

     this.setState({
      showSignup: true
    });
  }

  onLoginClick(e) {
    e.preventDefault();

    this.validateEmail();
  }

  validateEmail() {
    console.log('validate');
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
      this.props.onLoginSuccess();
    }
  }

  renderLogin() {
    return(
      <div className="login__inner-wrapper">
        <h1 className="login__title">Log in</h1>
        <div className="login__error-wrapper">
          {this.state.invalidEmail ?
            <p className="login__text login__text--error">A valid email is required</p> :
            null
          }
        </div>
        <input className={"login__input" + (this.state.invalidEmail ? " login__input--error" : "")} value={this.state.email} type="email" placeholder="E-mail address" onChange={event => this.setState({email: event.target.value})}/>
        <button className="button button--standard" onClick={(e) => this.onLoginClick(e)}>
          {this.state.showSignup ? 'Sign up' : 'Log in'}
        </button> 
        <button className="button button--text" onClick={(e) => this.onRegisterClick(e)}>Don't have an account? Register here</button>
      </div>
    );
  }

  render() {
    return (
      <div className="login">
        {this.props.is_logged_in ?
          <p className="login__text">You have successfully signed in</p> :
          this.renderLogin()
        }
      </div>
    );
  }
}

export default Login;

