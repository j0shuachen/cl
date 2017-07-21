import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email:'',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="login">Log In</Link>;
      }
    }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
        <div className="sign-up-form">
          <br/>
          <label className="form">
            <span className="login-input">Username:</span>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"/>
          </label>
          <br/>
          <label className="form">
            <span className="login-input">Password:</span>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="log-in-input"/>
          </label>
          <br/>
          <label className="form">
            <span className="login-input">Name:</span>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="login-input"
                placeholder="This will be your name displayed to other users"
                />
          </label>
          <br/>
          <label className="form">
            <span className="login-input"> Location:</span>
            <input type="text"
              value={this.state.location}
              onChange={this.update('location')}
              className="login-input"
              placeholder="We use this to find groups and events near you!"
              />

          <br/>
          </label>
          <label className="form">
            <input type="submit" value="Continue" className="formo"/>
</label>

      </div>

        <div className="signupwelcome"> Welcome to MeetUp!
          <br>

        </br>
        <br></br>
          <span className="privacy">By clicking "Continue", you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</span>
        </div>
        <br/>
        <div className="signupwelcome">Please {this.props.formType} <br></br>or<br></br> {this.navLink()}
        {this.renderErrors()}
        </div>
        </form>

      </div>
    );
  }
}


export default withRouter(SignUpForm);
