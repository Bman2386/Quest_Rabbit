import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    // this.setGuest = this.setGuest.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li 
          key={`error-${i}`}
          className="error"
          >
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) { 
    if (e) e.preventDefault();
    this.props.login(this.state)
  }

    loginGuest() {
      
    if (this.state.username !== 'Guest'){
      this.state.username = 'Guest';
      this.state.password = 'hunter12';
      return this.loginGuest()
      } else{
      return  this.handleSubmit();
      }
    }

  render() {
    const logo = window.logo;
    const formPhoto = window.formPhoto;
      const guestLoginButton = (
        <Link
        to="/"
          onClick={() => this.loginGuest()}
          className="login-guest" >
          Demo as Guest
        </Link>
      )
    
    return (
      <div className="session-form">
       <img src={formPhoto} className="form-photo"/>
        <form className='inter-form'>
          <Link to='/'>
          <img src={logo} className="logo"/>
          </Link>
          {this.renderErrors()}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder="Username"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password"
          />
            <button onClick={this.handleSubmit}>Log in</button>
            {guestLoginButton}
        </form>
      </div>
    );
  }
}

export default Login;
