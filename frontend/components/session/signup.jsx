import React from 'react';

class Signup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
          this.setState({ [type]: e.target.value });
        };
      }

      handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then(() => this.props.history.push(`/users/${this.props.user.id}`));
      }

    render () {
      const logo = window.logo
      const formPhoto = window.formPhoto

        return (
            <div className="session-form">
             <img src={formPhoto} className="form-photo" />
        <form>
        <img src={logo} />
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