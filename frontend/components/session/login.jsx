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
    e.preventDefault();
    this.props.login(this.state)
      // .then(() => this.props.history.push(''));
  }
    // const demoUser = 
    //       <button
    //       className>
    //         Demo User
    //       </button>
    loginGuest() {
      // this.setState({ username: 'Guest', password: 'hunter12' });
      const demo = {username: 'Guest', password: 'hunter12'};
      this.props.login(demo);
    }

  render() {
    // console.log(this.props);
    const logo = window.logo;
    const formPhoto = window.formPhoto;
      const guestLoginButton = (
        <button
          onClick={this.loginGuest}
          className="login-guest" >
          Demo as Guest
        </button>
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
