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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to MeetUp!
        <br/>
        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}
        <div className="login-form">
          <br/>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"/>
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"/>
          </label>
          <br/>
          <label>Name:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="login-input"
                placeholder="This will be your name displayed to other users"
                />
          </label>
          <br/>
          <label>`Location:`
            <input type="text"
              value={this.state.location}
              onChange={this.update('location')}
              className="login-input"
              placeholder="We use this to find groups and events near you!"
              />
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </div>
        </form>
      </div>
    );
  }
}


export default withRouter(SignUpForm);
