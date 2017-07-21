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
    this.cap= this.cap.bind(this);
    this.navLink= this.navLink.bind(this);
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
      return <Link className="signtuptologin" to="/signup">Sign Up</Link>;
    } else {
      return <Link className="signtuptologin" to="login">Log In</Link>;
      }
    }

    cap(){
      if (this.props.formType === 'login'){
        return "Log In";
      }
      else{
        return "Sign Up";
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
        <div className="signupformbox">
          <div className="signupformtop">
            Sign Up
          </div>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
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
                className="login-input"/>
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
            </label>
            <br/>
            <input type="submit" value="Continue" className="formo"/>
          </form>
            <div className="signupwelcome">
              <span>Welcome to MeetUp! </span>
              <br/>
              <span className="privacy">By clicking "Continue", you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</span>
              <br/>
          </div>
            <div className="signupwelcome">
              <div>Already a member?</div>
              <div className="signtuptologin">{this.navLink()}</div>
            {this.renderErrors()}
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(SignUpForm);
