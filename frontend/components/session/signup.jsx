import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          adventurer: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.createNewUser(this.state)
      }

    render () {
      const logo = window.logo
      const formPhoto = window.formPhoto

        return (
            <div className="session-form">
             <img src={formPhoto} className="form-photo" />
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
            <button onClick={this.handleSubmit}>Create Account</button>
        </form>
      </div>
        )
    }
}

export default Signup;