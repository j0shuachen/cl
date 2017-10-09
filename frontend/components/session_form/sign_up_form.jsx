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
      <div>
        {this.props.errors.map((error, i) => (
          <div className='errorz' key={`error-${i}`}>
            {error}
          </div>
        ))}
      </div>
    );
  }
  // <ul>
  //   {this.props.errors.map((error, i) => (
  //     <li key={`error-${i}`}>
  //       {error}
  //     </li>
  //   ))}
  // </ul>





  render () {
    return (
      <div className="signup-form-container">

          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="signupformtop">
              Sign Up
            </div>
            <div className='signupformbody'>
            <label className="usernameform">
              <span className="signupques">Username:</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signupinput"/>
            </label>
            <br/>
            <label className="usernameform">
              <span className="signupques">Password:</span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signupinput"/>
            </label>
            <br/>
            <label className="usernameform">
              <span className="signupques">Name:</span>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="signupinput"
                  placeholder="This will be your name displayed to other users"
                  />
            </label>
            <br/>
            <label className="usernameform">
              <span className="signupques"> Location:</span>
              <input type="text"
                value={this.state.location}
                onChange={this.update('location')}
                className="signupinput"
                placeholder="We use this to find groups and events near you!"
                />
            </label>
            <br/>
              {this.renderErrors()}

            <input type="submit" value="Continue" className="formos"/>
            </div>
              <div className="signupwelcome">
                <span className="privacy">By clicking "Continue", you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</span>
                <br/>
                <div className='signupbuttontop'>
                    <div className="alreadyamember">Already a member?</div>
                    <br/>
                    <div className="signtuptologin">{this.navLink()}</div>
                    </div>
              </div>
        </form>

          </div>

    );
  }
}


export default withRouter(SignUpForm);
